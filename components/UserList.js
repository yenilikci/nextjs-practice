import Link from "next/link";

const UserList = () => (
    <div>
        <Link href="/user?name=melih" as="u/melih">
            <a className="username">Melih</a>
        </Link> <br/>
        <Link href="/user?name=celik" as="u/celik">
            <a className="username">Celik</a>
        </Link>

        {/* built-in styled css */}
        <style jsx>
            {`
              .username{
                background: #121212;
                padding: 10px;
                color: #ddd;
                display: block;
              }
            `}
        </style>
    </div>
);

export default UserList;
