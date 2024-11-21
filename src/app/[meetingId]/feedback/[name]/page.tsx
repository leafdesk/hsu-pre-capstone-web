'use client'

import { useRouter, useParams } from 'next/navigation'

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const router = useRouter()
  const { meetingId, name } = useParams()

  // 기본값은 'Minseo'
  const participantName = Array.isArray(name) ? name[0] : name || 'Minseo'

  const decodedName = decodeURIComponent(participantName)
  const displayName =
    typeof decodedName === 'string'
      ? decodedName.charAt(0).toUpperCase() + decodedName.slice(1)
      : 'Minseo'

  // 버튼 클릭 시 더 자세한 피드백 화면으로 이동
  const handleDetailedFeedbackClick = () => {
    router.push(`/${meetingId}/feedback/${participantName}/detailed`)
  }

  // 뒤로 가기 버튼 클릭 핸들러
  const handleBackClick = () => {
    router.back()
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow rounded-lg p-6 border border-blue-200">
        {/* 헤더 섹션 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-blue-600">
            Okestro Meeting Coach &gt; {displayName}
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>

        {/* 피드백 */}
        <div className="space-y-4">
          <h3 className="font-medium text-blue-600 mb-2">Feedback Start</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                {displayName} :
              </h4>
              {/* 피드백 내용 */}
              <div className="h-64 bg-blue-50 rounded-lg shadow"></div>
            </div>

            {/* 버튼 섹션 */}
            <div className="flex justify-between mt-6">
              {/* 뒤로가기 버튼 */}
              <button
                onClick={handleBackClick}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 text-sm"
              >
                &larr; 뒤로가기
              </button>

              {/* 자세한 피드백 보기 버튼 */}
              <button
                onClick={handleDetailedFeedbackClick}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700"
              >
                자세한 피드백 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
