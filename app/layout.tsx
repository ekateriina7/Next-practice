import Logo from './_components/Logo'
import Navigation from './_components/Navigation'
import { Josefin_Sans } from 'next/font/google'
import './_styles/globals.css'
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

      <body className={`${ josefinSans.className} bg-primary-950 text-primary-100`}>
        <header>
          <Logo />
          <Navigation />
        </header>

        {children}
      </body>
    </html>
  )
}
