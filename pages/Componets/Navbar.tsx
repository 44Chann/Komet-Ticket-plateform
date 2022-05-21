import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, Btn } from ".";
import { useAppContext } from "../_context";
import axios from "axios";
import { toast } from "react-hot-toast"

declare var window: any
const Navbar = () => {

    const { isConnected, setIsConnected, currentAccount, setCurrentAccount, orgnizerid,
        setorgnizerID, baseurl } = useAppContext()
    const [shortAccount, setShortAcount] = useState("")
    const [account, setAccount] = useState()

    const requrl = baseurl + "api/v1/market/v1/organiser/login"

    const checkWalletIsConnected = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const accounts = await ethereum.request({ method: "eth_accounts" });

                if (accounts.length !== 0) {
                    setAccount(accounts[0]);
                    setIsConnected(true);
                    console.log(accounts[0]);
                } else {
                    console.log("Do not have access");
                }
            } else {
                console.log("Install Metamask");
            }
        } catch (e) {
            console.log(e);
        }
    };






    const login = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });

                if (accounts.length !== 0) {
                    setAccount(accounts[0]);
                    setIsConnected(true);
                    console.log("Found");
                } else {
                    console.log("Not Found");
                }
            } else {
                console.log("Install Metamask");
            }
        } catch (e) {
            console.log(e);
        }
    };




    const changeNetwork = async (chainId: string) => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                if (chainId !== '0x13881') {
                    toast.error('Connect to Polygon Mumbai Testnet')
                    await ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: "0x13881" }],
                    });
                }
            } else {
                console.log("Ethereum not found!");
            }
        } catch (e) {
            console.log(e);
        }
    };


    const createOrgnizer = async () => {
        const res = await axios.post(requrl,
            {
                "publicAddress": currentAccount
            }
        )
        const data = res.data.organiserId;
        setorgnizerID(data)
    }

    useEffect(() => {
        checkWalletIsConnected()
        let { ethereum }: any = window
        ethereum.on('chainChanged', (chainId: string) => {
            changeNetwork(chainId)
        })
    }, [])


    useEffect(() => {
        let acc = String(account)
        acc = acc.slice(0, 5)
        setShortAcount(acc)
        if (account) {
            createOrgnizer()
        }
    }, [account])


    return (
        <>
            <nav className="flex justify-between items-center text-white">
                <div className="w-20">
                    <Logo />
                </div>
                <div className="lg:flex hidden items-center ">
                    {isConnected ? <Link href="/CreateCollection" >
                        <a className="mx-5 border-purple-800 border px-4 py-2 rounded-2xl" href="">Create Event</a>
                    </Link> : null}
                    {isConnected ? <Btn text={shortAccount ? shortAccount : ""} onclick={() => { }} /> : <Btn text="connect wallet" onclick={login} />}
                </div>
            </nav>
        </>
    )
}


export default Navbar;