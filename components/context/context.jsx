import React, { createContext, useState } from 'react';
const context = createContext()
const Context = ({children}) => {
    
    const [loading,setLoading] = useState(false)
    return (
        <context.Provider value={{loading,setLoading}}>
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
