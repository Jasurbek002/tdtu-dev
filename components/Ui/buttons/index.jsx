import React from 'react';
const Index = ({...props}) => {
    return (
       <div className='w-24 h-10'>
         <button {...props}> more
        <span></span>
      </button>
       </div>
    );
}

export default Index;
