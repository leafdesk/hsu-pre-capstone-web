import axios from 'axios'

/**
 * Swagger UI 가상 서버 URL. (테스트)
 */
const SWAGGER_SERVER_URL =
  'https://virtserver.swaggerhub.com/LSG001008_1/Test/1.0.0'

/**
 * 서버 URL. (운영계)
 */
const SERVER_URL = 'http://43.203.122.230'

/**
 * API 클라이언트.
 */
const client = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * 회의 데이터 조회. (요약본)
 */
export const getMeetingData = async (meetingId: number): Promise<Meeting> => {
  const response = await client.get<Meeting>(`/api/meetings/${meetingId}`)
  return response.data
}

/**
 * 사용자 피드백 조회.
 */
export const getUserFeedback = async (
  meetingId: number,
  userId: number,
): Promise<Feedback> => {
  const response = await client.get<Feedback>(
    `/api/feedback/${meetingId}/${userId}`,
  )
  return response.data
}

/**
 * 퀴즈 정보 조회.
 */
export const getQuizInfo = async (meetingId: number): Promise<Quiz> => {
  const response = await client.get<Quiz>(`/api/quizzes/${meetingId}`)
  return response.data
}

interface Meeting {
  meeting_id: number
  title: string
  meeting_date: string
  participants: string
  video_url: string
  summary: string
}

interface Feedback {
  meeting_id: number
  user_id: number
  motion_recognition: string
  gesture_recognition: string
  pitch_frequency_analysis: string
  feedback: string
}

interface Quiz {
  quiz_id: number
  meeting_id: number
  question: string
  options: string[]
  correct_answer: number
}
