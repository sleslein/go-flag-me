import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    return (
        <div className="w-screen flex flex-row items-center p-1 white text-grey-800 font-semibold uppercase">
            <ul className="flex flex-row">
                <NavLink href="/">How it Works</NavLink> 
                <NavLink href="/subscriptions">Get a Flag</NavLink>
                <SiteNameLink href="/">Old Glory Inc</SiteNameLink>
                <NavLink href="/signup">Sign In</NavLink>
                <NavLink href="/get-started">Get Started</NavLink>            
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
        <li>
            {router.pathname === href ? 
                (<ActiveNavLink href={href}>{children}</ActiveNavLink>) :
                (<InactiveNavLink href={href}>{children}</InactiveNavLink>)
            }
        </li>
    )
}

function ActiveNavLink({children, href}: NavLinkProps) {
    return (            
        <Link href={href}>
            <a className="px-2 mx-1 bg-gray-200 rounded-full text-grey-700">
                {children}
            </a>
        </Link>
    )
}
function InactiveNavLink({children, href}: NavLinkProps) {
    return (            
        <Link href={href}>
            <a className="px-2 mx-1 hover:bg-gray-200 rounded-full text-grey-700">
                {children}
            </a>
        </Link>
    )
}