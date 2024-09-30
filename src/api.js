import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Use the environment variable

export const getBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

export const issueBook = async (userId, bookId) => {
    const response = await axios.post(`${API_URL}/transactions/issue`, { userId, bookId });
    return response.data;
};

export const returnBook = async (userId, bookId) => {
    const response = await axios.post(`${API_URL}/transactions/return`, { userId, bookId });
    return response.data;
};
