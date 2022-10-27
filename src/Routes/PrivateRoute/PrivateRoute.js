import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex flex-col gap-2">
                <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" />
                </div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/register" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;