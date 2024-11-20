import Logo from './components/Logo'
import Navigation from './components/Navigation'

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

      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        
        {children}
      </body>
    </html>
  )
}
