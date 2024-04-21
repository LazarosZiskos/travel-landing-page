import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const links = [
    { href: "/", key: "home", title: "Home" },
    { href: "/work", key: "how", title: "How Hilink Work?" },
    { href: "/serv", key: "services", title: "Services" },
    { href: "/pricing", key: "pricing", title: " Pricing" },
    { href: "/contact", key: "contact", title: "Contact Us" },
]



const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" height={29} width={74}/>
        </Link>
        <ul className="hidden lg:flex gap-12">
        {links.map((link) =>
        <Link href={link.href} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
          <li key={link.key}>{link.title}</li>
        </Link>)}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          />
        </div>

        <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar