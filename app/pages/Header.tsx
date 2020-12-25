import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    return (
        <div className="flex flex-row items-center p-1 bg-blue-900 text-blue-50">
            <div className="text-2xl">Go Flag Me!</div>
            <ul className="flex flex-row">
                <NavLink href="/">Home</NavLink> 
                <NavLink href="/subscriptions">Subscriptions</NavLink>
            </ul>
        </div>
    );
}

interface NavLinkProps {
    children: React.ReactNode;
    href:string;
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
            <a className="px-2 mx-1 bg-blue-200 rounded-full text-blue-800">
                {children}
            </a>
        </Link>
    )
}
function InactiveNavLink({children, href}: NavLinkProps) {
    return (            
        <Link href={href}>
            <a className="px-2 mx-1 hover:bg-blue-200 rounded-full hover:text-blue-800">
                {children}
            </a>
        </Link>
    )
}