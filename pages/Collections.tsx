import Link from "next/link";
import { useEffect } from "react";
import { CollectionCard } from "./Componets";
import { useAppContext } from "./_context";

const Collections = () => {

    const { authRedirect, isConnected } = useAppContext()
    useEffect(() => {
        authRedirect()
    }, [])

    return (
        <>
            {
                isConnected ? (
                    <Link href="/CollectionDetails" >
                        <a href="">
                            <div className="py-9 ">
                                <h2 className="text-4xl">All Collections</h2>
                                <div className="py-8 w-full  flex flex-wrap  ">
                                    <CollectionCard />
                                    <CollectionCard />
                                    <CollectionCard />
                                    <CollectionCard />
                                    <CollectionCard />
                                    <CollectionCard />
                                </div>

                            </div>
                        </a>
                    </Link>
                ) : null
            }



        </>
    )
}

export default Collections;