import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();

    return (
        // <div className='container '>
        //     <h2>Courses Page: {courses.length}</h2>
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto'>
        //         {
        //             courses.map(course => <CourseCard
        //                 key={course.id}
        //                 course={course}
        //             ></CourseCard>)
        //         }
        //     </div>
        // </div>
        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500">Check Out Our Available Courses</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            courses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;