
import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "./_context"
import Collections from "./Collections"
import Link from "next/link"

export default function Home() {
  const [collections, setCollections] = useState<Array<Object>>()
  const { baseurl, isConnected, orgnizerid } = useAppContext()
  const fetchCollection = async () => {
    const res = await axios.get(baseurl + "api/v1/market/v1/collections?pageNo=0&pageSize=29",)
    const currentUserCollection = res.data.filter((collection: any) => {
      return collection.organiserId == orgnizerid
    })
    setCollections(currentUserCollection);
    console.log(currentUserCollection)
  }
  useEffect(() => {
    fetchCollection()
  }, [orgnizerid])
  return (
    <>
      {isConnected ?
        <div className="flex  py-24 items-center justify-center h-full">
          {
            collections?.length ?
              <div className="h-full">
                <Collections collections={collections} />
              </div>
              : <div className="flex flex-col items-center">
                  <h1 className="text-3xl text-white mb-4">Hi 👋️ you dont have'nt created any events yet create a Event</h1>
                  
                  <Link href="/CreateCollection" >
                    <a className="w-64 border-purple-800 border px-4 py-2 rounded-2xl text-center" href="">Create Event</a>
                  </Link>
                </div>
          }
        </div> : <h1>Please Connect your wallet to access KOMET</h1>
      }
    </>
  )
}
