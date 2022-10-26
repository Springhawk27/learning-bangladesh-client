import React from 'react';
import logo from '../../../assets/logo.png';
import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (

        // <Navbar
        //     fluid={true}
        //     rounded={true}
        //     className="dark:text-white"
        // >
        //     <Link to="/" className='flex'>
        //         <img className="mr-3 h-6 sm:h-9"
        //             src={logo} alt="" style={{ width: '100px' }} />

        //         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-blue-800">
        //             Learning Bangladesh
        //         </span>
        //     </Link>
        //     <div className="flex md:order-2">
        //         <Dropdown
        //             arrowIcon={false}
        //             inline={true}
        //             label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
        //         >
        //             <Dropdown.Header>
        //                 <span className="block text-sm">
        //                     Bonnie Green
        //                 </span>
        //                 <span className="block truncate text-sm font-medium">
        //                     name@flowbite.com
        //                 </span>
        //             </Dropdown.Header>
        //             <Dropdown.Item>
        //                 Dashboard
        //             </Dropdown.Item>
        //             <Dropdown.Item>
        //                 Settings
        //             </Dropdown.Item>
        //             <Dropdown.Item>
        //                 Earnings
        //             </Dropdown.Item>
        //             <Dropdown.Divider />
        //             <Dropdown.Item>
        //                 Sign out
        //             </Dropdown.Item>
        //         </Dropdown>
        //         <Navbar.Toggle />
        //     </div>
        //     <Navbar.Collapse>
        //         <Link
        //             to="/"
        //             active={true}
        //         >
        //             Home
        //         </Link>
        //         <Link
        //             to="/courses"
        //         >
        //             Courses
        //         </Link>
        //         <Link
        //             to="/faq"
        //         >
        //             FAQ
        //         </Link>
        //         <Link
        //             to="/blog"
        //         >
        //             Blog
        //         </Link>




        //     </Navbar.Collapse>
        //     <Flowbite>
        //         <DarkThemeToggle />
        //     </Flowbite>


        // </Navbar>

        <header className=" body-font ">
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