import Link from 'next/link';

const Navbar = () => (
    <div>
        <Link href="/"><a>Home</a></Link>
        &nbsp;
        {/*prefetch needs https connection*/}
        <Link prefetch href="/users" as="kullanicilar"><a>Users</a></Link>
        &nbsp;
        <Link href="/blog"><a>Blog</a></Link>
    </div>
)

export default Navbar;
