'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'

const LayoutHeader = () => {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()

  const SELECTED_TAB_STYLE = `px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition`
  const TAB_STYLE = `px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition`

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          회의 ID: {params.meetingId}
        </h1>
        <div className="flex space-x-4">
          <button
            className={
              pathname === `/${params.meetingId}/summary`
                ? SELECTED_TAB_STYLE
                : TAB_STYLE
            }
            onClick={() => router.push(`/${params.meetingId}/summary`)}
          >
            영상 요약본
          </button>
          <button
            className={
              pathname === `/${params.meetingId}/feedback`
                ? SELECTED_TAB_STYLE
                : TAB_STYLE
            }
            onClick={() => router.push(`/${params.meetingId}/feedback`)}
          >
            피드백
          </button>
          <button
            className={
              pathname === `/${params.meetingId}/quiz`
                ? SELECTED_TAB_STYLE
                : TAB_STYLE
            }
            onClick={() => router.push(`/${params.meetingId}/quiz`)}
          >
            퀴즈
          </button>
        </div>
      </div>
    </header>
  )
}

export default LayoutHeader
