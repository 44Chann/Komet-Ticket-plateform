import Link from "next/link";
import { Logo, Btn } from ".";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center">
                <div className="w-20">
                    <Logo />
                </div>
                <div>
                    <Link href="/Collections" >
                        <a className="mx-5" href="">View All Collection</a>
                    </Link>
                    <Btn text="Connect Wallet" />
                </div>
            </nav>
        </>
    )
}


export default Navbar;