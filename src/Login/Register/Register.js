import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail, providerLogin, setLoading } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    // const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();
    // const location = useLocation();

    const from = '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                // email verification
                handleEmailVerification()
                toast.success('Please verify your email address first.')

                // setLoading(true);
                navigate(from, { replace: true });

                // if (user?.emailVerified) {
                //     navigate(from, { replace: true });
                // }

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));

    }

    // email verification
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }


    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }




    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user?.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
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
                // email verification
                if (user?.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    handleEmailVerification()
                    toast.success('Please verify your email address.')
                }

            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-3/5 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="Enter Your Full Name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photoURL"
                        type="text"
                        placeholder="Enter Your Photo URL"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your Email"
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
                            value="Your Password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        required={true}
                    />
                </div>
                <p>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>

                <Button type="submit">
                    Submit
                </Button>
                <p className="text-red-500 d-block my-2">
                    {error}
                </p>
            </form>
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

export default Register;