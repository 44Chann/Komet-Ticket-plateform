import Link from "next/link"
import { useEffect } from "react"
import { Btn, AstroImg } from "./Componets"
import { useAppContext } from "./_context"


export default function CreateCollection() {

    const { authRedirect, isConnected } = useAppContext()
    useEffect(() => {
        authRedirect()
    }, [])

    return (
        <>
            {
                isConnected ? (
                    <div className="flex py-24 items-center justify-center">
                        <div>
                            <h1 className="text-2xl lg:text-3xl ">Create new Collection ? </h1>
                            <div className="flex flex-col items-start ">
                                <div className="">
                                    <form>
                                        <input type="text" className="focus:outline-none bg-transparent text-white border border-purple-700 p-2 block my-8 text-sm" placeholder="Enter your Collection Name " required />
                                        <input type="text" className="focus:outline-none bg-transparent text-white border border-purple-700 p-2 block my-8 text-sm" placeholder="Enter your Collection Symbol " required />
                                        <Link href="/CreateNFT" >
                                            <a href="">
                                                <input type="submit" className="bg-purple-700 px-5 py-2 rounded-3xl" />
                                            </a>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="m-40 hidden lg:block">
                            <AstroImg />
                        </div>
                    </div>
                ) : null
            }

        </>
    )
}
