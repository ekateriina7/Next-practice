import Logo from './_components/Logo'
import Navigation from './_components/Navigation'

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
