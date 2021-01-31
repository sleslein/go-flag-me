import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../components/Button'


export default function Header() {
    return (
        <div className="w-screen py-5 white text-grey-800 font-semibold uppercase">
            <ul className="flex flex-row justify-evenly">
                <NavLink href="/">How it Works</NavLink> 
                <NavLink href="/subscriptions">Get a Flag</NavLink>
                <SiteNameLink href="/">Old Glory Inc</SiteNameLink>
                <NavLink href="/signup">Sign In</NavLink>
                <Button><NavLink href="/get-started">Get Started</NavLink></Button>            
            </ul>
        </div>
    );
}

interface NavLinkProps {
    children: React.ReactNode;
    href:string;
}

function SiteNameLink ({children, href}: NavLinkProps) {
    return (
        <Link href={href}>
            <a className="px-2 mx-1 text-3xl text-black">
                {children}
            </a>
        </Link>
    );
}
function NavLink({children, href}: NavLinkProps) {
    const router = useRouter();
    return (
        <li className="my-auto text-sm text-grey-700" >
            <ActiveNavLink href={href}>{children}</ActiveNavLink>
            {/* {router.pathname === href ? 
                (<ActiveNavLink href={href}>{children}</ActiveNavLink>) :
                (<InactiveNavLink href={href}>{children}</InactiveNavLink>)
            } */}
        </li>
    )
}

function ActiveNavLink({children, href}: NavLinkProps) {
    return (            
        <Link href={href}>
            <a className="px-2">
                {children}
            </a>
        </Link>
    )
}
function InactiveNavLink({children, href}: NavLinkProps) {
    return (            
        <Link href={href}>
            <a className="px-2 mx-1 rounded-full text-grey-700">
                {children}
            </a>
        </Link>
    )
}