import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaGithub } from "react-icons/fa";



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
        </div>
    );
};

export default Login;