import { useEffect, useState } from "react";
import { Btn, CollectionCard, DetailsBadge } from "./Components";
import { useAppContext } from "./_context";
import axios from "axios";
import { useRouter } from "next/router";

const CollectionDetails = () => {
    const [collection, setCollection] = useState<any>()
    const { authRedirect, isConnected, baseurl } = useAppContext()
    const router = useRouter()
    const fetchCollection = async () => {
        const res = await axios.get(baseurl + "api/v1/market/v1/collections?pageNo=0&pageSize=29",)
        const currentUserCollection = res.data.filter((collection: any) => {
            return collection.collectionId == router.query.id
        })
        setCollection(currentUserCollection[0]);
        console.log(currentUserCollection)
    }

    useEffect(() => {
        fetchCollection()
    })


    return (
        <> {

            <div className=" flex w-full  flex-col lg:flex-row items-center min-h-[80vh] py-9">
                <div className="lg:w-[40%]">
                    <img className="object-cover" src={collection ? collection.collectionImage : ""} alt="" />
                </div>
                <div className=" w-full lg:w-[60%] min-h-[400px] mb-5 lg:p-5 p-3 my-6">
                    <div className="py-5 border-b border-purple-400">
                        <p>Created By : {collection ? collection.collectionName : ""}</p>
                    </div>
                    <div className="py-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto quas neque consequuntur! Odit impedit optio unde ab eaque possimus doloribus necessitatibus, cumque, eveniet magnam totam quibusdam laboriosam? Saepe explicabo in minus ex! Aspernatur mollitia reiciendis, porro at aut a amet hic illum dolorum eos sequi harum, placeat exercitationem quod.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-9 ">
                        <DetailsBadge title="price" value={collection ? collection.collectionPrice + " Matic" : ""} />
                        <DetailsBadge title="tickets" value={collection ? collection.numberOfTokensOnSale : ""} />
                        <DetailsBadge title="Adress" value={collection ? collection.collectionContractId.slice(0, 5) : ""} />
                    </div>
                </div>
            </div>

        }

        </>
    )
}

export default CollectionDetails;