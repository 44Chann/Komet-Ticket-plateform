import Link from "next/link"
import { useEffect } from "react"
import { Btn, AstroImg } from "./Componets"
import { useAppContext } from "./_context"


export default function CreateNFT() {
    const { authRedirect, isConnected } = useAppContext()
    useEffect(() => {
        authRedirect()
    }, [])

    return (
        <>
            {
                isConnected ? (
                    <div className="flex py-24 items-center justify-between w-full  h-full lg:flex-row flex-col">
                        <div className="lg:w-[50%]  flex flex-col items-center  ">
                            <h1 className="text-3xl my-8 ">Add NFT To Collection </h1>
                            <div className="flex flex-col items-start ">
                                <div className="mb-8">
                                    <Btn text="Collection Name" onclick={() => { }} />
                                </div>
                                <div>
                                    <Btn text="Collection Symbol" onclick={() => { }} />
                                </div>
                                <div className="my-10 hidden lg:block">
                                    <AstroImg />
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-[50%]  py-8">
                            <form className="  ">
                                <input
                                    id="Artist Name"
                                    name="name"
                                    type="text"
                                    required={true}
                                    placeholder="Enter your Name"
                                    className="my-4 w-[90%] max-w-lg focus:outline-none border border-purple-700 bg-transparent  px-3 py-2"
                                />
                                <input
                                    id="NFT Name"
                                    name="nft name"
                                    type="text"
                                    required={true}
                                    placeholder="Enter NFT Name"
                                    className="my-4 w-[90%] max-w-lg focus:outline-none border border-purple-700 bg-transparent  px-3 py-2"
                                />
                                <input
                                    id="NFT price"
                                    name="nft price"
                                    type="number"
                                    required={true}
                                    placeholder="Ente NFT price"
                                    className="my-4 w-[90%] max-w-lg focus:outline-none border border-purple-700 bg-transparent  px-3 py-2"
                                />
                                <textarea
                                    id="description"
                                    name="desccription"
                                    required={true}
                                    placeholder="Add  description"
                                    className="my-4 w-[90%] max-w-lg focus:outline-none border border-purple-700 bg-transparent  px-3 py-2"
                                />


                                <div className="m-4">
                                    <label className="mb-2 inline-block text-gray-500">
                                        upload NFT (jpg,png,svg,jpeg)
                                    </label>
                                    <div className="flex w-full items-center justify-center">
                                        <label className="flex h-32 w-full border-purple-500 flex-col border-2  hover:border-purple-700-300 hover:bg-purple-700">
                                            <div className="flex flex-col items-center justify-center pt-7">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-12 w-12 text-gray-400 group-hover:text-gray-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                    Select a photo
                                                </p>
                                            </div>
                                            <input
                                                type="file"
                                                className="opacity-0"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <Link href="/CollectionDetails" >
                                        <a href="">
                                            <input type="submit" className="bg-purple-700 px-5 py-2 rounded-3xl" />
                                        </a>
                                    </Link>
                                </div>

                            </form>
                        </div>

                    </div>
                ) : null
            }

        </>
    )
}
