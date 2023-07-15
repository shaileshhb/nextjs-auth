import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth tutorial',
  description: 'Auth tutorial by hitesh choudhary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster toastOptions={{
          position: 'bottom-right',
          duration: 2000,
          success: {
            style: {
              background: '#C3EDC0',
              color: '#285430',
            },
          },
          error: {
            style: {
              background: '#F8C4B4',
              color: '#FE0000',
            },
          },
        }} />
      </body>
    </html>
  )
}
