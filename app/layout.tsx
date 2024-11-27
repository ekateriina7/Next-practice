import { Josefin_Sans } from 'next/font/google'
import './_styles/globals.css'
import Header from './_components/Header';
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});




export const metadata = {
  title: {
    template: '%s My Cabin',
    default: 'Welcome to My Cabin'
  },
  description: 'Cabin hotels in Canada'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${josefinSans.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}>
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='mx-auto max-w-7xl w-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
