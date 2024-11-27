'use client'
import { useState, useEffect } from 'react'

const quizQuestions = [
  {
    question: '이번 회의는 몇 주차 프로젝트 진행상황 점검 회의였나요?',
    options: ['11주차', '12주차', '13주차', '14주차'],
    correctAnswer: 2,
  },
  {
    question: '현재 서버 작업의 진행 상태는 어떠한가요?',
    options: [
      '초기 설계 단계',
      '모델 완성 및 서버 업로드 예정',
      '테스트 단계',
      '완전히 완료된 상태',
    ],
    correctAnswer: 1,
  },
  {
    question: '프로젝트의 최종 발표일은 언제인가요?',
    options: ['수요일', '목요일', '금요일', '토요일'],
    correctAnswer: 1,
  },
  {
    question:
      '회의 중 가장 많은 발언을 한 참가자는 누구인가요? (감정 데이터 기준)',
    options: ['참가자1', '참가자2', '참가자3', '참가자4'],
    correctAnswer: 0,
  },
  {
    question: '현재 프론트엔드 팀이 진행 중인 작업이 아닌 것은?',
    options: [
      '레이아웃 수정',
      '디자인 개선',
      '데이터베이스 구축',
      '로그인 기능 구현',
    ],
    correctAnswer: 2,
  },
]

/**
 * 퀴즈 페이지.
 */
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const totalQuestions = quizQuestions.length
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
    const correctAnswer = quizQuestions[currentQuestion - 1].correctAnswer
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
    <div className="border border-gray-300 p-5 w-[600px] mx-auto bg-white rounded-lg shadow-2xl">
      <div className="flex justify-between mb-3">
        <span className="text-sm text-black font-semibold">
          문제 풀이 현황 {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div className="flex items-center mb-3">
        <div className="flex-1 h-2 bg-white rounded-lg overflow-hidden mr-2 shadow-inner">
          <div
            className="h-full"
            style={{
              width: `${(timeLeft / 10) * 100}%`,
              backgroundColor: timeLeft <= 3 ? 'red' : 'black', // 3초부터 빨간색으로 변경
              boxShadow:
                timeLeft <= 3 ? '0 0 10px rgba(255, 0, 0, 0.7)' : 'none',
            }}
          ></div>
        </div>
        <span
          className={`text-sm font-bold ${
            timeLeft <= 3 ? 'text-red-500' : 'text-black'
          }`}
        >
          {timeLeft}
        </span>
      </div>

      <div className="mb-3">
        <span className="font-bold text-black mb-1 block">
          문제 {currentQuestion}/{totalQuestions}
        </span>
        <div className="border border-gray-300 p-3 rounded-lg bg-gray-100 shadow-md">
          <div className="text-black font-semibold mb-3">
            {quizQuestions[currentQuestion - 1].question}
          </div>
          {/* 객관식 옵션 */}
          <div className="space-y-2">
            {quizQuestions[currentQuestion - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full py-3 px-4 border rounded-lg text-left transition-all transform shadow-md hover:scale-103 active:scale-98 ${
                  selectedOption === index
                    ? 'bg-gray-200 text-black border-gray-300'
                    : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        className={`w-full py-3 rounded-lg transition-all transform shadow-lg ${
          selectedOption !== null
            ? 'bg-yellow-500 text-black hover:bg-yellow-600 active:scale-98'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleSubmit}
        disabled={selectedOption === null}
      >
        답안 제출
      </button>

      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
            <h3 className="text-lg font-bold mb-3">퀴즈 결과</h3>
            <p className="text-sm mb-3 text-black">
              5문제 중 {answers.filter((a) => a).length}문제 정답입니다.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {answers.map((isCorrect, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-md ${
                    isCorrect ? 'bg-green-300' : 'bg-red-300'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <button
              className="w-full py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition transform active:scale-98"
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
