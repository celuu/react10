import { useEffect, useState } from "react";

const ListUsers = ({users}) => {
    const [count, setCount] = useState(0);
    const [sorted, setSorted] = useState(users)

    const sortNames = ({users}) => {
        let copy = [...users];
        setSorted(copy.sort((a, b) => a.lastName - b.lastName));
        setCount(users.length);
    }

    useEffect(() => {
        sortNames({users})
    }, [])


    return (
      <div>
        <div>Users: {count}</div>
        <ul>
            {users.map((user, idx) => (
                <li key={idx}>{user.firstName} {user.lastName}</li>
            ))}
        </ul>
      </div>
    );
}

export default ListUsers;