import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {

    const course = useLoaderData();
    console.log(course)
    const { name, price, img, rating, description } = course;

    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={img} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{rating.badge}</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>

                                <span class="text-gray-600 ml-3">{rating.number}</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                ${price}
                            </span>
                        </div>
                        <p class="leading-relaxed">{description}</p>


                        <button class=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full mt-2 text-center">Buy This Course</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetail;