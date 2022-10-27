import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 ">
                        <img className=' mx-auto mb-4'
                            src={user?.photoURL} alt="" style={{ width: '200px' }} />
                        <h2 className="text-sm text-green-500 tracking-widest font-medium title-font mb-1">Welcome to profile {user?.displayName}</h2>
                        <h2 className="text-sm text-blue-900 tracking-widest font-medium title-font mb-1">Email: {user?.email}</h2>
                        <hr className='border-b-2 border-blue-900 w-1/5 mx-auto mt-2' />
                    </div>



                </div>
            </section>
        </div>
    );
};

export default Profile;