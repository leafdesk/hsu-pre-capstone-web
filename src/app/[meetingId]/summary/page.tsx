'use client'

/**
 * 영상 다시 보기 및 요약본 보기 페이지.
 */
const SummaryPage = () => {
  // 요약 포인트 배열
  const summaryPoints = [
    '첫 번째 요약 포인트',
    '두 번째 요약 포인트',
    '세 번째 요약 포인트',
    '네 번째 요약 포인트',
  ]

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow rounded-lg p-6">
        {/* 헤더 섹션 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>

        {/* 요약 섹션 */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 mb-2">Summary:</h3>
          <div className="space-y-4">
            {summaryPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-start"
              >
                <span className="font-bold text-blue-600 mr-4">
                  {index + 1}.
                </span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage
