import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Blog from "../../Others/Blog/Blog";
import Faq from "../../Others/FAQ/Faq";
import NotFound from "../../Others/NotFound/NotFound";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://learning-bangladesh-server.vercel.app/courses'),

            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-bangladesh-server.vercel.app/courses'),
            },

            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://learning-bangladesh-server.vercel.app/category/${params.id}`)

            },
            {
                path: '/course/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://learning-bangladesh-server.vercel.app/course/${params.id}`)

            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-bangladesh-server.vercel.app/checkout/${params.id}`)

            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },


        ],


    },
]);