import { useState } from "react"
import { useAppContext } from "../../_context"
import Router from "next/router"
export default function CreateCollection() {
    const { isConnected, collectionName, setCollectionName, collectionPrice, setCollectionPrice,
        collectionSymbol, setCollectionSymbol,
        orgnizerName, setOrgnizerName, step, setStep } = useAppContext()
    const [loading, setLoading] = useState(false)
    return (
        <>
            {
                isConnected ? (
                    <div className="flex items-center justify-center  ">
                        <div className="w-full max-w-xl  text-center h-full">
                            <h1 className="text-2xl lg:text-3xl ">Create new Collection ? </h1>
                            <div className="w-full flex justify-center my-8">
                                <form className="w-full flex flex-col h-full" onSubmit={(e) => {
                                    e.preventDefault()
                                    setStep(step + 1)
                                }}>

                                    <input
                                        id="Artist Name"
                                        name="name"
                                        type="text"
                                        value={orgnizerName}
                                        required={true}
                                        placeholder="Enter your Name"
                                        className=" focus:outline-none bg-transparent my-3 text-white border-b  border-purple-700 p-2 block  text-sm"
                                        onChange={(e) => {
                                            setOrgnizerName(e.target.value)
                                        }}
                                    />

                                    <input value={collectionName} onChange={(e) => {
                                        setCollectionName(e.target.value)

                                    }} type="text" className="focus:outline-none my-3 bg-transparent text-white border-b  border-purple-700 p-2 block  text-sm" placeholder="Enter your Collection Name " required />

                                    <input value={collectionSymbol} onChange={
                                        (e) => {
                                            setCollectionSymbol(e.target.value)
                                        }
                                    } type="text" className="focus:outline-none my-3 bg-transparent text-white border-b  border-purple-700 p-2 block  text-sm" placeholder="Enter your Collection Symbol " required />
                                    <input
                                        id="NFT price"
                                        name="nft price"
                                        type="number"
                                        value={collectionPrice}
                                        required={true}
                                        placeholder="Ente NFT price"
                                        className=" focus:outline-none bg-transparent my-3 text-white border-b  border-purple-700 p-2 block  text-sm"
                                        onChange={(e) => {
                                            setCollectionPrice(e.target.value)
                                        }}
                                    />

                                    {
                                        <button type="submit" className="self-center bg-purple-700 px-5 py-2 rounded-3xl my-9 max-w-[100px]" onClick={() => {
                                        }} >Next</button>
                                    }
                                </form>
                            </div>

                        </div>
                    </div>
                ) : null
            }

        </>
    )
}
