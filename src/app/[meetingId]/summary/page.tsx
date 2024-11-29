'use client'

import { usePathname } from 'next/navigation'

/**
 * 영상 다시 보기 및 요약본 보기 페이지.
 */
const SummaryPage = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const meetingId = pathSegments[1] // meetingId 추출

  const meetingSummary = {
    title: '13주차 프로젝트 진행상황 점검 회의',
    date: '2024-11-26',
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

  const meetingSummary2 = {
    title: '프리캡스톤 전시회 준비 회의',
    date: '2024-11-27',
    duration: '00:15:30',
    participants: ['김정훈', '조민서', '이상건', '오승민'],
    mainPoints: [
      {
        topic: '행사 시간 조율',
        content: [
          '모든 참가자가 12시 이후에만 행사 준비 가능.',
          '김정훈은 3시부터 논문 발표로 인해 자리 비움.',
          '행사 시작 전까지 상주 인원이 확보되지 못함.',
        ],
      },
      {
        topic: '포스터 작업 진행 상황',
        content: [
          '포스터 디자인은 완료되어 인쇄 작업에 들어감.',
          '포스터가 금요일 전까지 나올 예정.',
          '다른 팀과 비교하여 포스터 수량이 많아 걱정이 있음.',
        ],
      },
      {
        topic: '행사 진행 장소 및 준비',
        content: [
          '행사 장소: 상상관 체육관.',
          '지하 2층 또는 1층에서 행사 진행 예정.',
          '29일에 모든 준비 마무리 예정.',
        ],
      },
    ],
    decisions: [
      '29일 금요일 프리캡스톤 전시회 일정 확정.',
      '포스터 인쇄를 완료하고 팀 프로젝트 설명 준비.',
    ],
  }

  const meetingSummary3 = {
    title: '크리스마스 및 연말 일정 관련 회의',
    date: '2024-11-28',
    duration: '00:15:30',
    participants: ['김정훈', '조민서', '이상건', '오승민'],
    mainPoints: [
      {
        topic: '개인 일정 및 활동',
        content: [
          '김정훈: 파리바게트 알바 중.',
          '조민서: 다른 알바를 병행하며 크리스마스 이브 대타를 못 구해 일해야 함.',
          '이상건: 교회에서 성탄절 예배 후 친구들과 크리스마스를 보낼 예정.',
          '오승민: 크리스마스 마켓 방문 계획.',
        ],
      },
      {
        topic: '건강 및 날씨',
        content: [
          '날씨가 추워지고 감기가 유행 중.',
          '모두 건강에 유의하며 감기 예방 필요.',
        ],
      },
      {
        topic: '크리스마스 및 연말 행사',
        content: [
          '크리스마스 관련 일정 조율.',
          '크리스마스 마켓 방문 논의.',
          '각자 연말 활동 계획 공유.',
        ],
      },
    ],
    decisions: [
      '크리스마스와 연말 일정은 각자 조율하며, 추가 논의는 생략.',
      '건강 관리 및 연말 활동에 집중.',
    ],
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
            src={`https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting${meetingId}.mp4`}
            title="회의 영상"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {meetingId === '2'
              ? meetingSummary2.title
              : meetingId === '3'
              ? meetingSummary3.title
              : meetingSummary.title}
          </h2>
          <span className="text-sm text-gray-500">
            {meetingId === '2'
              ? meetingSummary2.date
              : meetingId === '3'
              ? meetingSummary3.date
              : meetingSummary.date}
          </span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Summary:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {(meetingId === '2'
                ? meetingSummary2.mainPoints
                : meetingId === '3'
                ? meetingSummary3.mainPoints
                : meetingSummary.mainPoints
              ).map((point, index) => (
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
