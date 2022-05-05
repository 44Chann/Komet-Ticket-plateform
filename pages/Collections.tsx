import Link from "next/link";
import { CollectionCard } from "./Componets";

const Collections = () => {
    return (
        <>
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

        </>
    )
}

export default Collections;