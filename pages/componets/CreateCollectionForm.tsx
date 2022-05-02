interface Props {
    showModal: boolean
    setShowModal: Function
    showCollection: boolean
    setShowCollection: Function
}

const CreateCollectionForm = ({ showModal, setShowModal, setShowCollection }: Props) => {
    return (
        <>

            {showModal ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto max-w-3xl lg:w-[800px]">
                            {/*content*/}
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between rounded-t  p-5">
                                    <h3 className="text-3xl font-semibold">Create New Collection</h3>
                                    <button
                                        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form className=" m-auto w-[90%] ">
                                    <input
                                        id="orgnizer name"
                                        name="name"
                                        type="text"
                                        required={true}
                                        placeholder="Enter your Collection Name"
                                        className="my-4 w-[90%] max-w-lg border  px-3 py-2"
                                    />
                                    <input
                                        id="Collection Symbol"
                                        name="nft name"
                                        type="text"
                                        required={true}
                                        placeholder="Enter Collection Symbol withot spaces"
                                        className="my-4 w-[90%] max-w-lg border  px-3 py-2"
                                    />

                                </form>

                                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                                    <button
                                        className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            setShowCollection(true)
                                        }}
                                    >
                                        submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            ) : null}
        </>
    )
}

export default CreateCollectionForm;