import Link from "next/link"
import { useEffect, useState } from "react"
import { Btn, AstroImg } from "./Componets"
import axios from "axios"
import { useAppContext } from "./_context"
import Collections from "./Collections"
export default function Home() {

  const [collections, setCollections] = useState()

  const { baseurl } = useAppContext()

  const fetchCollection = async () => {
    const res = await axios.get(baseurl + "api/v1/market/v1/collections?pageNo=0&pageSize=29",)
    setCollections(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    fetchCollection()
  }, [])

  return (
    <>
      <div className="flex py-24 items-center justify-center min-h-[80vh]">
        {
          collections ?
            <div>
              <Collections collections={collections} />
            </div>
            : <h1 className="text-3xl">ohhhh! you dont have any collection yet create a collection here  <Link href="/CreateCollection" >
              <a className="underline text-purple-400 " href="">
                here
              </a>
            </Link></h1>
        }

      </div>
    </>
  )
}
