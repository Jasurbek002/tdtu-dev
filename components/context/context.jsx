import React, { createContext, useState } from 'react';
const context = createContext()
const Context = ({children}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState({active:false,message:'success!',status:200})
    const [modal,setModal] = useState(false)
    const [id,setId] = useState(0)
    return (
        <context.Provider value={
            {loading,
            setLoading,
            data,
            setData,
            modal,
            setModal,
            message,
            setMessage
            }}>
            <context.Consumer>
                {
                 () =>   children
                }
            </context.Consumer>
        </context.Provider>
    );
}
export {context}
export default Context;
