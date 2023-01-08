import React from 'react';
import Image from 'next/image';
import img from './../../public/assets/images/chemical.png'
const Chemical = () => {
    return (
        <div className='w-full flex items-center justify-around my-10 flex-wrap'>
        <div className='w-96 shadow-lg'>
            <Image className='w-full rounded-lg' src={img} alt='img' />
        </div>
        <div className='lg:w-6/12 shadow-md p-5 bg-white mt-10 h-auto sm:w-96'>
        <p className='w-full text-xl text-grenn'>
        " Chemical technology. Control and management" jurnali yònalishlari:
        </p>
        <p>
        1.Chemical technology
        </p>
        <p>
        2.Control of technological parameters
        </p>
        <p>
        3.Management of technological processes
        </p>
        <p>
        4.Information technology. Information security
        </p>
        <p>
        1-yilda 6 marta nashr etiladi, maqola ingliz,rus,òzbek tilida chop etiladi
        </p>
        <p>
        6. Mechanical engineering
        </p>
       
        </div>
    </div>
    );
}

export default Chemical;
