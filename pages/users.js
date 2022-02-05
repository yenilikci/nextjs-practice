import UserList from "../components/UserList";
import fetch from "isomorphic-fetch";

const Users = props => {
    return (
        <div>
            Users Page
            {/*{JSON.stringify(props)} */}
            <UserList users={props.users}/>
        </div>
)
};

Users.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {users: data};
};

export default Users;
