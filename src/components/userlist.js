import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserList = () => {
	const {role} = useParams();
	
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
				const response = await fetch(`http://127.0.0.1:8000/api/users/${role}`);
				const result = await response.json();
                setUsers(result);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUsers();
    }, [role]);

    return (
        <div>
            <h2>Users with Role: {role}</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;