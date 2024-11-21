'use client'

import { ReactNode } from 'react'
import LayoutSideBar from './layout-side-bar'
import LayoutHeader from './layout-header'

const FeatureLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 왼쪽 사이드 바 */}
      <LayoutSideBar />

      {/* 회의별 데이터 */}
      <main className="flex-1 overflow-y-auto bg-white shadow-lg rounded-lg m-4">
        <LayoutHeader />
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}

export default FeatureLayout
