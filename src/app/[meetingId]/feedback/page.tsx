'use client'

import { useRouter } from 'next/navigation'

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const router = useRouter()
  const meetingId = '4' // 임시로 고정

  // 참여자 배열
  const participants = [
    { name: '조민서', feedback: '회의 내용에 적극적으로 참여했습니다.' },
    { name: '오승민', feedback: '중요한 의견을 제시했습니다.' },
    { name: '김정훈', feedback: '발언 빈도가 다소 낮았습니다.' },
    { name: '이상건', feedback: '회의 진행에 큰 도움을 주었습니다.' },
  ]

  // 참여자 버튼 클릭 시 페이지 이동
  const handleButtonClick = (participantName: string) => {
    router.push(`/${meetingId}/feedback/${encodeURIComponent(participantName)}`)
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow rounded-lg p-6 border border-blue-200">
        {/* 헤더 섹션 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">
            Okestro Meeting Coach
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>

        {/* 차트 및 피드백 섹션 */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-medium text-black mb-2">
              참여자 목록
            </h3>
            <div className="flex">
              {/* 차트 섹션 */}
              <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-sm mr-4">
                <div className="text-center font-medium text-black mb-4">
                  참여자별 발언 시간
                </div>
                {/* 차트 예시 */}
                <div className="h-56 bg-blue-50 rounded-lg flex items-center justify-center shadow">
                  <span className="text-blue-600 font-medium">Chart</span>
                </div>
              </div>

              {/* 피드백 섹션 */}
              <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-base font-medium text-black mb-2">
                  참여자 목록
                </h3>
                <ul className="space-y-4">
                  {participants.map((participant, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <button
                        onClick={() => handleButtonClick(participant.name)}
                        className="font-semibold text-white bg-blue-600 w-28 h-10 rounded-md shadow hover:bg-blue-700 transition flex items-center justify-center"
                      >
                        {participant.name}
                      </button>
                      <p className="text-black">{participant.feedback}</p>
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
