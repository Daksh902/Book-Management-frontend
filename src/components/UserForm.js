import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, phoneNumber };

        try {
            // Make a POST request to add a new user
            const response = await axios.post('http://localhost:3000/api/users', newUser);
            onUserAdded(response.data); // Callback to parent component with the new user data
            setName('');
            setEmail('');
            setPhoneNumber('');
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Error adding user. Please try again.');
        }
    };

    return (
        <div className="user-form">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserForm;
