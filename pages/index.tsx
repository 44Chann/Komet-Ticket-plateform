
import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "./_context"
import Collections from "./Collections"

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
