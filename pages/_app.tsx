import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from './Components'
import { useState } from 'react'
import { AppContext } from './_context'
import Router from 'next/router'

import toast, { Toaster } from 'react-hot-toast'

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
  const [eventDate, setEventDate] = useState(new Date())
  const [eventPlace, setEventPlace] = useState("")
  const [saleEndDate, setSaleEndDate] = useState()
  const [collectionID, setCollectionID] = useState(null)
  const [step, setStep] = useState(1)
  const [showModal, setShowModal] = useState(false);
  const [createStatus, setCreateStatus] = useState()
  const baseurl = "https://staging.komet.me/";


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
    eventDate, setEventDate,
    eventPlace, setEventPlace,
    saleEndDate, setSaleEndDate,
    collectionID, setCollectionID,
    step, setStep,
    showModal, setShowModal,
    createStatus, setCreateStatus
  }


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      <AppContext.Provider value={shared_state} >
        <div className="w-full  m-auto bg-primary text-white text-opacity-90 p-8 min-h-screen overflow-hidden">
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
