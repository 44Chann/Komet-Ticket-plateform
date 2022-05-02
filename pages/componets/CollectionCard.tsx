import Link from "next/link";

const CollectionCard = () => {
    return (
        <>
            <Link href="/CollectionDetails">
                <a>
                    <div className="w-[320px]   relative border border-purple-400  my-8  rounded-2xl ">
                        <div className=" w-[90%] h-[400px] m-auto relative border flex justify-center items-center bg-purple-400 text-white my-3 ">
                            <h1 className="text-3xl">KID</h1>
                        </div>
                        <div className=" w-full h-full mt-4 ">
                            <h2 className="p-6 text-2xl">KID party </h2>
                            <div className="p-6 bg-purple-200 text-green-800 rounded-b-2xl">
                                <p className="text-lg font-bold">Orgnized by : KID</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>\
        </>
    )
}

export default CollectionCard;