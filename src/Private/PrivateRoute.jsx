import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Shared/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
 

    if(loading) {
        return <Loading></Loading>
    }

    if(user) {
        return children
    }

    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;