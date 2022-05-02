interface Props {
    showModal: boolean
    setShowModal: Function
    setShowNFT: Function
}

const MintNFTForm = ({ showModal, setShowModal, setShowNFT }: Props) => {
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
                                    <h3 className="text-3xl font-semibold">Create New Art</h3>
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
                                        id="Artist Name"
                                        name="name"
                                        type="text"
                                        required={true}
                                        placeholder="Enter your Name"
                                        className="my-4 w-[90%] max-w-lg border  px-3 py-2"
                                    />
                                    <input
                                        id="NFT Name"
                                        name="nft name"
                                        type="text"
                                        required={true}
                                        placeholder="Enter NFT Name"
                                        className="my-4 w-[90%] max-w-lg border  px-3 py-2"
                                    />
                                    <input
                                        id="NFT price"
                                        name="nft price"
                                        type="number"
                                        required={true}
                                        placeholder="Ente NFT price"
                                        className="my-4 w-[90%] max-w-lg border   px-3 py-2"
                                    />
                                    <textarea
                                        id="description"
                                        name="desccription"
                                        required={true}
                                        placeholder="Add  description"
                                        className="my-4 w-[90%] max-w-lg border px-3  py-2"
                                    />


                                    <div className="m-4">
                                        <label className="mb-2 inline-block text-gray-500">
                                            upload NFT (jpg,png,svg,jpeg)
                                        </label>
                                        <div className="flex w-full items-center justify-center">
                                            <label className="flex h-32 w-full flex-col border-4 border-dashed hover:border-gray-300 hover:bg-gray-100">
                                                <div className="flex flex-col items-center justify-center pt-7">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-12 w-12 text-gray-400 group-hover:text-gray-600"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                        Select a photo
                                                    </p>
                                                </div>
                                                <input
                                                    type="file"

                                                    className="opacity-0"
                                                />
                                            </label>
                                        </div>
                                    </div>

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
                                            setShowNFT(true)
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

export default MintNFTForm;