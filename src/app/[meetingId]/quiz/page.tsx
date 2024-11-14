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
  const [answers, setAnswers] = useState<(boolean | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]) // 각 문제의 정답 여부

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    } else {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1)
        setTimeLeft(10)
      }
    }
  }, [timeLeft, currentQuestion])

  const handleSubmit = () => {
    const newAnswers = answers.map((answer, index) =>
      index + 1 <= currentQuestion ? Math.random() > 0.5 : answer,
    )
    setAnswers(newAnswers)
    setShowResult(true)
  }

  const closeModal = () => {
    setShowResult(false)
  }

  return (
    <div className="border border-gray-300 p-5 w-80 mx-auto">
      <div className="flex justify-between mb-3">
        <span className="text-sm">
          문제 풀이 현황 {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div className="flex items-center mb-3">
        <div className="flex-1 h-2 bg-gray-200 rounded-lg overflow-hidden mr-2">
          <div
            className="h-full bg-red-500"
            style={{ width: `${(timeLeft / 10) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm">{timeLeft}</span>
      </div>
      <div className="mb-3">
        <span className="font-bold mb-1 block">
          문제 {currentQuestion}/{totalQuestions}
        </span>
        <div className="border border-gray-300 p-3 rounded-lg">
          <div>Q{currentQuestion}.</div>
          <textarea
            placeholder="A."
            className="w-full h-20 border border-gray-300 rounded-lg p-2 mt-2 resize-none"
          ></textarea>
        </div>
      </div>
      <button
        className="w-full py-2 bg-gray-300 rounded-lg"
        onClick={handleSubmit}
      >
        답안 제출
      </button>

      {showResult && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-64">
            <h3 className="text-lg font-bold mb-3">정답 수는?</h3>
            <p className="text-sm mb-3">
              5문제 중 {answers.filter((a) => a).length}문제
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
              className="w-full py-2 bg-gray-300 rounded-lg"
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
