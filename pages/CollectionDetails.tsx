import { useEffect } from "react";
import { Btn, CollectionCard, DetailsBadge } from "./Componets";
import { useAppContext } from "./_context";
import Router from 'next/router'
const CollectionDetails = () => {
    const { authRedirect, isConnected } = useAppContext()
    useEffect(() => {
        // authRedirect()
    }, [])


    return (
        <> {
            isConnected ? (
                <div className=" flex w-full  flex-col lg:flex-row items-center min-h-[80vh] py-9">
                    <div>
                        {/* <CollectionCard /> */}
                    </div>
                    <div className=" w-full lg:sw-[80%]   min-h-[400px] mb-5 lg:p-5 p-3 my-6">
                        <div className="flex justify-between">
                            <h1>Collection Name</h1>
                            <Btn text="share" onclick={() => { }} />
                        </div>
                        <div className="py-5 border-b border-purple-400">
                            <p>Created By : Name</p>
                        </div>
                        <div className="py-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto quas neque consequuntur! Odit impedit optio unde ab eaque possimus doloribus necessitatibus, cumque, eveniet magnam totam quibusdam laboriosam? Saepe explicabo in minus ex! Aspernatur mollitia reiciendis, porro at aut a amet hic illum dolorum eos sequi harum, placeat exercitationem quod.</p>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-9 ">
                            <DetailsBadge title="price" value="69" />
                            <DetailsBadge title="tickets" value="100 INR" />
                            <DetailsBadge title="Adress" value="213997998X0ff" />
                        </div>
                    </div>
                </div>
            ) : null
        }

        </>
    )
}

export default CollectionDetails;