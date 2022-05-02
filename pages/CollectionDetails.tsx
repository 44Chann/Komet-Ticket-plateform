import { useState } from "react";
import NFTcard from "./componets/NFTCard";
import MintNFTForm from "./componets/MintNFT";
import Navbar from "./componets/Navbar.";

const CollectionDetails = () => {
    const [showNFT, setShowNFT] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isWalletConnect, setisWalletconnected] = useState(false)

    return (

        <>
            <Navbar setisWalletconnected={setisWalletconnected} isWalletConnect={isWalletConnect} />
            <div className="w-full lg:w-[80%]  m-auto  flex justify-between items-center">
                <div className="flex items-center">

                    <div className="mx-4 font-bold">
                        <h2>KID</h2>
                        <p>ORG KID</p>
                    </div>
                </div>
                <div>
                    <button className="bg-purple-500 p-3 text-white" onClick={() => setShowModal(!showModal)}>MINT NFT</button>
                </div>
            </div>
            <div>
                <MintNFTForm showModal={showModal} setShowModal={setShowModal} setShowNFT={setShowNFT} />

                {
                    showNFT ? <NFTcard /> : null
                }
            </div>

        </>
    )
}

export default CollectionDetails;