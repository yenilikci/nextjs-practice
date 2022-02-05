import Link from "next/link";

const UserList = () => (
    <div>
        <Link href="/user?name=melih" as="melih">
            <a>Melih</a>
        </Link> <br/>
        <Link href="/user?name=celik" as="celik">
            <a>Celik</a>
        </Link>
    </div>
);

export default UserList;
