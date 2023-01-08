import Image from 'next/image';
import React from 'react';

const Boss = ({image ,text}) => {
    console.log(text);
    return (
        <div 
        style={{width:"500px"}}
        className='flex justify-between items-center'
        >
            <Image className='w-36 h-40 rounded-md' src={image} alt='img' />
            <p className='text-start text-blue w-64'>{text}</p>
        </div>
    );
}

export default Boss;
