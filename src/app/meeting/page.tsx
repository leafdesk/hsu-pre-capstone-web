'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const StartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('') // 이메일 상태 관리
  const [password, setPassword] = useState('') // 비밀번호 상태 관리
  const router = useRouter()

  const handleStartClick = () => {
    setIsModalOpen(true) // 모달 열기
  }

  const closeModal = () => {
    setIsModalOpen(false) // 모달 닫기
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 현재는 콘솔에 이메일과 비밀번호를 출력
    console.log('로그인 시도:', { email, password })

    router.push('/1/summary')

    /**
     * 데이터베이스 연동 시 추가할 로직:
     * 1. 이메일과 비밀번호를 서버로 POST 요청.
     * 2. 서버에서 이메일과 비밀번호를 검증.
     * 3. 성공 시 JWT 토큰 발급 및 클라이언트 저장 (localStorage 또는 쿠키).
     * 4. 실패 시 적절한 에러 메시지 출력.
     *
     * 예제:
     * const response = await fetch('/api/login', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ email, password }),
     * });
     *
     * if (response.ok) {
     *   const data = await response.json();
     *   localStorage.setItem('token', data.token); // JWT 토큰 저장
     *   alert('로그인 성공!');
     *   closeModal();
     * } else {
     *   alert('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
     * }
     */

    // 로그인 성공 후 모달 닫기
    closeModal()
  }

  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col items-center justify-center">
      {/* 메인 콘텐츠 */}
      <main
        className={`text-center px-4 flex flex-col items-center ${
          isModalOpen ? 'opacity-50' : 'opacity-100'
        } transition-opacity duration-300`}
      >
        {/* 제목 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Okestro Meeting Coach
        </h1>

        {/* 부제목 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          회의를 더 스마트하게,{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>

        {/* 기능 강조 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl font-bold">✓</span>
            <p>
              <span className="font-semibold text-black">자동 회의 요약:</span>{' '}
              AI가 회의 영상을 요약하여 시간 절약
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl font-bold">✓</span>
            <p>
              <span className="font-semibold text-black">
                참여자 태도 분석:
              </span>{' '}
              발언권 비율, 표정, 말투 데이터를 기반으로 피드백 제공
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl font-bold">✓</span>
            <p>
              <span className="font-semibold text-black">퀴즈 기능:</span> 회의
              내용 이해도를 평가하여 학습 효과 극대화
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl font-bold">✓</span>
            <p>
              <span className="font-semibold text-black">팀 성과 향상:</span>{' '}
              데이터 기반 회의 분석으로 더 나은 결과 도출
            </p>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex space-x-4 justify-center mt-10">
          <button
            onClick={handleStartClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold"
          >
            시작하기
          </button>
        </div>
      </main>

      {/* 로그인 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg relative">
            {/* 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            {/* 로그인 폼 */}
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
              로그인
            </h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                로그인
              </button>
            </form>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <a href="#" className="hover:underline">
                비밀번호를 잊어버리셨나요?
              </a>
              <a href="#" className="hover:underline">
                회원가입을 하시겠어요?
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StartPage
