import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export const metadata: Metadata = {
  title: '미팅 코치',
  description: 'Okestro Meeting Coach :: SW프리캡스톤디자인(HSU)',
}

/**
 * 모든 페이지에 공통 적용되는 전체 레이아웃.
 */
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}

export default RootLayout
