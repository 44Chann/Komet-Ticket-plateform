import { useEffect, useState } from "react";
import { useAppContext } from "../_context";
import Router from "next/router";
export default function Modal() {
    const { showModal, setShowModal } = useAppContext()
    const [step, setstep] = useState(1)
    const { collectionAdress, collectionID, createStatus } = useAppContext()
    const [text, setText] = useState("deplying contract")
    useEffect(() => {
        if (collectionAdress) {
            setstep(step + 1)
            setText("Adding tickets to collection")
        }
        if (collectionID) {
            setstep(step + 1)
            setText("Done")
        }
    }, [collectionAdress, collectionID, createStatus])

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-xl"
                    >
                        <div className="relative  w-auto my-6 mx-auto max-w-5xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative  flex flex-col lg:min-w-[900px] w-full bg-primary outline-none min-h-[500px] focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-3xl font-semibold text">
                                        sit back creating collection
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="w-full flex-col flex justify-center items-center my-10">
                                        <div className="flex items-center">
                                            <div className={"w-8 h-8 rounded-full flex items-center justify-center " + (step == 1 ? "bg-purple-700" : "bg-purple-500")} >
                                                {1}
                                            </div>
                                            <div className={"w-60 h-1  " + (step >= 2 ? "bg-purple-700" : "bg-white")}>
                                            </div>
                                            <div className={"w-8 h-8 rounded-full flex items-center justify-center " + (step >= 2 ? "bg-purple-700" : "bg-purple-500")}>
                                                {2}
                                            </div>
                                            <div className={"w-60 h-1  " + (step >= 3 ? "bg-purple-700" : "bg-white")}>
                                            </div>
                                            <div className={"w-8 h-8 rounded-full flex items-center justify-center " + (step >= 3 ? "bg-purple-700" : "bg-purple-500")}>
                                                {3}
                                            </div>
                                        </div>
                                        <div className="h-full flex-col  items-center my-10 py-20">
                                            <p>{text}</p>
                                            {step >= 3 ? <div>
                                                <p>collection Details  </p>
                                                <p> Contract Adress : {collectionAdress} </p>
                                                <p>Collection ID : {collectionID}</p>
                                            </div> : null}
                                        </div>

                                    </div>

                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6  rounded-b">
                                    {createStatus ? <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            Router.push("collectios")
                                        }}
                                    >
                                        view Collection
                                    </button> :
                                        null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}