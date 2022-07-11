import Link from "next/link";

interface Props {
    collectionId: string
    collectionImage: string
    collectionName: string
    collectionPrice: number
    organiserName: string
}

const CollectionCard = ({ collectionId, collectionImage, collectionName, organiserName, collectionPrice }: Props) => {
    return (
        <>
            <Link href={{ pathname: "/CollectionDetails", query: { id: collectionId } }}>
                <div className="bg-[#272727] px-3 py-2 min-w-[250px] max-w-md m-auto lg:m-0 lg:mr-5 lg:mb-6 ">
                    <div className="min-h-[300px] ">
                        <img src={collectionImage} alt="nft img" className="object-cover" />
                    </div>
                    <div>
                        <p>{organiserName}</p>
                        <div className="flex justify-between text-sm font-bold py-3">
                            <p>{collectionName}</p>
                            <p>Matic: {collectionPrice} </p>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default CollectionCard;