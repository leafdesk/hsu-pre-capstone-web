import React from 'react'

const UserProfile = ({ user }) => {
  console.log('유저 프로필 내부:', user)

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      {user ? (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            사용자 프로필
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">아이디:</span> {user.id}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">이름:</span> {user.name}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">나이:</span> {user.age}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">이메일:</span> {user.emails}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">전화번호:</span> {user.phone}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">로딩 중...</p>
      )}
    </div>
  )
}

export default UserProfile
