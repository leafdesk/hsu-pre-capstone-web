'use client'

import {
  getMeetingData,
  getQuizInfo,
  getUserFeedback,
} from '@/api/meeting-coach-api'

const fetchData = async () => {
  const feedback = await getUserFeedback(1, 1)
  const quiz = await getQuizInfo(1)
  const meeting = await getMeetingData(1)

  console.log(feedback, quiz, meeting)
}

const TempPage = () => {
  return (
    <>
      <button onClick={() => fetchData()}>API TEST</button>
      <br />
      <br />

      <button
        className="bg-blue-500 px-5 py-4 rounded-lg font-medium text-center"
        onClick={async () => {
          const response = await getUserFeedback(1, 1)
          console.log(response)
        }}
      >
        피드백 API 요청
      </button>
      <br />
      <br />

      <button
        className="bg-blue-500 px-5 py-4 rounded-lg font-medium text-center"
        onClick={async () => {
          const response = await getQuizInfo(1)
          console.log(response)
        }}
      >
        퀴즈 API 요청
      </button>
      <br />
      <br />

      <button
        className="bg-blue-500 px-5 py-4 rounded-lg font-medium text-center"
        onClick={async () => {
          const response = await getMeetingData(1)
          console.log(response)
        }}
      >
        요약본 API 요청
      </button>
      <br />
      <br />
    </>
  )
}

export default TempPage
