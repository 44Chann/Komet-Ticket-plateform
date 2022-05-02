import { useState } from "react"
import CollectionDetails from "./CollectionDetails"
import CreateCollection from "./componets/CreateCollection"
import Navbar from "./componets/Navbar."

export default function Home() {

  const [isWalletConnect, setisWalletconnected] = useState(false)
  return (

    <div className="w-full h-full lg:w-[80%] m-auto">
      <Navbar setisWalletconnected={setisWalletconnected} isWalletConnect={isWalletConnect} />
      <div>
        {
          isWalletConnect ?
            <CreateCollection /> : null
        }
      </div>
      {/* <CollectionDetails /> */}
    </div>
  )
}
