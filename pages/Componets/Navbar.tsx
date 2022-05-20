import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, Btn } from ".";
import { useAppContext } from "../_context";
import axios from "axios"

declare var window: any
const Navbar = () => {

    const { isConnected, setIsConnected, currentAccount, setCurrentAccount, orgnizerid,
        setorgnizerID, baseurl } = useAppContext()
    const [shortAccount, setShortAcount] = useState("")

    const requrl = baseurl + "api/v1/market/v1/organiser/login"

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            console.log("here")

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setIsConnected(true)
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }


    const createOrgnizer = async () => {
        const res = await axios.post(requrl,
            {
                "publicAddress": currentAccount
            }
        )
        const data = res.data.organiserId;
        setorgnizerID(data)
    }

    const checkIfalreadyConnected = async () => {
        var { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true)
        setCurrentAccount(accounts[0]);
    }

    useEffect(() => {
        checkIfalreadyConnected()
        if (currentAccount) {
            console.log("acc")
            createOrgnizer()
        } else {
            console.log("no account")
        }

        const myaccount = new String(currentAccount);
        setShortAcount(myaccount.substring(0, 6))


    }, [currentAccount])


    return (
        <>
            <nav className="flex justify-between items-center text-white">
                <div className="w-20">
                    <Logo />
                </div>
                <div className="lg:flex hidden items-center ">
                    {isConnected ? <Link href="/CreateCollectionForm" >
                        <a className="mx-5" href="">Create Event</a>
                    </Link> : null}
                    {isConnected ? <Btn text={shortAccount ? shortAccount : "hey"} onclick={() => { }} /> : <Btn text="connect wallet" onclick={connectWallet} />}
                </div>
            </nav>
        </>
    )
}


export default Navbar;