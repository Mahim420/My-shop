import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;