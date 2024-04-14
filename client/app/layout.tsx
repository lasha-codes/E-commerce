'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import GlobalContext from './context/GlobalContext'
import { Provider } from 'react-redux'
import store from './lib/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <GlobalContext>
          <body className={inter.className}>{children}</body>
        </GlobalContext>
      </Provider>
    </html>
  )
}
