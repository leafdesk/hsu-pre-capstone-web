'use client'

import { useParams } from 'next/navigation';

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const { meetingId, name } = useParams();

  // 기본값은 'Minseo'
  const participantName = Array.isArray(name) ? name[0] : (name || 'Minseo');
  
  const decodedName = decodeURIComponent(participantName);
  const displayName = typeof decodedName === 'string' ? decodedName.charAt(0).toUpperCase() + decodedName.slice(1) : 'Minseo';

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow rounded-lg p-6">
        {/* 헤더 섹션 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach &gt; {displayName}
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>
        
        {/* 피드백 */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 mb-2">Feedback Start</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">{displayName} :</h4>
              {/* 피드백 내용 */}
              <div className="h-64 bg-gray-300 rounded-lg"></div>
            </div>
            
            <div className="text-right">
              <button className="bg-gray-300  py-2 px-4 rounded-lg shadow hover:bg-gray-600">
                자세한 피드백 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage;
