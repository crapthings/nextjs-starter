import '@/backend.css'

import Sidebar from './sidebar'

export default async function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <div>
          <Sidebar />

          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Next.js Starter Admin',
  description: 'Powered by Next.js',
}
