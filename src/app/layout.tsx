import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DP로봇 | 키네틱 아트 & 동적 오브제 맞춤 제작',
  description: '공간의 정적을 깨고, 고객의 머무름을 유지하는 단 하나의 오브제. 브랜드 무드에 맞춰 움직임을 디자인합니다.',
  keywords: ['키네틱 아트', '동적 오브제', '인테리어', '브랜드 경험', '맞춤 제작'],
  openGraph: {
    title: 'DP로봇 | 키네틱 아트 & 동적 오브제 맞춤 제작',
    description: '공간의 정적을 깨고, 고객의 머무름을 유지하는 단 하나의 오브제.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* 배민 을지로체 CDN */}
        <link 
          rel="preload"
          href="https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMEuljiro10yearslater.woff" 
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        {/* Cafe24 폰트 CDN */}
        <link 
          rel="preload"
          href="https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff" 
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <main className="flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
