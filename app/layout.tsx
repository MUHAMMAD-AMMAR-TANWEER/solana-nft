'use client'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const colors = {
  background: '#1F1F1F',
  accent: '#833BBE',
  bodyText: 'rgba(255, 255, 255, 0.75)',
}
import WalletContextProvider from '../components/WalletContextProvider'
const theme = extendTheme({ colors })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </WalletContextProvider>
      </body>
    </html>
  )
}
