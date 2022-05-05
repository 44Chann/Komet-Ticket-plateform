const CollectionCard = () => {
    return (
        <>
            <div className="border border-purple-600 p-2 w-[250px] m-auto lg:m-0 lg:mr-5 lg:mb-6 ">
                <div className=" ">
                    <img src="/nft.avif" alt="nft img" className="object-cover" />
                </div>
                <div>
                    <p>Orgized by</p>
                    <div className="flex justify-between text-sm font-bold py-3">
                        <p>collection Name</p>
                        <p>INR: Price</p>
                    </div>
                    <div className="flex justify-between ">
                        <p>Orgized by</p>
                        <p>31/2/2922</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionCard;