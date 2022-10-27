import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button, Label, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();


    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                // navigate('/');

                setLoading(true);
                navigate(from, { replace: true });

                // email verification
                // if (user?.emailVerified) {
                //     navigate(from, { replace: true });
                // }

                // else {
                //     toast.error('Your email is not verified. Please verify your email address.')
                // }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(true);
                navigate(from, { replace: true });


                // if (user?.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     toast.error('Your email is not verified. Please verify your email address.')
                // }

            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(true);
                navigate(from, { replace: true });

                // email verification
                // if (user?.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     handleEmailVerification()
                //     toast.success('Please verify your email address.')
                // }

            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }

    // email verification
    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-3/5 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="name@mail.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        required={true}
                    />
                </div>
                <p>Don't have an account? <Link to='/register' className='text-blue-600'>Register</Link></p>

                <Button type="submit">
                    Submit
                </Button>
            </form>
            <p className='text-center my-2 text-red-500'>{error}</p>

            <p className='text-center my-4'>Or try</p>
            <div className='flex flex-col justify-center items-center  mt-4'>
                <p>
                    <Button onClick={handleGoogleSignIn} className='mb-2 ' variant="outline-primary"
                        outline={true}
                        gradientDuoTone="pinkToOrange"
                    ><FaGoogle className='mr-2 '></FaGoogle> Log In With Google</Button>
                </p>
                <Button onClick={handleGithubSignIn} className='mb-2 ' variant="outline-primary"
                    outline={true}
                    gradientDuoTone="purpleToBlue"
                ><FaGithub className='mr-2 '></FaGithub> Log In With Github</Button>
            </div>
        </div>
    );
};

export default Login;