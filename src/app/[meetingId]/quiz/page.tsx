'use client'
import { useState, useEffect } from 'react'

/**
 * 퀴즈 페이지.
 */
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const totalQuestions = 5
  const [timeLeft, setTimeLeft] = useState(10) // 타이머를 10초로 설정
  const [showResult, setShowResult] = useState(false) // 결과 모달 표시 여부
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(totalQuestions).fill(null),
  ) // 각 문제의 정답 여부
  const [selectedOption, setSelectedOption] = useState<number | null>(null) // 현재 선택된 옵션

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    } else {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1)
        setTimeLeft(10)
        setSelectedOption(null) // 옵션 초기화
      }
    }
  }, [timeLeft, currentQuestion])

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleSubmit = () => {
    const correctAnswer = Math.floor(Math.random() * 4) // 임의의 정답 설정 (0~3 중 하나)
    const isCorrect = selectedOption === correctAnswer
    const newAnswers = answers.map((answer, index) =>
      index + 1 === currentQuestion ? isCorrect : answer,
    )
    setAnswers(newAnswers)
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
      setTimeLeft(10)
      setSelectedOption(null) // 다음 문제로 넘어갈 때 옵션 초기화
    } else {
      setShowResult(true) // 마지막 문제에서 결과 표시
    }
  }

  const closeModal = () => {
    setShowResult(false)
    setCurrentQuestion(1) // 퀴즈 다시 시작
    setAnswers(Array(totalQuestions).fill(null)) // 정답 초기화
    setTimeLeft(10)
    setSelectedOption(null)
  }

  return (
    <div className="border border-gray-300 p-5 w-96 mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-between mb-3">
        <span className="text-sm text-blue-600">
          문제 풀이 현황 {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div className="flex items-center mb-3">
        <div className="flex-1 h-2 bg-gray-200 rounded-lg overflow-hidden mr-2">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${(timeLeft / 10) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm text-blue-600">{timeLeft}</span>
      </div>
      <div className="mb-3">
        <span className="font-bold text-blue-600 mb-1 block">
          문제 {currentQuestion}/{totalQuestions}
        </span>
        <div className="border border-gray-300 p-3 rounded-lg">
          <div className="text-gray-800 font-semibold mb-3">
            Q{currentQuestion}. 다음 중 가장 적합한 답을 선택하세요.
          </div>
          {/* 객관식 옵션 */}
          <div className="space-y-2">
            {['옵션 1', '옵션 2', '옵션 3', '옵션 4'].map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full py-2 px-4 border rounded-lg text-left ${
                  selectedOption === index
                    ? 'bg-blue-100 border-blue-500 text-blue-600'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-blue-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        className={`w-full py-2 rounded-lg ${
          selectedOption !== null
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleSubmit}
        disabled={selectedOption === null}
      >
        답안 제출
      </button>

      {showResult && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-64">
            <h3 className="text-lg font-bold mb-3">퀴즈 결과</h3>
            <p className="text-sm mb-3 text-gray-800">
              5문제 중 {answers.filter((a) => a).length}문제 정답입니다.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {answers.map((isCorrect, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    isCorrect ? 'bg-green-300' : 'bg-red-300'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <button
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={closeModal}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizPage
