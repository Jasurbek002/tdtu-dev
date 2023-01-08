import Image from 'next/image';
import React from 'react';

import img from './../../public/assets/images/technical.jpg'

const Technical = () => {
    return (
        <div className='w-full flex items-center justify-around my-10 flex-wrap'>
            <div className='w-96 shadow-lg'>
                <Image className='w-full rounded-lg' src={img} alt='img' />
            </div>
            <div className='lg:w-6/12 shadow-md p-5 bg-white mt-10 h-auto sm:w-96'>
            <p className='w-full text-xl text-grenn'>
                "Technical science and innovation" jurnali yònalishlari:
            </p>
            <p>
            1. Chemistry and chemical technology
            </p>
            <p>
            2.Biomedical engineering and bioengineering
            </p>
            <p>
            3. Civil and environmental engineering
            </p>
            <p>
            4.Geological engineering
            </p>
            <p>
            5. Electrical and computing engineering
            </p>
            <p>
            6. Mechanical engineering
            </p>
            <p>
            1-yilda 4-marta nashr etiladi, maqolalar ingliz tilida chop etiladi!
            </p>
            </div>
        </div>
    );
}

export default Technical;
