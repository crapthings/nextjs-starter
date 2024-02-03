import '@/backend.css'

import Sidebar from './sidebar'

export default async function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <div className='flex text-black/70'>
          <div className='w-[220px] p-2'>
            <Sidebar />
          </div>

          <div className='flex-1 min-h-dvh p-6 bg-zinc-200'>
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
