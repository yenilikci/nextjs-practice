//pages klasörü altında oluşturulan dosyalar url'leri ile çağırılır.

import Image from 'next/image';
import Layout from '../components/Layout';

const Home = () => (
    <Layout>
        <div>
            Home Page
        </div>
        <Image src="/art.jpg" width="400" height="300" alt="art"/>
    </Layout>
);

export default Home;
