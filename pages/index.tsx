
import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "./_context"
import Collections from "./Collections"

export default function Home() {

  const [collections, setCollections] = useState()

  const { baseurl, isConnected, organiserId } = useAppContext()

  const fetchCollection = async () => {
    const res = await axios.get(baseurl + "api/v1/market/v1/collections?pageNo=0&pageSize=29",)
    const orgCollection = res.data.filter((collection: any) => {
      return collection.organiserId == organiserId
    })
    setCollections(orgCollection)

  }

  useEffect(() => {
    console.log(isConnected)
    if (isConnected)
      fetchCollection()
  }, [isConnected])

  return (
    <>
      {isConnected ?
        <div className="flex  py-24 items-center justify-center h-full">
          {
            collections ?
              <div className="h-ful">
                <Collections collections={collections} />
              </div>
              : <h1 className="text-3xl text-white">hi you dont have'nt created any events  yet create a Event</h1>
          }

        </div> : null

      }

    </>
  )
}
