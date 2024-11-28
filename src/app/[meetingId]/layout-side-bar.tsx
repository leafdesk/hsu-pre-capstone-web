'use client'

import { useRouter, useParams } from 'next/navigation'
import { useState } from 'react'
import { Layout } from 'lucide-react'

/**
 * 레이아웃 사이드 바.
 */
const LayoutSideBar = () => {
  const router = useRouter()
  const params = useParams()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const handleProfileClick = () => {
    const meetingId = params.meetingId
    router.push(`/${meetingId}/profile`)
  }

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true) // 로그아웃 모달 열기
  }

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false) // 로그아웃 모달 닫기
  }

  const confirmLogout = () => {
    router.push('/meeting') // StartPage로 이동
  }

  // 회의 목록 데이터
  const meetings = [
    { id: 1, name: '1번 회의', icon: Layout },
    { id: 2, name: '2번 회의', icon: Layout },
    { id: 3, name: '3번 회의', icon: Layout },
    { id: 4, name: '4번 회의', icon: Layout },
  ]

  // 회의 목록 클릭 핸들러
  const handleMeetingClick = (meetingId: number) => {
    router.push(`/${meetingId}/summary`) // 해당 meetingId의 summary 페이지로 이동
  }

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">내 프로필</h2>
        <div className="mt-4 flex items-center space-x-3">
          <button
            className="h-10 w-10 rounded-full bg-gray-200 focus:outline-none hover:ring-2 hover:ring-blue-300"
            onClick={handleProfileClick}
          ></button>
          <div>
            <p className="font-medium text-gray-700">Username</p>
            <button
              onClick={openLogoutModal}
              className="text-sm text-yellow-600 hover:underline"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        <hr className="border-gray-300 my-4" />
        <div className="px-5 mb-4">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            회의 목록
          </h3>
          <ul className="mt-2 space-y-2">
            {meetings.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMeetingClick(item.id)}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
                >
                  <item.icon className="h-5 w-5 mr-3 text-gray-500" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300 my-4" />
        <div className="px-5">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            참여자
          </h3>
          <ul className="mt-2 space-y-2">
            {['조민서', '오승민', '김정훈', '이상건'].map((name, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-700">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* 로그아웃 모달 */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-4">
              로그아웃 하시겠습니까?
            </h3>
            <div className="flex justify-center space-x-6">
              <button
                onClick={confirmLogout}
                className="text-sm text-gray-500 hover:underline font-semibold"
              >
                예
              </button>
              <button
                onClick={closeLogoutModal}
                className="text-sm text-gray-500 hover:underline font-semibold"
              >
                아니오
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default LayoutSideBar
