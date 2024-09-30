import React, { useState } from 'react';
import BookListComponent from './components/BookListComponent';
import TransactionComponent from './components/TransactionComponent';
import UserForm from './components/UserForm';

function App() {
    const [users, setUsers] = useState([]); // State to store users

    const handleUserAdded = (user) => {
        setUsers([...users, user]); // Update the users state with the new user
    };

    return (
        <div className="app">
            <h1>Book Management System</h1>
            <UserForm onUserAdded={handleUserAdded} />
            <BookListComponent />
            <TransactionComponent />
        </div>
    );
}

export default App;
