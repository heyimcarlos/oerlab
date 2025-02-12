import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/contexts/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Centennial College OER Lab - Student Site',
  metadataBase: new URL('https://oerlab.vercel.app/'),
  description:
    'The Centennial College OER Lab is a student-led initiative to promote the use of open educational resources (OER) at Centennial College.',
}

// rgb(25 85 179)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-svh bg-background font-sans antialiased', fontSans.variable, fontMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
