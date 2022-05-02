interface Props {
    setisWalletconnected: Function
    isWalletConnect: boolean
}

const Navbar = ({ setisWalletconnected, isWalletConnect }: Props) => {
    return (
        <>
            <nav className="w-full px-4 py-6 flex justify-between items-start-center ">
                <h1 className="text-3xl">KOMET</h1>
                {
                    isWalletConnect ?
                        null : <button className="bg-purple-500 px-3 py-2 text-white" onClick={() => {
                            setisWalletconnected(true)
                        }}>Connect wallet</button>
                }

            </nav>
        </>
    )
}

export default Navbar;
