import { useState } from "react"
import { mockData } from "./data";


export default function Users() {
    const [userData, setUserdata] = useState(mockData);
    

return (
    <>
    <div>
        <h2>Users:</h2>
        <ul>
        {mockData.map((user, i) => (
            <li key={i}>{mockData.username}</li>
        ))}
        </ul>
    </div>
    </>
)
};