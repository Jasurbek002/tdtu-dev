import React, { createContext, useState } from 'react';
const context = createContext()
const Context = ({children}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [modal,setModal] = useState(false)
    return (
        <context.Provider value={
            {loading,
            setLoading,
            data,
            setData,
            modal,
            setModal,
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
