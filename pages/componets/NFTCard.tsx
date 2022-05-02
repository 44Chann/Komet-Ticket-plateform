import Link from "next/link";

const NFTcard = () => {
    return (
        <>
            <Link href="/Details">
                <a >
                    <div className="w-[320px]  relative border border-purple-400  my-8  rounded-2xl ">
                        <div className=" w-[90%] m-auto relative border ">
                            <div className="h-22 bg-white  absolute  rounded-xl px-4 py-2 drop-shadow-lg -bottom-2" >
                                <p className="text-sm"></p>
                            </div>
                            <img src="/nft.avif" className="object-cover rounded-xl my-2" alt="" />
                        </div>
                        <div className=" w-full h-full  mt-4 ">
                            <h2 className="px-6">NFT Title</h2>
                            <div className="p-6 bg-purple-200 text-green-800 rounded-b-2xl">
                                <p>Price </p>
                                <p>18.4@</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>\
        </>
    )
}

export default NFTcard;