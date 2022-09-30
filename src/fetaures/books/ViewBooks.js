import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const ViewBooks = () => {
    const books = useSelector((state) => state.booksReducer.books)
    console.log(books);
    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))

    }
    return (
        <div className='container mx-auto' >
            <div className="overflow-x-auto">
                <h1 className='text-center text-green-500 text-4xl text-bold mt-4 '>Books List</h1>
                <table className="table table-zebra w-full mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Book Title</th>
                            <th>Book Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books && books.map((book) => {
                                const { id, title, author } = book;
                                return <tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>
                                        <Link to="/update-book-info" className="btn btn-success mr-2" state={{ id, title, author }}>
                                            Update
                                        </Link>
                                        <button className="btn btn-error" onClick={
                                            () => {
                                                handleDeleteBook(id)
                                            }
                                        }>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewBooks;