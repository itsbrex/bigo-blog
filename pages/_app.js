import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAnalytics } from '@/lib/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  useAnalytics()
  const { pathname } = useRouter()
  return (
    <ThemeProvider attribute="class" storageKey="bigolive-bigo-blog">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <LayoutWrapper isHome={pathname === '/' || pathname === '/social'}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

// T-338 switch home path with Blog
// TODO
