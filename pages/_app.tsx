import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from './Componets'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full min-h-screen  m-auto bg-primary text-white p-8 overflow-hidden">
        <div className='w-full lg:w-[80%] m-auto'>
          <Navbar />
          <Component {...pageProps} />

        </div>
      </div>

    </>
  )
}

export default MyApp
