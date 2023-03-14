import React, { createContext, useState } from 'react';
const context = createContext()
const Context = ({children}) => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [lang,setLang] = useState(false)

    const [message,setMessage] = useState({active:false,message:'success!',status:200})
 
    const states = {
        loading,setLoading,
        data,setData,
        lang,setLang,
        message,setMessage,
    }

    return (
        <context.Provider value={states}>
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
