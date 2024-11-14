// test-card.jsx
import React from 'react'

const TestCard = ({ user }) => {
  console.log('테스트 카드 안 응답 데이터:', user) // data 구조 확인

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 ">
      <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          {user.name}
        </h2>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">
          Valid User: {user.isValid ? 'Yes' : 'No'}
        </p>
        <p className="text-gray-600">Emails:</p>
        <ul className="text-gray-600 mb-2">
          {user.emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
        {user.photo && (
          <img
            src={user.photo.url}
            alt={user.name}
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
        )}
      </div>
    </div>
  )
}

export default TestCard
