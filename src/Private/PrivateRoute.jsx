import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
 
    let location = useLocation();
    // console.log(location);

    if(loading) {
        return <p>Loading</p>
    }

    if(user) {
        return children
    }

    return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;