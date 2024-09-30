import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/books';

const BookListComponent = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_URL);
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="book-list">
            <h2>Available Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <strong>{book.name}</strong> - {book.category} - Rent: ${book.rentPerDay}/day
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookListComponent;
