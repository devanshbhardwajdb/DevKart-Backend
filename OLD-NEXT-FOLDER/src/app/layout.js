import Navbar from '../../Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevKart',
  description: 'created by devansh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
