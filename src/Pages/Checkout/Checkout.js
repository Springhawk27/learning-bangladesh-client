import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { NavLink, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course)
    const { id, name, price, img, rating, description, duration } = course;

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 ">
                        <h2 className="text-sm text-green-500 tracking-widest font-medium title-font mb-1">Thanks for purchasing this course</h2>
                        <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-blue-900">Course Name: {name}</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify border-l-4 border-blue-800 pl-8">{description}</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-blue-800 border-opacity-60">
                            <h2 className="text-lg sm:text-xl  font-medium title-font ">Course Fee: <span className='text-red-700'>${price}</span></h2>
                            <p className="leading-relaxed text-base ">Rating: <AiFillStar className='text-orange-500 inline'></AiFillStar> {rating.number}</p>
                            <p className="leading-relaxed text-base mb-4 ">Course Duration: <span className='text-blue-600'>{duration}</span></p>

                        </div>

                    </div>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            <NavLink to="/courses" >More Courses</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;