'use client'

/**
 * 영상 다시 보기 및 요약본 보기 페이지.
 */
const SummaryPage = () => {
  const meetingSummary = {
    title: '13주차 프로젝트 진행상황 점검 회의',
    date: '2024-03-19',
    duration: '00:15:30',
    participants: ['김정훈', '조민서', '이상건', '오승민'],
    mainPoints: [
      {
        topic: '현재 진행상황',
        content: [
          '서버 작업: 모델 완성 단계, 서버 업로드 예정',
          '프론트엔드: 레이아웃 및 디자인 수정 작업 중',
          '로그인/회원가입 기능 구현 중',
          'API 연동 작업 진행 중',
        ],
      },
      {
        topic: '문제점',
        content: [
          '목요일 최종 발표를 앞두고 화요일까지 완성이 안 된 상태',
          '계획 관리가 지연되고 있는 상황',
        ],
      },
      {
        topic: '향후 계획',
        content: [
          '웹 디자인 완성 및 API 연동',
          'PPT 수정 작업',
          'Node.js 서버와 API 연동',
          '목요일까지 모든 작업 완료 예정',
        ],
      },
    ],
    decisions: ['목요일까지 최종 발표 준비 완료', '금요일 전시회 진행'],
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      {/* 회의 영상 다시 보기 섹션 */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">회의 영상 다시 보기</h3>
        <br />

        <div className="flex justify-center">
          <video
            className="w-4/5 h-auto rounded-lg shadow-lg"
            controls
            src="https://uc3044e50515d9e91741bdd08e80.dl.dropboxusercontent.com/cd/0/inline/CfKidjpK4Hd_J8_MaMRO6BHunIvB9BM2ucnezzuIYXeM10jXbGz28jnnkX-bPJq3FhDk7AQkt0hoKAvRk6m3N5UZDiVv8I2pynPGh2OnueyLsUHWQmmu8hRUiJ5S1quHmFHwWNL6aMLXNfPLDXyxtGCv/file#"
            title="회의 영상"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {meetingSummary.title}
          </h2>
          <span className="text-sm text-gray-500">{meetingSummary.date}</span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Summary:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {meetingSummary.mainPoints.map((point, index) => (
                <li key={index}>
                  {point.topic}: {point.content.join(', ')}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage
