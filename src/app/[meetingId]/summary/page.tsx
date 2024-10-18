'use client'

/**
 * 영상 다시 보기 및 요약본 보기 페이지.
 */
const SummaryPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Summary:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>첫 번째 요약 포인트</li>
              <li>두 번째 요약 포인트</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage
