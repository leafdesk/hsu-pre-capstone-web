'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center space-y-4 p-10'>
      <button
        onClick={() => router.push('/quiz')}
        className='bg-blue-500 text-white rounded-lg px-6 py-3 shadow-md hover:bg-blue-600 transition duration-300'
      >
        퀴즈
      </button>
      <button
        onClick={() => router.push('/summary')}
        className='bg-green-500 text-white rounded-lg px-6 py-3 shadow-md hover:bg-green-600 transition duration-300'
      >
        요약본
      </button>
      <button
        onClick={() => router.push('/feedback')}
        className='bg-purple-500 text-white rounded-lg px-6 py-3 shadow-md hover:bg-purple-600 transition duration-300'
      >
        피드백
      </button>
    </div>
  );
}
