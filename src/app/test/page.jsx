'use client'

import { getQuizInfo } from '@/api/meeting-coach-api'

import { useEffect, useState } from 'react'

const fetchData = async () => {
  const quiz = await getQuizInfo(1)
  return quiz
}

const TempPage = () => {
  const [quiz, setQuiz] = useState()

  useEffect(() => {
    fetchData().then((퀴즈) => {
      setQuiz(퀴즈)
      console.log(퀴즈)
    })
  }, [])

  return (
    <>
      <button
        onClick={() => console.log(quiz)}
        className="bg-blue-500 px-5 py-4 rounded-lg font-medium text-center"
      >
        퀴즈 API 요청
      </button>

      {/* quiz 데이터가 있을 경우 화면에 출력 */}
      {quiz && (
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="font-bold text-lg mb-2">퀴즈 정보</h3>
          <p>
            <strong>퀴즈 ID:</strong> {quiz.quiz_id}
          </p>
          <p>
            <strong>회의 ID:</strong> {quiz.meeting_id}
          </p>
          <p>
            <strong>질문:</strong> {quiz.question}
          </p>
          <div>
            <strong>옵션:</strong>
            <ul className="list-disc ml-5 mt-1">
              {quiz.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
          <p>
            <strong>정답:</strong> {quiz.correct_answer + 1}번
          </p>
        </div>
      )}
    </>
  )
}

export default TempPage
