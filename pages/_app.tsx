import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from './Componets'
import { useState } from 'react'
import { AppContext } from './_context'
import Router from 'next/router'
function MyApp({ Component, pageProps }: AppProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [currentAccount, setCurrentAccount] = useState<String>("")
  const [orgnizerid, setorgnizerID] = useState<String>("")
  const [collectionAdress, setCollectionAdress] = useState("")
  const [collectionName, setCollectionName] = useState("")
  const [collectionPrice, setCollectionPrice] = useState("")
  const [collectionSymbol, setCollectionSymbol] = useState("")
  const [orgnizerName, setOrgnizerName] = useState("")
  const [noOFTokens, setNoOfTokens] = useState()
  const [collectionID, setCollectionID] = useState(null)
  const [step, setStep] = useState(1)
  const [showModal, setShowModal] = useState(false);
  const [createStatus, setCreateStatus] = useState()
  const baseurl = "http://staging.komet.me/";


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
    authRedirect,
    orgnizerid,
    setorgnizerID,
    baseurl,
    collectionAdress, setCollectionAdress,
    collectionName, setCollectionName,
    collectionPrice, setCollectionPrice,
    collectionSymbol, setCollectionSymbol,
    orgnizerName, setOrgnizerName,
    noOFTokens, setNoOfTokens,
    collectionID, setCollectionID,
    step, setStep,
    showModal, setShowModal,
    createStatus, setCreateStatus
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
