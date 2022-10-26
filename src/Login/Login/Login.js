import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';



const Login = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log In With Google</button>

            <form className="flex flex-col gap-4 w-3/5 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <p>Don't have an account? <Link to='/register' className='text-blue-600'>Register</Link></p>

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Login;