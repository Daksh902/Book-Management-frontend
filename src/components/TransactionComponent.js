import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionComponent = () => {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedBookId, setSelectedBookId] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    useEffect(() => {
        // Fetch users and books on component mount
        const fetchUsersAndBooks = async () => {
            const usersResponse = await axios.get('http://localhost:3000/api/users');
            const booksResponse = await axios.get('http://localhost:3000/api/books');
            setUsers(usersResponse.data);
            setBooks(booksResponse.data);
        };
        
        fetchUsersAndBooks();
    }, []);

    const handleIssueBook = async () => {
        try {
            await axios.post('http://localhost:3000/api/transactions/issue', {
                userId: selectedUserId,
                bookId: selectedBookId,
                issueDate,
            });
            alert('Book issued successfully!');
            setSelectedUserId('');
            setSelectedBookId('');
            setIssueDate('');
        } catch (error) {
            console.error('Error issuing book:', error);
            alert('Error issuing book. Please try again.');
        }
    };

    const handleReturnBook = async () => {
        try {
            await axios.post('http://localhost:3000/api/transactions/return', {
                userId: selectedUserId,
                bookId: selectedBookId,
                returnDate,
            });
            alert('Book returned successfully!');
            setSelectedUserId('');
            setSelectedBookId('');
            setReturnDate('');
        } catch (error) {
            console.error('Error returning book:', error);
            alert('Error returning book. Please try again.');
        }
    };

    return (
        <div className="transaction-component">
            <h2>Issue Book</h2>
            <div>
                <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map((user) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                    ))}
                </select>
                <select value={selectedBookId} onChange={(e) => setSelectedBookId(e.target.value)}>
                    <option value="">Select Book</option>
                    {books.map((book) => (
                        <option key={book._id} value={book._id}>{book.name}</option>
                    ))}
                </select>
                <input 
                    type="date" 
                    value={issueDate} 
                    onChange={(e) => setIssueDate(e.target.value)} 
                />
                <button onClick={handleIssueBook}>Issue Book</button>
            </div>

            <h2>Return Book</h2>
            <div>
                <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map((user) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                    ))}
                </select>
                <select value={selectedBookId} onChange={(e) => setSelectedBookId(e.target.value)}>
                    <option value="">Select Book</option>
                    {books.map((book) => (
                        <option key={book._id} value={book._id}>{book.name}</option>
                    ))}
                </select>
                <input 
                    type="date" 
                    value={returnDate} 
                    onChange={(e) => setReturnDate(e.target.value)} 
                />
                <button onClick={handleReturnBook}>Return Book</button>
            </div>
        </div>
    );
};

export default TransactionComponent;
