import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '10',
  description: '10 x 10 minutes of content from the past, present, and future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' overflow-hidden'>{children}</body>
    </html>
  )
}
