'use client'

import { Layout } from 'lucide-react'

const LayoutSideBar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">내 프로필</h2>
        <div className="mt-4 flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          <div>
            <p className="font-medium text-gray-700">Username</p>
            <button className="text-sm text-blue-500 hover:underline">
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        <div className="px-5 mb-4">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            회의 목록
          </h3>
          <ul className="mt-2 space-y-2">
            {[
              { name: '1번 회의', icon: Layout },
              { name: '2번 회의', icon: Layout },
              { name: '3번 회의', icon: Layout },
              { name: '4번 회의', icon: Layout },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition"
                >
                  <item.icon className="h-5 w-5 mr-3 text-blue-500" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            참여자
          </h3>
          <ul className="mt-2 space-y-2">
            {['조민서', '오승민', '김정훈', '이상건'].map((name, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <span className="text-gray-800">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default LayoutSideBar
