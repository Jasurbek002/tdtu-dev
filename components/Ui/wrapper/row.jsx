import React from 'react';

const Index = ({children,styles}) => {
    return (
        <div className={`w-11/12 flex flex-wrap items-center justify-evenly ${styles}`}>
            {
                children
            }
        </div>
    );
}

export default Index;
