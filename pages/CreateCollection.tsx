import { useState } from "react"
import Input from "./Components/Forms/Input"
import { useAppContext } from "./_context"
import Router from "next/router"
export default function CreateCollection() {
    const { isConnected, collectionName, setCollectionName, collectionPrice, setCollectionPrice,
        collectionSymbol, setCollectionSymbol, eventPlace, setEventPlace, eventDate, setEventDate,
        saleEndDate, setSaleEndDate, orgnizerName, setOrgnizerName, step, setStep } = useAppContext()
    const [text, setText] = useState('Submit')
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
                            <div className="my-8 " >
                                <label htmlFor="collection symbol">Collection Symbol</label>
                                <p className="text-[10px] text-gray-300">The Collection Symbol is for abbrivation for collection  </p>
                                <Input id="collection symbol" name="collection symbol" type="text" value={collectionSymbol} setValue={setCollectionSymbol} placeholder={"JSP"} />
                            </div>
                            <div className="my-8 " >
                                <label htmlFor="event date">Event Date</label>
                                <p className="text-[10px] text-gray-300">The Collection Symbol is for abbrivation for collection  </p>
                                <Input id="event date" name="event date" type="date" value={eventDate} setValue={setEventDate} placeholder={"JSP"} />
                            </div>
                            <div className="my-8 " >
                                <label htmlFor="event place">Event Place</label>
                                <p className="text-[10px] text-gray-300">The Collection Symbol is for abbrivation for collection  </p>
                                <Input id="event place" name="event place" type="text" value={eventPlace} setValue={setEventPlace} placeholder={"JSP"} />
                            </div>
                            <div className="my-8 " >
                                <label htmlFor="sale end">Ticket Sale ends at</label>
                                <p className="text-[10px] text-gray-300">The Collection Symbol is for abbrivation for collection  </p>
                                <Input id="sale end" name="sale end" type="date" value={saleEndDate} setValue={setSaleEndDate} placeholder={"JSP"} />
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
