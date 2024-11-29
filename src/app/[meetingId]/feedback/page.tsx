'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import EmotionPieChart from './emotion-pie-chart' // EmotionPieChart 컴포넌트 import

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

/**
 * 피드백 페이지.
 */
const FeedbackPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const pathSegments = pathname.split('/')
  const meetingId = pathSegments[1] // meetingId 추출

  // 참여자 배열 및 피드백 내용
  const feedbacks = [
    {
      name: '오승민',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '조민서',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '김정훈',
      role: '진행자',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '이상건',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
  ]

  const feedbacks2 = [
    {
      name: '김정훈',
      role: '진행자',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '조민서',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '이상건',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '오승민',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
  ]

  const feedbacks3 = [
    {
      name: '김정훈',
      role: '진행자',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '조민서',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '이상건',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
    {
      name: '오승민',
      role: '팀원',
      feedback: {
        emotion: {
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
        },
      },
    },
  ]

  // 참여자 버튼 클릭 시 페이지 이동
  const handleButtonClick = (participantName: string) => {
    router.push(`/${meetingId}/feedback/${encodeURIComponent(participantName)}`)
  }

  // 차트 데이터
  const chartData = {
    labels: feedbacks.map((participant) => participant.name), // 참여자 이름
    datasets: [
      {
        label: '발언 시간 (초)',
        data: [120, 90, 150, 60], // 각 참여자의 발언 시간 예시 데이터
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  // 감정 데이터
  const feedbackDetails = {
    김정훈: { neutral: 79.36, sad: 10.29, angry: 0.0, happy: 10.27 },
    조민서: { neutral: 64.7, sad: 32.3, angry: 1.0, happy: 2.0 },
    이상건: { neutral: 74.25, sad: 19.28, angry: 1.13, happy: 6.43 },
    오승민: { neutral: 45.44, sad: 22.18, angry: 6.74, happy: 14.11 },
  }
  const feedbackDetails2 = {
    김정훈: { neutral: 52.78, sad: 12.56, angry: 4.89, happy: 11.12 },
    조민서: { neutral: 48.12, sad: 20.49, angry: 5.43, happy: 12.35 },
    이상건: { neutral: 50.12, sad: 18.23, angry: 7.12, happy: 13.99 },
    오승민: { neutral: 41.77, sad: 24.1, angry: 6.54, happy: 14.57 },
  }
  const feedbackDetails3 = {
    김정훈: { neutral: 44.46, sad: 21.23, angry: 8.12, happy: 13.1 },
    조민서: { neutral: 46.54, sad: 19.88, angry: 7.65, happy: 14.35 },
    이상건: { neutral: 43.68, sad: 22.57, angry: 6.99, happy: 14.43 },
    오승민: { neutral: 65.34, sad: 10.67, angry: 5.12, happy: 10.67 },
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Okestro Meeting Coach
          </h2>
          <span className="text-sm text-gray-500">2024.10.07</span>
        </div>
        <div className="space-y-4">
          <div className="flex">
            {/* 차트 섹션 */}
            <div className="flex-1 bg-white p-4 rounded-lg mr-4">
              {/* 차트 */}
              <div className="text-center font-medium text-gray-600 mb-4">
                참여자별 발언 시간
              </div>
              {/* 차트 예시 */}
              <div className="h-56">
                <Bar data={chartData} options={{ responsive: true }} />
              </div>
            </div>

            {/* 피드백 섹션 */}
            <div className="flex-1 white p-4 rounded-lg shadow-lg border">
              <h3 className="text-base font-medium text-gray-700 mb-2">
                참여자 목록
              </h3>
              <ul className="space-y-4">
                {(meetingId === '2'
                  ? feedbacks2
                  : meetingId === '3'
                  ? feedbacks3
                  : feedbacks
                ).map((participant, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <button
                      onClick={() => handleButtonClick(participant.name)}
                      className="text-gray-900 bg-gray-100 px-3 py-1.5 border border-gray-300 rounded-md min-w-20 hover:bg-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-200 ease-out"
                    >
                      {participant.name}
                    </button>
                    <p className="text-gray-600">
                      {participant.feedback.emotion.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 감정 퍼센트 차트 추가 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border mt-4">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(
            meetingId === '1'
              ? feedbackDetails
              : meetingId === '2'
              ? feedbackDetails2
              : feedbackDetails3,
          ).map(([userName, emotions]) => (
            <EmotionPieChart
              key={userName}
              userName={userName}
              emotions={emotions}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
