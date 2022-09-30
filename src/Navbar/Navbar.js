import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-300">
            <div class="navbar-start">
                <Link to="/" class="btn btn-ghost normal-case text-xl">BOOKS CRUD</Link>


            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
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
            <div class="navbar-end">
                {/* <a class="btn"></a> */}
            </div>
        </div>
    );
};

export default Navbar;