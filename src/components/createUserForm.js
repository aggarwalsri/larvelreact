import React, { useState } from 'react';

const CreateUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
         try {
            await fetch('http://127.0.0.1:8000/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, roles })
            });
            window.location.href = `/list/${roles}`;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            <input type="text" value={roles} onChange={(e) => setRoles(e.target.value)} placeholder="Role" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateUserForm;