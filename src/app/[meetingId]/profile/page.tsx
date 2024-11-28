'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

/**
 * 회원가입 정보 수정 페이지
 */
const ProfilePage = () => {
  const params = useParams() // meetingId 가져오기
  const router = useRouter() // 페이지 이동을 위한 라우터
  const meetingId = params.meetingId

  const [userData, setUserData] = useState({
    name: '홍길동',
    email: 'example@example.com',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // API 요청
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('프로필 업데이트 실패')
      }

      alert('프로필이 성공적으로 업데이트되었습니다.')
    } catch (error) {
      console.error(error)
      alert('프로필 업데이트 중 오류가 발생했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 취소 버튼 클릭 핸들러
  const handleCancel = () => {
    router.push(`/${meetingId}/summary`) // 취소 시 메인 페이지로 이동 (예: /1)
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 relative">
        {/* 취소 버튼 */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="취소"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          프로필 수정
        </h2>
        <p className="text-gray-600 mb-8">아래 정보를 수정하고 저장하세요.</p>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* 이름 입력 */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* 이메일 입력 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* 저장 버튼 */}
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-black ${
              isSubmitting
                ? 'bg-yellow-400 cursor-not-allowed'
                : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? '저장 중...' : '저장'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage
