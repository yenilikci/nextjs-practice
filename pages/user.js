import {useRouter} from 'next/router';

const User = () => {
    const router = useRouter();
    return (
        <div>
            <h2>User detail</h2>
            {JSON.stringify(router)}
            <br/> <br/>
            {JSON.stringify(router.query.name)}
        </div>
    )
};

export default User;
