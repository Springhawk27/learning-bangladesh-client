import { Sidebar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesSidebar = () => {
    // const categories = useLoaderData();
    // console.log("categories", categories)


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="sm:w-1/4 w-2/5 border-r-2">
            <Sidebar aria-label="Default sidebar example " className='sticky' style={{ top: "90px", textAlign: "left" }}>
                <Sidebar.Items >
                    <Sidebar.ItemGroup className='text-left'>


                        {
                            categories.map(category => {
                                return (
                                    <p className='bg-gray-50 py-2'
                                        key={category.id}
                                    >
                                        <Link
                                            key={category.id}
                                            to={`/category/${category.id}`}

                                        >
                                            {category.name}
                                        </Link>
                                    </p>
                                )
                            })
                        }



                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default CoursesSidebar;