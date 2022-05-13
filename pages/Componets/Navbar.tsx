import Link from "next/link";
import { Logo, Btn } from ".";
import { useState } from "react";
import { useAppContext } from "../_context";



declare var window: any
const Navbar = () => {

    const { isConnected, setIsConnected, currentAccount, setCurrentAccount } = useAppContext()
    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }


            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account)
            } else {
                console.log("No authorized account found")
            }
        } catch (error) {
            console.log(error);
        }
    }



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

            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <nav className="flex justify-between items-center ">
                <div className="w-20">
                    <Logo />
                </div>
                <div className="lg:flex hidden items-center ">
                    {isConnected ? <Link href="/Collections" >
                        <a className="mx-5" href="">View All Collection</a>
                    </Link> : null}

                    {isConnected ? <Btn text={currentAccount ? currentAccount : ""} onclick={() => { }} /> : <Btn text="connect wallet" onclick={connectWallet} />}
                </div>
            </nav>
        </>
    )
}


export default Navbar;