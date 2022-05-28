import { useState } from "react"
import Input from "./Componets/Forms/Input"
import { useAppContext } from "./_context"
import Router from "next/router"
export default function CreateCollection() {
    const { isConnected, collectionName, setCollectionName, collectionPrice, setCollectionPrice,
        collectionSymbol, setCollectionSymbol,
        orgnizerName, setOrgnizerName, step, setStep } = useAppContext()
    const [text, setText] = useState('submit')
    const [disabled, setDisabled] = useState(false)

    return (
        <>
            <div className="w-full flex-col flex justify-center lg:w-[80vh] min-h-[90vh]">
                <div className="py-10">
                    <h1 className="text-4xl">Create a new collection </h1>
                    <div className="my-8">
                        <form action="" onSubmit={(e) => {
                            e.preventDefault()
                            setText("please wait..")
                            setDisabled(true)
                            Router.push("/CreateNFT")
                        }}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <Input id="name" name="name" type="text" value={orgnizerName} setValue={setOrgnizerName} placeholder={"@jhon"} />
                            </div>

                            <div className="my-8">
                                <label htmlFor="collection name" className="">Collection Name</label>
                                <p className="text-[10px] text-gray-300">The Name will be added to the collection details page </p>
                                <Input id="collection name" name="collection name" type="text" value={collectionName} setValue={setCollectionName} placeholder={"jhon's party"} />
                            </div>
                            <div >
                                <label htmlFor="collection symbol">Collection Symbol</label>
                                <p className="text-[10px] text-gray-300">The Collection Symbol is for abbrivation for collection  </p>
                                <Input id="collection symbol" name="collection symbol" type="text" value={collectionSymbol} setValue={setCollectionSymbol} placeholder={"JSP"} />
                            </div>
                            <div className="my-8 ">
                                <label htmlFor="price">Price</label>
                                <p className="text-[10px] text-gray-300">The Price is in matic per ticket </p>
                                <div className="flex items-center">
                                    <Input id="price" name="price" type="number" value={collectionPrice} setValue={setCollectionPrice} placeholder={"0.003"} />
                                    <p className="px-4 bg-purple-800 py-3">matic</p>
                                </div>
                            </div>
                            <input type="submit" className="bg-purple-600 py-2 px-4 my-4 rounded-full cursor-pointer" disabled={disabled ? disabled : false} value={text} />
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
