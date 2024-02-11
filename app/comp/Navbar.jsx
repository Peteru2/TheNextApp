import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/next.jpg"
const Navbar = () => {
    return ( 
        <nav>
            <Image 
              src={Logo}
              width={40}
              alt="Logo"
              placeholder="blur"
            />
            <h2>TheNextApp</h2>
            <Link href='/'>Dashboard</Link>
            <Link href='/tickets'>Tickets</Link>
        </nav>
     );
}
 
export default Navbar;