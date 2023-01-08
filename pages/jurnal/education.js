import Image from 'next/image';
import React from 'react';
import img from './../../public/assets/images/tailm.jpg'
const Education = () => {
    return (
        <div className='w-full flex items-center justify-around my-10 flex-wrap'>
        <div className='w-96 shadow-lg'>
            <Image className='w-full rounded-lg' src={img} alt='img' />
        </div>
        <div className='lg:w-6/12 shadow-md p-5 bg-white mt-10 h-auto sm:w-96'>
        <p className='w-full text-xl text-grenn'>
        "Ta'lim tizimida ijtimoiy-gumanitar fanlar" jurnali yònalishlari:
        </p>
        <p>
        1. Pedagogika va psixologiya
        </p>
        <p>
        2. Iqtisod
        </p>
        <p>
        1-yilda 6 marta nashr etiladi, maqolalar ingliz,rus,òzbek tilida chop etiladi
        </p>
        
        </div>
    </div>
    );
}

export default Education;
