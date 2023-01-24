import React, { createContext, useState } from 'react';
const context = createContext()
const Context = ({children}) => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState({active:false,message:'success!',status:200})
    const [modal,setModal] = useState(false)
    const [id,setId] = useState(0)
    const [path,setPath] = useState('/news')
    const [asyncf,setAsync] = useState(false)
    const [file,setFile] = useState({})
    const [body,setBody] = useState({})

    const states = {
        loading,setLoading,
        data,setData,
        modal,setModal,
        message,setMessage,
        id,setId,
        path,setPath,
        asyncf,setAsync,
        file,setFile,
        body,setBody,
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
