const ListUsers = ({users}) => {
    const sorted = users.sort((a, b) => a.lastName.localeCompare(b.lastName));

    return (
      <div>
        <div>Users: {users.length}</div>
        <ul>
            {sorted.map((user, idx) => (
                <li key={idx}>{user.firstName} {user.lastName}</li>
            ))}
        </ul>
      </div>
    );
}

export default ListUsers;