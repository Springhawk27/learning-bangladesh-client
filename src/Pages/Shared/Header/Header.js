import React from 'react';
import logo from '../../../assets/logo.png';
import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (


        <header className=" body-font bg-gray-100 sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/home" className="flex title-font font-medium items-center  mb-4 md:mb-0">

                    <img src={logo} alt="" style={{ width: '100px' }} />

                    <span className="ml-3 text-xl text-blue-900">Learning Bangladesh</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#48BB78"
                        }}
                        to="/"
                        className="mr-5 hover:text-green-700">Home</Link>
                    <Link
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#48BB78"
                        }}
                        to="/Courses"
                        className="mr-5 hover:text-green-700">Courses</Link>
                    <Link
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#48BB78"
                        }}
                        to="/accessories"
                        className="mr-5 hover:text-green-700">Accessories</Link>

                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>


                </nav>


            </div>
        </header>





    );
};

export default Header;