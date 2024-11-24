'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'

const LayoutHeader = () => {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()

  const SELECTED_TAB_STYLE = `px-2 text-gray-800 font-extrabold text-md transition duration-200`
  const TAB_STYLE = `px-2 text-gray-800 font-medium text-md transition duration-200 hover:text-gray-600`

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
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
