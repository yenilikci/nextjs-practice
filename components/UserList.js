import Link from "next/link";
import Router  from "next/router";

const UserList = props => (
    <div>
        {/*<Link href="/user?name=melih" as="u/melih">*/}
        {/*    <a className="username">Melih</a>*/}
        {/*</Link> <br/>*/}
        {/*<Link href="/user?name=celik" as="u/celik">*/}
        {/*    <a className="username">Celik</a>*/}
        {/*</Link>*/}

        {props.users.map(user => (
            <div>
                <Link href={`/user?name=${user.username}`} as={`u/${user.username}`}>
                    <a
                        onMouseEnter={()=> {Router.prefetch(`/user?name=${user.username}`); console.log('prefetching')}}
                        className="username">{user.name}</a>
                </Link>
            </div>
        ))}

        {/* built-in styled css */}
        <style jsx>
            {`
              .username{
                background: #121212;
                color: #ddd;
              }
            `}
        </style>
    </div>
);

export default UserList;
