import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Course = () => {
    const courses = useLoaderData();

    return (
        <div className='sm:w-3/4 w-3/5'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500">{courses.length} course(s) found in this category</h1>
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

export default Course;