import Link from "next/link"
import { useState } from "react"
import { Btn, AstroImg } from "./Componets"
export default function Home() {
  return (
    <>
      <div className="flex py-24 items-center justify-center">
        <div>
          <h1 className="text-3xl ">What kind of Collection you want to create ? </h1>
          <div className="flex flex-col items-start my-9 ">
            <div className="my-8">
              <Link href="/CreateCollection">
                <a href="">
                  <Btn text="Event" onclick={() => console.log("hi")} />
                </a>
              </Link>
            </div>
            <div>
              <Btn text="NFTs" onclick={() => console.log("hi")} />
            </div>
          </div>
        </div>
        <div className="m-40 hidden lg:block">
          <AstroImg />
        </div>
      </div>
    </>
  )
}
