import React from 'react';
import logo from '../../../assets/logo.png';
import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (

        <Navbar
            fluid={true}
            rounded={true}
            className="dark:text-white"
        >
            <Link to="/" className='flex'>
                <img className="mr-3 h-6 sm:h-9"
                    src={logo} alt="" style={{ width: '100px' }} />

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-blue-800">
                    Learning Bangladesh
                </span>
            </Link>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link
                    to="/"
                    active={true}
                >
                    Home
                </Link>
                <Link
                    to="/courses"
                >
                    Courses
                </Link>
                <Link
                    to="/faq"
                >
                    FAQ
                </Link>
                <Link
                    to="/blog"
                >
                    Blog
                </Link>




            </Navbar.Collapse>
            <Flowbite>
                <DarkThemeToggle />
            </Flowbite>


        </Navbar>





    );
};

export default Header;