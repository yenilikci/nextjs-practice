import React from 'react';
import fetch from "isomorphic-fetch";
import UserList from '../components/UserList';

class StatefulUsers extends React.Component {
    static async getInitialProps(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return {users: data};
    }

    render() {
        return (
            <div>
                Users Page
                {/*{JSON.stringify(props)} */}
                <UserList users={this.props.users}/>
            </div>
        );
    }
}

export default StatefulUsers;
