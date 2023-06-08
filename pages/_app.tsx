import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <Image src="/images/gm_background.png" alt="Background Image" height={5000} width={5000} style={{objectFit:"cover"}} className="background-image"/>
      </div>
      <Component {...pageProps} />
    </Layout>
  )
}
