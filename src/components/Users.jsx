import { useState } from "react"



export default function Users() {
    const mockData = [
      { username: "Ola Normann", email: "ola.normann@norge.no" },
      { username: "Torleif", email: "torleif@kodehode.no" },
      { username: "Jan Egil", email: "jan.egil@kodehode.no" },
      { username: "Sander", email: "sander@kodehode.no" },
    ];

    const [users, setUsers] = useState(mockData);
    

return (
    <>
    <div>
        <h2>Users:</h2>
{users.map((user, i) => {
    return (
        <div key={i}>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    )
})}
    </div>
    </>
)
};