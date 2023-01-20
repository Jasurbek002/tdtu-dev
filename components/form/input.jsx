import React from 'react';

const Input = ({active,type,holder,status}) => {
    return (
        <>
            <input 

            style={{
                border:`2px solid ${status}`,
                display: active ? 'block': 'none'   
            }}
            className='w-full h-10 outline-none rounded-md px-2 my-2'
            type={type} 
            placeholder={holder} 
            required
            // ref={valueRef}
            />
        </>
    );
}

export default Input;
