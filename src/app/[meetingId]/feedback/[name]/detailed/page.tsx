'use client'

import { useParams, useRouter } from 'next/navigation'

/**
 * 자세한 피드백 페이지.
 */
const DetailedFeedbackPage = () => {
  const router = useRouter()
  const { meetingId, name } = useParams()

  // 기본값은 'Minseo'
  const participantName = Array.isArray(name) ? name[0] : name || 'Minseo'

  const decodedName = decodeURIComponent(participantName)
  const displayName = decodedName.charAt(0).toUpperCase() + decodedName.slice(1)

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

        {/* 상세 피드백 섹션 */}
        <div className="space-y-4">
          <h3 className="font-medium text-blue-600 mb-2">
            {displayName}님에 대한 상세 피드백
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            {/* 예시 차트 및 피드백 상세 내용 */}
            <div className="h-64 bg-blue-50 rounded-lg mb-4 flex items-center justify-center shadow">
              <span className="text-blue-600">예시 차트</span>
            </div>
            <p className="text-gray-700">
              {displayName}님에 대한 상세 피드백입니다. <br /> 회의 중{' '}
              {displayName}님의 발언 및 성과에 대한 구체적인 데이터와 차트,
              인사이트를 제공하여 종합적인 내용을 보여줄 수 있습니다.
            </p>
          </div>
        </div>

        {/* 뒤로가기 버튼 */}
        <div className="flex justify-start mt-6">
          <button
            onClick={handleBackClick}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 text-sm"
          >
            &larr; 뒤로가기
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailedFeedbackPage
