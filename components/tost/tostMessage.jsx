import React, { memo, useEffect } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { context } from '../context/context';
const TostMessage = () => {

    const { message,setMessage } = useContext(context)

   useEffect(() =>{
    if (message.active) {

        if (message.status === 200) {
             toast.success(message.message) 
        }

        if (message.status === 404) {
             toast.error(message.message)
        }

        if(message.status === 300){
            toast.warning(message.message)
        }

    }
   },[message.active])

}

export default memo(TostMessage);
