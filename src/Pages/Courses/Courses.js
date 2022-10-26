import React from 'react';
import Course from '../Course/Course';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';

const Courses = () => {

    return (

        <div className='flex'>
            <CoursesSidebar></CoursesSidebar>
           <Course></Course>
        </div>


    );
};

export default Courses;