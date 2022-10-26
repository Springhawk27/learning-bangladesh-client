import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import CoursesSidebar from "../../Pages/CoursesSidebar/CoursesSidebar";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [

            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses'),
            },

            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/courses/:id',
                // element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

            },


        ],


    },
]);