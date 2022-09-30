import React from 'react';
import { useSelector } from 'react-redux';

const ViewBooks = () => {
    const books = useSelector((state) => state.booksReducer.books)
    console.log(books);
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
                                    <td><button className="btn btn-success mr-2">Edit</button>
                                        <button className="btn btn-error">Delete</button></td>
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