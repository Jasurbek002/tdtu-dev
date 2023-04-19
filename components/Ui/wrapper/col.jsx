import React from 'react';

const Index = ({children}) => {
    return (
        <div className='w-full flex flex-col items-center'>
            {
                children
            }
        </div>
    );
}

export default Index;