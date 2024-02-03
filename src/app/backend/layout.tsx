import '@/admin.css'

export const metadata = {
  title: 'Next.js Starter Admin',
  description: 'Powered by Next.js',
}

export default async function RootLayout ({ children, params }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
