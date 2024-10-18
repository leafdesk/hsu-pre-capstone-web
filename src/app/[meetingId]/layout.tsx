import { ReactNode } from 'react'
import LayoutSideBar from './layout-side-bar'
import LayoutHeader from './layout-header'

/**
 * 요약본, 피드백, 퀴즈 페이지에 공통 적용되는 레이아웃.
 */
const FeatureLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 왼쪽 사이드 바 */}
      <LayoutSideBar />

      {/* 회의별 데이터*/}
      <main className="flex-1 overflow-y-auto">
        <LayoutHeader />

        {children}
      </main>
    </div>
  )
}

export default FeatureLayout
