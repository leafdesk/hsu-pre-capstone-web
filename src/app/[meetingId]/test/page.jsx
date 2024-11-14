'use client'

import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile'

const UserPage = () => {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.heropy.dev/v0/users`) // 실제 API URL로 교체
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('사용자 데이터를 가져오는 중 오류 발생:', error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      {userData?.users && <UserProfile user={userData.users[0]} />}
    </div>
  )
}

export default UserPage
