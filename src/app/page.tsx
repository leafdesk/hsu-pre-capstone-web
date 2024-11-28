'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RootPage = () => {
  const router = useRouter()

  useEffect(() => {
    // 컴포넌트가 마운트될 때 /meeting으로 리디렉션
    router.push('/meeting')
  }, [router])

  return null // 렌더링할 내용이 없으므로 null 반환
}

export default RootPage
