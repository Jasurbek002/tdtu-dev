import React, { useEffect, useState } from 'react';
import AdminBar from '../../components/admin/admin';
import Login from '../../components/auth/login';

const Admin = () => {
    const [token,setToken] = useState('')
    useEffect(() =>{
      setToken(window.localStorage.getItem('token'))
    },[])
    return (
        <>
         {
           token ? <Login /> : <AdminBar />
        }
        </>
    );
}

export default Admin;
