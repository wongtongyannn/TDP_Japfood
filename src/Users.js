import {useState, useEffect} from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log("response:", response);
            setUsers(response.data);
        })
        .catch((error) => {
            console.error("Error getting data:", error);
        });
    },[]); //[] is empty, only run once for now

    return (
    <div>
        Users:
        <ul>
            {users.map((user) => {
                return (
                <li key={user.id}>
                    {user.name}-{user.email}
                </li>
            );
            })}
        </ul>
    </div>
    ); 
}

export default Users;