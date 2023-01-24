import React, { useEffect } from 'react';
import { useContext } from 'react';
import axios from '../components/axios/axios';
import { context } from '../components/context/context';
const GetData = (path) => {
    const {setData,setLoading,setMessage} = useContext(context)
   useEffect(() =>{
    setLoading(true)
       axios.get(path)
       .then((res) =>{
        setMessage({
            active:true,
            message:res.data.message,
            status:res.data.status
        });
        setData(res.data)
       })
       .catch((err) => {
        setMessage({
            active:true,
            message:err.message,
            status:err.status
        })
       })
       .finally(() => setLoading(false))
   },[])
}

export default GetData;
