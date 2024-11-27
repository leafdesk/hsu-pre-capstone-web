'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation' // 경로 확인용
import LayoutSideBar from './layout-side-bar'
import LayoutHeader from './layout-header'

const FeatureLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname() // 현재 경로 가져오기

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 왼쪽 사이드 바 */}
      <LayoutSideBar />

      {/* 회의별 데이터 */}
      <main className="flex-1 overflow-y-auto bg-white shadow-lg rounded-lg m-4">
        {/* 헤더를 프로필 페이지에서는 렌더링하지 않음 */}
        {pathname !== `/${pathname.split('/')[1]}/profile` && <LayoutHeader />}
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}

export default FeatureLayout
