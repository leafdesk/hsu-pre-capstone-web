'use client'

import { useRouter } from 'next/navigation'

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const router = useRouter()
  const meetingId = '1' //임시로 고정

  // 참여자 배열
  const participants = [
    { name: '조민서', feedback: 'Feedback...' },
    { name: '오승민', feedback: 'Feedback...' },
    { name: '김정훈', feedback: 'Feedback...' },
    { name: '이상건', feedback: 'Feedback...' },
  ]

  // 참여자 버튼 클릭 시 페이지 이동
  const handleButtonClick = (participantName: string) => {
    router.push(`/${meetingId}/feedback/${encodeURIComponent(participantName)}`)
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex">
              {/* 차트 섹션 */}
              <div className="flex-1 bg-white p-4 rounded-lg mr-4">
                {/* 차트 */}
                <div className="text-center font-medium text-gray-600 mb-4">
                  참여자별 발언 시간
                </div>
                {/* 차트 예시 */}
                <div className="h-56 bg-white shadow-lg border rounded-lg flex items-center justify-center">
                  <span>Chart</span>
                </div>
              </div>

              {/* 피드백 섹션 */}
              <div className="flex-1 white p-4 rounded-lg shadow-lg border">
                <h3 className="text-base font-medium text-gray-700 mb-2">
                  참여자 목록
                </h3>
                <ul className="space-y-4">
                  {participants.map((participant, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <button
                        onClick={() => handleButtonClick(participant.name)}
                        className=" text-gray-900 bg-gray-100 px-3 py-1.5 border border-gray-300 rounded-md
                       hover:bg-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-200 ease-out"
                      >
                        {participant.name}
                      </button>
                      <p className="text-gray-600">{participant.feedback}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
