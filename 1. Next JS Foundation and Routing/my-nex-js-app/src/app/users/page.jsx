import Link from "next/link";


const UsersPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
        <div>
            <h1>Users Page: {users.length}</h1>


            <div className="grid grid-cols-3 gap-4">

                {
                    users.map(user => <div key={user.id} className="card bg-base-100 shadow-sm border">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <h2>Company Name: {user.company.name}</h2>
                            <h2>{user.company.catchPhrase}</h2>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}><button className="btn btn-primary">More Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;