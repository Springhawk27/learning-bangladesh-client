import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';



const CourseDetail = () => {

    const course = useLoaderData();
    console.log(course)
    const { name, price, img, rating, description, duration } = course;

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Course Duration: {duration}</h2>
                        <div className="flex mb-4">
                            <span className="flex items-center">

                                <AiFillStar className='text-orange-500'></AiFillStar>

                                <span className="text-gray-600 ml-3">{rating.number}</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                ${price}
                            </span>
                        </div>
                        <p className="leading-relaxed">{description}</p>


                        <button className=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full mt-2 text-center">Buy This Course</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetail;