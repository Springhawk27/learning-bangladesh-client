import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-12 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col border-t-2">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link to="/home" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={logo} alt="" style={{ width: '100px' }} />

                            <span className="ml-3 text-lg text-blue-800">Learning Bangladesh</span>
                        </Link>
                        <p className="mt-2 text-sm text-gray-700">We are here to give you the best specialization courses with the lowest available price.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-2/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">Contact Us</h2>
                            <nav className="list-none mb-4">
                                <p className="mt-2 text-sm text-gray-700">Road #02, Sector #04, Uttara, Dhaka-1230, Bangladesh
                                </p>
                                <p className="mt-2 text-sm text-gray-700">Phone : 09621 123456, 09621 123457
                                </p>
                                <p className="mt-2 text-sm text-gray-700">E-mail : info@learningbangladesh.com
                                </p>

                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav className="list-none mb-2">
                                <li>
                                    <Link to="/courses" className="text-gray-600 hover:text-green-500">Courses</Link>
                                </li>

                            </nav>
                        </div>

                    </div>
                </div>
                <div className="bg-blue-900">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2022 Learning Bangladesh
                        </p>

                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Footer;