'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const meetingId = pathSegments[1] // meetingId 추출
  const name = decodeURIComponent(pathSegments[3] || 'Minseo') // name 추출

  const displayName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow rounded-lg p-6">
        {/* 헤더 섹션 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach &gt; {displayName}
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>

        {/* 상세 피드백 섹션 */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 mb-2">
            {displayName}님에 대한 상세 피드백
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            {/* 예시 차트 및 피드백 상세 내용 */}
            <h3 className="font-medium text-gray-700 mb-2">Feedback Start</h3>
            <div className="h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
              <span>예시 차트</span>
            </div>
            <p className="text-gray-700">
              {displayName}님에 대한 상세 피드백입니다.
              <br></br>
              <br></br>
              <span className="text-sm text-gray-500">
                회의 중 {displayName}님의 발언 및 성과에 대한 구체적인 데이터와
                차트, 인사이트를 제공하여 종합적인 내용을 보여줄 수 있습니다.
              </span>
            </p>
          </div>
          <div className="flex justify-between mt-6">
            {/* 뒤로가기 링크 */}
            <Link
              href={`/${meetingId}/feedback`}
              className="bg-gray-300 py-2 px-4 rounded-lg shadow hover:bg-gray-400 text-sm"
            >
              &larr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
