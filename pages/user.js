import {useRouter} from 'next/router';
import Layout from '../components/Layout';

const User = () => {
    const router = useRouter();
    return (
        <Layout>
            <div>
                <h2>User detail</h2>
                {JSON.stringify(router)}
                <br/> <br/>
                {JSON.stringify(router.query.name)}
            </div>
        </Layout>
    )
};

export default User;
