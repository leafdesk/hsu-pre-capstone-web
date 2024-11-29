'use client'

import { useRouter, useParams, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Layout, Plus } from 'lucide-react'
import { useUser } from '@/context/user-context'

/**
 * 레이아웃 사이드 바.
 */
const LayoutSideBar = () => {
  const router = useRouter()
  const params = useParams()
  const { username, setUsername } = useUser()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isAddMeetingModalOpen, setIsAddMeetingModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)

  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const tab = pathSegments[2]

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

  const openAddMeetingModal = () => {
    setIsAddMeetingModalOpen(true) // 회의 추가 모달 열기
    setFilePreview(null)
  }

  const closeAddMeetingModal = () => {
    setIsAddMeetingModalOpen(false) // 회의 추가 모달 닫기
    setSelectedFile(null) // 선택된 파일 초기화
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    if (file) {
      setFilePreview(URL.createObjectURL(file))
    }
  }

  // Clean up the URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview)
      }
    }
  }, [filePreview])

  const handleAddMeeting = () => {
    if (selectedFile) {
      console.log('업로드된 파일:', selectedFile)
      alert('회의 영상이 추가되었습니다.')
      setFilePreview(null)
      closeAddMeetingModal()
    } else {
      alert('파일을 선택해주세요.')
    }
  }

  // 회의 목록 데이터
  const meetings = [
    { id: 1, name: '13주차 프로젝트 진행상황 점검 회의', icon: Layout },
    { id: 2, name: '프리캡스톤 전시회 준비 회의', icon: Layout },
    { id: 3, name: '프리캡스톤 전시회 준비 회의', icon: Layout },
    // { id: 4, name: 'temp', icon: Layout },
  ]

  // 회의 목록 클릭 핸들러
  const handleMeetingClick = (meetingId: number) => {
    router.push(`/${meetingId}/${tab}`)
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
            <p className="font-medium text-gray-700">{username}</p>
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
          <div className="flex justify-between">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              회의 목록
            </h3>
            <button
              onClick={openAddMeetingModal}
              className="text-black hover:text-yellow-600 focus:outline-none"
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>
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

      {/* 회의 영상 추가 모달 */}
      {isAddMeetingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[500px] max-w-full flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              동영상 업로드
            </h3>
            <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
              {filePreview ? (
                <video controls>
                  <source src={filePreview} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 16l-4-4-4 4M12 12v9M20 20h-1a2 2 0 01-2-2v-7a2 2 0 012-2h1a2 2 0 012 2v7a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">
                    동영상을 여기에 드래그하여 업로드하세요
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    MP4, AVI, MOV, WMV 등 동영상 형식의 파일만 지원됩니다.
                  </p>
                  <input
                    type="file"
                    accept="video/*" // 동영상 파일만 허용
                    onChange={handleFileChange}
                    className="hidden" // 파일 선택 버튼을 숨기고
                    id="file-upload" // 라벨과 연결
                  />
                  <label
                    htmlFor="file-upload"
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition cursor-pointer"
                  >
                    파일 선택
                  </label>
                </>
              )}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeAddMeetingModal}
                className="text-sm text-gray-500 hover:underline hover:text-gray-700"
              >
                취소
              </button>
              <button
                onClick={handleAddMeeting}
                className="text-sm text-gray-500 hover:underline hover:text-gray-700"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default LayoutSideBar
