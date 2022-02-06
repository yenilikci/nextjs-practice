import Head from 'next/head';
import Link from 'next/link';

export default function Home(){
    return(
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <h1>Blog Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
            <Link href="/blog/post"><a>Post!</a></Link>
        </div>
    )
}
