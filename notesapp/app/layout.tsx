import './globals.css'
import './layout.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'Basic notes app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        
        <body className={inter.className}>
          <main >
            <Navbar />
          </main>
          <div className='main-content'>
            {children}
            </div>
          
        </body>
      </html>
    </>
  )
}
