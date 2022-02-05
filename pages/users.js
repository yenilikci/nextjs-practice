import {useRouter} from 'next/router';

const Users = () => {
    const router = useRouter();
    return (
        <div>
            {JSON.stringify(router)}
            <br/> <br/>
            {JSON.stringify(router.query.name)}
        </div>
)
};

export default Users;
