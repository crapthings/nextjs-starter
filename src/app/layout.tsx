import '@/style.css'

export const metadata = {
  title: 'Next.js Starter',
  description: 'Powered by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
