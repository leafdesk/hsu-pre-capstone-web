'use client'

import React, { useEffect, useState } from 'react'
import TestCard from './test-card'

const TestPage = () => {
  const [data, setData] = useState([]) // 초기값을 빈 배열로 설정

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.heropy.dev/v0/users')
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <>
      {data && data.users && data.users.length > 0 && (
        <div>
          {data.users.map((user, index) => (
            <TestCard key={index} user={user} />
          ))}
        </div>
      )}
    </>
  )
}

export default TestPage
