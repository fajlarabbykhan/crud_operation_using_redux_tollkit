import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-300 ">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">BOOKS CRUD</Link>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mr-4'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li >
                        <Link to='/showbooks' className='mr-4'>SHOW BOOKS</Link>
                    </li>
                    <li>

                        <Link to='/addbook' className='mr-4'>ADD BOOK</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn"></a> */}
            </div>
        </div>
    );
};

export default Navbar;