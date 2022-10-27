import React from 'react';
import faq from '../../assets/faq.jpeg'

const Faq = () => {
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <img
                className=' object-contain'
                src={faq} alt="" />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 ">
                        <h2 className="text-sm text-green-500 tracking-widest font-medium title-font mb-1">You are in the right place. We have your every questions answered</h2>
                        <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />
                        <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />
                        <div className='mb-4'>
                            <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-blue-900">What are the differences between sql and nosql database?</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify border-l-4 border-blue-800 pl-8">SQL stands for structured query language which is actually vertically scalable. SQL is a relational database where it stores the related data in a tabular form. It has predefined schema. SQL data is better for multi-row transactions.
                                On the other hand, NoSQL database is non-relational which is horizontally scalable. NoSQL is unstructured data with dynamic schema. NoSQL is actually better for unstructured data such as JSON.
                            </p>
                            <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />
                        </div>
                        <div className='mb-4'>
                            <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-blue-900">What is Redux and uses?</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify border-l-4 border-blue-800 pl-8">Redux is an application state managing or centralizing a library of Javascript. It is the most commonly used with libraries such as Angular, React. Since redux maintains the state of the application it is basically used to manage the state in a single state tree which becomes handy when the application is too large and has too many states but gets complicated if it’s a simple application and has less states.
                            </p>
                            <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />
                        </div>
                        <div className='mb-4'>
                            <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-blue-900">What is a Temporal Dead Zone?</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify border-l-4 border-blue-800 pl-8">In ES6 let and const was introduced which does not support variable hoisting. This means the declaration of let and const will not  rise to the top of the current execution context. Therefore it will throw a reference error if we try to call it before  initialization. So from the beginning of that block to the initialization of that variable is known as the temporal dead zone for that variable.


                            </p>
                            <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />
                        </div>
                    </div>


                </div>
                <p className='text-center'>We will update this page soon</p>

            </section>
        </div>
    );
};

export default Faq;