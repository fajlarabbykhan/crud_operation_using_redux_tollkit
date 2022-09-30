import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation()
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault();


        dispatch(updateBook({ id, title, author }))
        navigate("/showbooks", { replace: true })


    }
    return (
        <div className='mt-10  grid justify-items-center'>
            <form className="w-full max-w-sm" onSubmit={handleSubmit} >
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
                            Update Book Info
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditBook;