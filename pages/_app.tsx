import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from './Componets'
import { useState } from 'react'
import { AppContext } from './_context'

import Router from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {

  const [isConnected, setIsConnected] = useState(false)
  const [currentAccount, setCurrentAccount] = useState()


  const authRedirect = () => {
    if (!isConnected) {
      Router.push("/")
    }
  }

  let shared_state = {
    isConnected,
    setIsConnected,
    currentAccount,
    setCurrentAccount,
    authRedirect
  }


  return (
    <>
      <AppContext.Provider value={shared_state} >
        <div className="w-full min-h-screen  m-auto bg-primary text-white p-8 overflow-hidden">
          <div className='w-full lg:w-[80%] m-auto'>
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </AppContext.Provider>
    </>
  )
}

export default MyApp
