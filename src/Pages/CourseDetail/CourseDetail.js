import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar, AiOutlineDownload } from 'react-icons/ai';
import { Button } from 'flowbite-react';
import ReactToPrint from 'react-to-print';



const CourseDetail = () => {

    const ref = useRef();

    const course = useLoaderData();
    console.log(course)
    const { id, name, price, img, rating, description, duration } = course;

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-4 ">

                        <div className='flex justify-between items-center w-2/4 mx-auto'>
                            <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-blue-900">Welcome to {name} course</h1>
                            <ReactToPrint
                                trigger={() => <Button
                                    outline={true}
                                    gradientDuoTone="purpleToBlue"
                                >
                                    <AiOutlineDownload className='text-xl'></AiOutlineDownload>
                                </Button>}
                                content={() => ref.current}
                            ></ReactToPrint>
                        </div>
                        <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />

                    </div>

                </div>
            </section>

            <div ref={ref} className="container px-5 pt-12  mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                        <div className=' flex justify-between items-center'>
                            <h1 className="text-blue-900 text-xl title-font font-medium mb-1 ">{name}</h1>

                        </div>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Course Duration: {duration}</h2>
                        <div className="flex mb-4">
                            <span className="flex items-center">

                                <AiFillStar className='text-orange-500'></AiFillStar>

                                <span className="text-gray-600 ml-3">{rating.number}</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-red-600">
                                ${price}
                            </span>
                        </div>
                        <p className="leading-relaxed">{description}</p>




                    </div>
                </div>
            </div>
            <p className='mb-4 mt-4 text-center flex w-2/4 mx-auto'>
                <Link
                    to={`/checkout/${id}`}
                    className=" text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full text-center  ">Buy This Course</Link>
            </p>
        </section>
    );
};

export default CourseDetail;