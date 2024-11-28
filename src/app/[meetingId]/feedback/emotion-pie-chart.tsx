'use client'

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Chart.js 등록
ChartJS.register(ArcElement, Tooltip, Legend)

interface EmotionPieChartProps {
  userName: string
  emotions: {
    neutral: number
    sad: number
    angry: number
    happy: number
  }
}

const EmotionPieChart = ({ userName, emotions }: EmotionPieChartProps) => {
  const data = {
    labels: ['중립 (Neutral)', '슬픔 (Sad)', '분노 (Angry)', '행복 (Happy)'],
    datasets: [
      {
        label: `${userName}의 감정 비율`,
        data: [emotions.neutral, emotions.sad, emotions.angry, emotions.happy],
        backgroundColor: ['#4B8BBE', '#FF6F61', '#D9534F', '#5EBB8A'],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <h3 className="text-lg font-semibold mb-4">{userName}의 감정 비율</h3>
      <Pie data={data} />
    </div>
  )
}

export default EmotionPieChart
