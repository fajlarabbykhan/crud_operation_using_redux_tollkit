import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBooks = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length)
    const handleSubmit = e => {
        e.preventDefault();
        const book = {
            id: numberOfBooks + 1,
            title, author
        }
        dispatch(addBook(book))
        navigate("/showbooks", { replace: true })
    }
    return (
        <div className='mt-10  grid justify-items-center'>
            <h1 className='text-center text-green-500 text-4xl text-bold mb-4 '>Add a Book</h1>

            <form className="w-full max-w-sm" on onSubmit={handleSubmit} >
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                            Book Title
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text" name="title" value={title} onChange={
                            (e) => setTitle(e.target.value)
                        } required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="author">
                            Book Author
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="author" type="text" name='author' value={author}
                            onChange={
                                (e) => setAuthor(e.target.value)
                            } required />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Add Book
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;