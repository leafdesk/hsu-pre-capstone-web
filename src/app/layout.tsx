'use client'

import '@/styles/globals.css'
import { UserProvider } from '@/context/user-context'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </UserProvider>
  )
}

export default RootLayout
