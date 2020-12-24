import Link from 'next/link'

export default function Header() {
    return (
        <>
        <h1>Go Flag Me!</h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/subscriptions">Subscirptions</Link></li>
        
        </ul>
        </>
    );
}