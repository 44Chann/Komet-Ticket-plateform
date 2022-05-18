import Link from 'next/link'
import FormData from 'form-data'
import { useEffect, useState } from "react"
import { useAppContext } from '../../_context'
import axios from "axios"
import { ethers } from 'ethers'
import Router from 'next/router'
import contractABI from '../../../contracts/abi.json'
import Modal from '../LoadingModal'
const contractAddress = '0x89171564Be0DbDd66Eee73f9F452529213167BA2'

declare var window: any
export default function CreateNFT() {
    const {
        isConnected,
        noOFTokens,
        setNoOfTokens,
        baseurl,
        orgnizerid,
        collectionAdress,
        setCollectionAdress,
        collectionName,
        collectionPrice,
        collectionSymbol,
        orgnizerName,
        collectionID,
        setCollectionID,
        step, setStep,
        showModal, setShowModal,
        createStatus, setCreateStatus
    } = useAppContext()
    const [preview, setPreview] = useState<any>()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const requrl = baseurl + 'api/v1/market/v1/token/upload_symbol'
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [loading, setloading] = useState(false)
    const CreateCollection = async () => {
        try {
            const { ethereum } = window
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum)
                const signer = provider.getSigner()
                const newCollectionContract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                )
                let newCollectionTxn = await newCollectionContract.deployNftCollection(
                    'collectionName',
                    'VKS',
                    'BaseURI',
                    ethers.utils.parseEther('0.0002')
                )
                newCollectionTxn.hash
                newCollectionTxn.wait()
                newCollectionContract.on(
                    'CollectionCreated',
                    (nftAddress: any, _organiserId) => {
                        setCollectionAdress(nftAddress)
                    }
                )
            } else {
                console.log("Ethereum object doesn't exist!")
            }
        } catch (error) {
            console.log(error)
        }
    }


    const createNFt = async () => {
        const data = new FormData()
        data.append('file', selectedFile, selectedFile.name)
        try {
            const res = await axios.post(requrl, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            console.log(res)
            if (res.data.status) {
                console.log(collectionID)
                console.log('image uploaded')
                console.log(res.data.url)
                const myres = await axios.post(
                    baseurl + 'api/v1/market/v1/token/create',
                    {
                        numberOfTokens: noOFTokens,
                        collectionId: collectionID,
                        attributes: {
                            name: name,
                            decimals: 10,
                            description: description,
                            image: res.data.url,
                        },
                        mediaUrl: res.data.url,
                    }
                )
                console.log(myres.data)
                setCreateStatus(res.data.status)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleFileSelect = (e: any) => {
        setSelectedFile(e.target.files[0])
        console.log(collectionID)
        console.log(selectedFile)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setloading(true)
        setShowModal(true)
        setStep(step + 1)
        CreateCollection()
    }
    useEffect(() => {
        (async () => {
            const requrl = baseurl + '/api/v1/market/v1/collections/create'
            if (collectionAdress) {
                console.log(collectionAdress)
                const res = await axios.post(requrl, {
                    organiserId: orgnizerid,
                    organiserName: orgnizerName,
                    collectionName: collectionName,
                    collectionPrice: 1,
                    collectionContractId: collectionAdress,
                    nftCollection: true,
                    collectionSymbol: collectionSymbol,
                })
                console.log(res.data.collectionId)
                setCollectionID(res.data.collectionId)
            }
            console.log(orgnizerid)
        })()

    }, [collectionAdress])

    useEffect(() => {
        console.log(selectedFile)
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    useEffect(() => {
        if (collectionID) {
            createNFt()
        }

    }, [collectionID])


    return (
        <>
            {isConnected ? (
                <div className="my-6 flex h-full w-full max-w-lg  flex-col items-center justify-center  lg:flex-row">
                    <div className="flex w-full flex-col items-center">
                        <h1 className="text-3xl ">Add NFT To Collection </h1>
                        <div className="w-full py-8">
                            <form className="flex w-full flex-col  " onSubmit={handleSubmit}>
                                <input
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    id="NFT Name"
                                    name="nft name"
                                    type="text"
                                    required={true}
                                    placeholder="Enter NFT Name"
                                    className=" my-3 block border-b border-purple-700 bg-transparent  p-2 text-sm text-white  focus:outline-none"
                                />
                                <input
                                    onChange={(e) => {
                                        setNoOfTokens(e.target.value)
                                    }}
                                    id="Token numbers"
                                    name="nft number"
                                    type="number"
                                    required={true}
                                    placeholder="Enter Numbers of Token to create "
                                    className=" my-3 block border-b border-purple-700 bg-transparent  p-2 text-sm text-white  focus:outline-none"
                                />

                                <textarea
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                    id="description"
                                    name="desccription"
                                    required={true}
                                    placeholder="Add  description"
                                    className="my-8 min-h-[300px] w-full border border-purple-700 bg-transparent px-3  py-2 focus:outline-none"
                                />

                                <div className="">
                                    <label className="mb-2 inline-block text-gray-500">
                                        upload NFT (jpg,png,svg,jpeg)
                                    </label>
                                    <div className=" flex w-full items-center justify-center ">
                                        <label className="hover:border-purple-700-300 flex w-full flex-col border-2  border-purple-500 hover:bg-purple-700">
                                            <div className="flex cursor-pointer items-center justify-center p-12">
                                                {selectedFile ? (
                                                    <img className="object-cover" src={preview} alt="" />
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-12 w-12 text-gray-400 group-hover:text-gray-600"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                            Select a photo
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                className="absolute opacity-0 "
                                                onChange={handleFileSelect}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    {
                                        loading ? <button className='rounded-3xl bg-purple-700 px-5 py-2 opacity-50 cursor-not-allowed' disabled>
                                            submit
                                        </button> :
                                            <input
                                                type="submit"
                                                className="rounded-3xl bg-purple-700 px-5 py-2 cursor-pointer"
                                            />
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}
            <Modal />
        </>
    )
}
