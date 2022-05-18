import { useState } from "react";
import CreateCollection from "./Componets/Forms/CreateCollection";
import CreateNFT from "./Componets/Forms/CreateNFT";
import { useAppContext } from "./_context";



const CreateCollectionForm = () => {
    const { step, setStep } = useAppContext()

    return (
        <>           <h1 className="text-center  text-4xl mt-8">step  {step} out of {2}</h1>
            <div className="w-full flex-col flex justify-center items-center my-10">

                <div className="flex items-center">
                    <div className={"w-10 h-10 rounded-full flex items-center justify-center   " + (step >= 2 ? "bg-purple-700" : "bg-purple-500")} >
                        {1}
                    </div>
                    <div className={"w-60 h-2  " + (step >= 2 ? "bg-purple-700" : "bg-white")}>
                    </div>
                    <div className={"w-10 h-10 rounded-full flex items-center justify-center " + (step >= 3 ? "bg-purple-700" : "bg-purple-300")}>
                        {2}
                    </div>
                </div>
                {
                    step == 1 ?
                        <CreateCollection /> : <CreateNFT />
                }
            </div>

        </>
    )
}

export default CreateCollectionForm;