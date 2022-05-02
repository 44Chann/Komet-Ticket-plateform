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
            <div className="w-full h-full lg:w-[80%] m-auto">

                <Navbar setisWalletconnected={setisWalletconnected} isWalletConnect={true} />
                <div className="w-full   m-auto  flex justify-between items-center px-4">
                    <div className="flex "><div className="w-24 h-24 rounded-full bg-purple-700 flex justify-center items-center ">
                        <h1 className="text-white"> KD</h1>
                    </div>
                        <div className="flex items-center">
                            <div className="mx-4 font-bold">
                                <h2>KID</h2>
                                <p>ORG KID</p>
                            </div>
                        </div></div>

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
            </div>
        </>
    )
}

export default CollectionDetails;