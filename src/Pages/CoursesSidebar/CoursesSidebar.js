import { Sidebar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

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
                <Sidebar.Items className='text-left'>
                    <Sidebar.ItemGroup className='text-left'>


                        {
                            categories.map(category => {
                                return (
                                    <Sidebar.Item
                                        key={category.id}
                                        href="#"
                                        className='bg-gray-50 text-left'
                                    >
                                        {category.name}
                                    </Sidebar.Item>
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