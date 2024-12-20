'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const meetingId = pathSegments[1] // meetingId 추출
  const name = decodeURIComponent(pathSegments[3] || 'Minseo') // name 추출

  const displayName = name.charAt(0).toUpperCase() + name.slice(1)

  // 각 팀원에 대한 상세 피드백 내용
  const feedbackDetails = {
    김정훈: {
      summary:
        '전반적으로 중립적인 감정(79.3%)을 유지하며 회의를 진행했습니다.',
      details: [
        '회의 진행 시 감정 변화가 적절히 통제되어 있습니다.',
        '슬픔(10.2%)과 행복(10.2%) 감정이 균형있게 나타났습니다.',
        '안정적인 감정 상태로 회의를 이끌었습니다.',
      ],
      suggestions: [
        '회의 진행 시 더 많은 긍정적 피드백을 제공하면 좋을 것 같습니다.',
        '참가자들의 의견을 더 활발히 이끌어내는 것을 권장합니다.',
        '진행자로서 더 적극적인 리드를 보여주면 좋겠습니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting1_speaker1.mp4', // 개별 영상 URL
    },
    조민서: {
      summary:
        '중립적 감정(64.7%)이 주를 이루며, 슬픔(32.3%)이 다소 높게 나타났습니다.',
      details: [
        '프로젝트 진행 상황에 대한 우려가 감정에 반영된 것으로 보입니다.',
        '긍정적 감정(2.7%)이 상대적으로 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 우려사항을 해소하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting1_speaker2.mp4', // 개별 영상 URL
    },
    이상건: {
      summary:
        '중립적 감정(74.2%)이 주를 이루며, 긍정적인 참여도를 보였습니다.',
      details: [
        '회의 중 안정적인 감정 상태를 유지했습니다.',
        '행복감(6.4%)과 슬픔(19.2%)이 적절히 표현되었습니다.',
        '프로젝트에 대한 책임감이 감정에 반영되었습니다.',
      ],
      suggestions: [
        '기술적 의견 제시 시 더 자신감 있는 태도를 보여주면 좋겠습니다.',
        '팀원들과의 협업 과정에서 더 적극적인 소통을 권장합니다.',
        '본인의 전문성을 더 잘 활용할 수 있는 방안을 고려해보세요.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting1_speaker4.mp4', // 개별 영상 URL
    },
    오승민: {
      summary:
        '중립(57.5%)과 행복(42.0%) 감정이 주를 이루며, 매우 긍정적인 참여를 보였습니다.',
      details: [
        '높은 비율의 긍정적 감정이 표현되었습니다.',
        '회의 참여에 대한 열정이 감정에 잘 반영되었습니다.',
        '약간의 불안(0.2%)도 관찰되었으나 매우 미미한 수준입니다.',
      ],
      suggestions: [
        '긍정적인 태도를 유지하면서 더 구체적인 의견 제시를 해보세요.',
        '다른 팀원들의 우려사항에 대해 더 공감하는 자세를 보여주면 좋겠습니다.',
        '프로젝트 완수에 대한 자신감을 팀원들과 더 공유해주세요.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting1_speaker3.mp4', // 개별 영상 URL
    },
  }

  const feedbackDetails2 = {
    김정훈: {
      summary:
        '중립적 감정(52.78%)이 주를 이루며, 행복(11.12%)이 다소 높게 나타났습니다.',
      details: [
        '회의 중 행복이 증가한 것은 프로젝트 진행 상황에 대한 긍정적 기대가 반영된 것으로 보입니다.',
        '슬픔(12.56%)이 상대적으로 낮게 나타났습니다.',
        '전반적으로 긍정적이고 열린 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 긍정적 에너지를 공유하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting2_speaker1.mp4', // 비워둠
    },
    조민서: {
      summary:
        '중립적 감정(48.12%)이 주를 이루며, 행복(12.35%)이 다소 높게 나타났습니다.',
      details: [
        '회의 중 행복이 증가한 것은 프로젝트 진행 상황에 대한 긍정적 기대가 반영된 것으로 보입니다.',
        '슬픔(20.49%)이 상대적으로 낮게 나타났습니다.',
        '전반적으로 긍정적이고 열린 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 긍정적 에너지를 공유하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting2_speaker2.mp4', // 비워둠
    },
    이상건: {
      summary:
        '중립적 감정(50.12%)이 주를 이루며, 슬픔(18.23%)이 다소 높게 나타났습니다.',
      details: [
        '회의 중 슬픔이 증가한 것은 프로젝트 진행 상황에 대한 우려가 반영된 것으로 보입니다.',
        '긍정적 감정(13.99%)이 상대적으로 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 우려사항을 해소하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting2_speaker4.mp4', // 비워둠
    },
    오승민: {
      summary:
        '중립적 감정(41.77%)이 주를 이루며, 슬픔(24.1%)이 다소 높게 나타났습니다.',
      details: [
        '회의 중 슬픔이 증가한 것은 프로젝트 진행 상황에 대한 우려가 반영된 것으로 보입니다.',
        '긍정적 감정(14.57%)이 상대적으로 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 우려사항을 해소하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting2_speaker3.mp4', // 비워둠
    },
  }

  const feedbackDetails3 = {
    김정훈: {
      summary:
        '중립적 감정(44.46%)이 주를 이루며, 슬픔(21.23%)이 다소 높게 나타났습니다.',
      details: [
        '회의 중 슬픔이 증가한 것은 프로젝트 진행 상황에 대한 우려가 반영된 것으로 보입니다.',
        '긍정적 감정(13.1%)이 상대적으로 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 우려사항을 해소하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting3_speaker1.mp4', // 비워둠
    },
    조민서: {
      summary:
        '중립적 감정(46.54%)이 주를 이루며, 긍정적 감정(14.35%)이 상대적으로 높게 나타났습니다.',
      details: [
        '회의 중 긍정적 감정이 증가한 것은 프로젝트 진행 상황에 대한 긍정적 태도가 반영된 것으로 보입니다.',
        '슬픔(19.88%)이 다소 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 긍정적 태도를 유지하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting3_speaker2.mp4', // 비워둠
    },
    이상건: {
      summary:
        '중립적 감정(43.68%)이 주를 이루며, 긍정적 감정(14.43%)이 상대적으로 높게 나타났습니다.',
      details: [
        '회의 중 긍정적 감정이 증가한 것은 프로젝트 진행 상황에 대한 긍정적 태도가 반영된 것으로 보입니다.',
        '슬픔(22.57%)이 다소 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 긍정적 태도를 유지하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting3_speaker4.mp4', // 비워둠
    },
    오승민: {
      summary:
        '중립적 감정(65.34%)이 주를 이루며, 긍정적 감정(10.67%)이 상대적으로 낮게 나타났습니다.',
      details: [
        '회의 중 긍정적 감정이 감소한 것은 프로젝트 진행 상황에 대한 우려가 반영된 것으로 보입니다.',
        '슬픔(10.67%)이 다소 낮게 나타났습니다.',
        '전반적으로 신중하고 진지한 태도를 보였습니다.',
      ],
      suggestions: [
        '팀 내 소통을 더 활발히 하여 우려사항을 해소하는 것이 좋겠습니다.',
        '성과에 대한 긍정적 인식을 높일 필요가 있습니다.',
        '동료들과의 적극적인 의견 교환을 권장합니다.',
      ],
      video:
        'https://leafdesk-bucket-1.s3.ap-northeast-2.amazonaws.com/vmc/meeting3_speaker3.mp4', // 비워둠
    },
  }

  // Add type for valid participant names
  type ParticipantName = '김정훈' | '조민서' | '이상건' | '오승민'

  let feedbackDetailsToUse = feedbackDetails
  if (meetingId === '2') {
    feedbackDetailsToUse = feedbackDetails2
  } else if (meetingId === '3') {
    feedbackDetailsToUse = feedbackDetails3
  }
  const feedback = feedbackDetailsToUse[displayName as ParticipantName] || {
    summary: '피드백이 없습니다.',
    details: [],
    suggestions: [],
    video: '',
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow border rounded-lg p-6">
        {/* 헤더 섹션 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach &gt; {displayName}
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>

        {/* 상세 피드백 섹션 */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 mb-2">
            {displayName}님에 대한 상세 피드백
          </h3>
          <div className="bg-white p-6 shadow-sm border rounded-lg ">
            {/* 예시 차트 및 피드백 상세 내용 */}
            <h3 className="font-medium text-gray-700 mb-2">Feedback Summary</h3>
            <p className="text-gray-700">{feedback.summary}</p>
            <h4 className="font-medium text-gray-700 mt-4">상세 내용:</h4>
            <ul className="list-disc pl-5">
              {feedback.details.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
            <h4 className="font-medium text-gray-700 mt-4">제안 사항:</h4>
            <ul className="list-disc pl-5">
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-700">
                  {suggestion}
                </li>
              ))}
            </ul>
            {/* 개별 영상 섹션 */}
            {feedback.video && (
              <div className="mt-6">
                <h4 className="font-medium text-gray-700 mb-2">
                  개별 영상 다시 보기
                </h4>
                <div className="flex justify-center">
                  <video
                    className="w-4/5 h-auto rounded-lg shadow-lg"
                    controls
                    src={feedback.video}
                    title={`${displayName}의 회의 영상`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between mt-6">
            {/* 뒤로가기 링크 */}
            <Link
              href={`/${meetingId}/feedback`}
              className="bg-white py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100 text-sm"
            >
              &larr; 뒤로가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
