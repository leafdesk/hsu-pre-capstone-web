'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useUser } from '@/context/user-context' // UserContext import

const ProfilePage = () => {
  const router = useRouter()
  const params = useParams() // Extract params
  const { username, setUsername } = useUser() // 사용자 이름과 설정 함수 가져오기
  const [name, setName] = useState(username) // 상태로 사용자 이름 관리
  const [isSubmitting, setIsSubmitting] = useState(false) // 제출 상태 관리

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true) // 제출 시작
    setUsername(name) // 사용자 이름 업데이트
    router.push(`/${params.meetingId}/summary`) // 요약 페이지로 이동
  }

  const handleCancel = () => {
    router.push(`/${params.meetingId}/summary`) // 취소 시 요약 페이지로 이동
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

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          프로필 수정
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          아래 정보를 수정하고 저장하세요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              value={name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
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
