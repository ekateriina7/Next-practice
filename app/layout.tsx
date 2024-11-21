import Logo from './_components/Logo'
import Navigation from './_components/Navigation'
import './_styles/globals.css'

export const metadata = {
  title: 'My cabin'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='bg-primary-950 text-primary-100'>
        <header>
          <Logo />
          <Navigation />
        </header>

        {children}
      </body>
    </html>
  )
}
