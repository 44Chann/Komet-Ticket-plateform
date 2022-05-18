import Link from "next/link";
import { useEffect } from "react";
import { CollectionCard } from "./Componets";
import { useAppContext } from "./_context";
interface Props {
    collections: Array<Object>
}

const Collections = ({ collections }: Props) => {
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
                                    {
                                        collections.map((col: any) => {
                                            return <CollectionCard collectionId={col.collectionId} collectionImage={col.collectionImage} collectionName={col.collectionName} collectionPrice={col.collectionPrice} organiserName={col.organiserName} key={col.collectionId} />
                                        })
                                    }
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