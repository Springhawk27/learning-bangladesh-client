import React from 'react';
import logo from '../../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (


        <header className=" body-font bg-gray-100 sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center  mb-4 md:mb-0">

                    <img src={logo} alt="" style={{ width: '100px' }} />

                    <span className="ml-3 text-xl text-blue-900">Learning Bangladesh</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link

                        to="/"
                        className="mr-5 hover:text-blue-900">Home</Link>
                    <Link

                        to="/courses"
                        className="mr-5 hover:text-blue-900">Courses</Link>
                    <Link

                        to="/faq"
                        className="mr-5 hover:text-blue-900">FAQ</Link>
                    <Link

                        to="/blog"
                        className="mr-5 hover:text-blue-900">Blog</Link>



                </nav>


            </div>
        </header>





    );
};

export default Header;