import Link from 'next/link';

const Navbar = () => (
    <div>
        <Link href="/"><a>Home</a></Link>
        &nbsp;
        <Link href="/users" as="kullanicilar"><a>Users</a></Link>
    </div>
)

export default Navbar;
