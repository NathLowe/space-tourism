import Navbar from '@/components/Navbar'
import './globals.css'
import { Bellefair, Barlow_Condensed } from 'next/font/google'
import AnimateContainer from '@/components/AnimateContainer'

const bellefair = Bellefair({ subsets: ['latin'], weight:'400', variable:'--bellefair-font' })
const barlow = Barlow_Condensed({ subsets: ['latin'], weight:'400', variable:'--barlow-font' })

export const metadata = {
  title: 'Spaceship website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${bellefair.variable} bg-primary`}>
        <Navbar/>
        <AnimateContainer >
          {children}
        </AnimateContainer>
      </body>
    </html>
  )
}
