import React from 'react';

const Blog = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">Javascript Cors</span>
                            <span className="mt-1 text-gray-500 text-sm">08 October 2022</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">What is cors?</h2>
                            <p className="leading-relaxed">Cors stands for Cross-origin resource sharing which is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access. It enables JavaScripts running in browsers to connect to APIs and other web resources like fonts, and stylesheets from multiple different providers.</p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">Firebase | Authentication</span>
                            <span className="mt-1 text-gray-500 text-sm">25 january 2021</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">Why are you using firebase? What other options do you have to implement authentication?</h2>
                            <p className="leading-relaxed">Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Beside this it also allows us to deploy web applications. Furthemore it helps us to do the authentication for the application. <br /> <br />
                                Beside firebase authentication we can use Auth0, Mongodb, JSON Web Token,Okta, passport etc.
                            </p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">Private Route</span>
                            <span className="text-sm text-gray-500">12 June 2019</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">How does the private route work?</h2>
                            <p className="leading-relaxed">React Router is a standard library for routing in React. It enables the navigation  of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /> <br />
                                Reacteact private route  renders child components if the user is logged in. Otherwise, logged in the user is redirected to the /login page with the return url passed in the location state property.
                            </p>

                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-purple-500">Node.js</span>
                            <span className="text-sm text-gray-500">12 October 2022</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-sky-700 title-font mb-2">What is Node? How does Node work?</h2>
                            <p className="leading-relaxed">Node.js is a  server side javascript runtime environment which runs on the V8 engine and executes javascript code on the server. Its cross platform and open source. <br /> <br />
                                Node.js is an interpreter or  the runtime environment for javascript. Node.js uses javascript which basically runs on the server side with the help of V8 engine. Node.js is a non-blocking, event driven I/O model.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;