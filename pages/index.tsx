import Link from "next/link"
import { useEffect, useState } from "react"
import { Btn } from "./Componets"
import axios from "axios"
import { useAppContext } from "./_context"
import Collections from "./Collections"
export default function Home() {

  const [collections, setCollections] = useState()

  const { baseurl, isConnected } = useAppContext()

  const fetchCollection = async () => {
    const res = await axios.get(baseurl + "api/v1/market/v1/collections?pageNo=0&pageSize=29",)
    setCollections(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    console.log(isConnected)
    if (isConnected)
      fetchCollection()
  }, [isConnected])

  return (
    <>
      <div className="flex  py-24 items-center justify-center h-full">
        {
          collections ?
            <div className="h-ful">
              <Collections collections={collections} />
            </div>
            : <h1 className="text-3xl text-white">ohhhh! you dont have any collection yet create a collection here</h1>
        }

      </div>
    </>
  )
}
