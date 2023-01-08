import React from 'react';
import Image from 'next/image';
import img from './../../public/assets/images/energy.jpg'
const Eneegy = () => {
    return (
        <div className='w-full flex items-center justify-around my-10 flex-wrap'>
            <div className='w-96 shadow-lg'>
                <Image className='w-full rounded-lg' src={img} alt='img' />
            </div>
            <div className='lg:w-6/12 shadow-md p-5 bg-white mt-10 h-auto sm:w-96'>
            <p className='w-full text-xl text-grenn'>
            "Energiya resurs va tejash muammolari" jurnali yònalishlari:
            </p>
            <p>
            1.Elektr energetikasi
            </p>
            <p>
            2.Issiqlik va atom energetikasi
            </p>
            <p>
            3.Energiya samaradorligi va energiyani tejash
            </p>
            <p>
            4.Muqobil va qayta tiklanuvchi energiya manbalari
            </p>
            <p>
            5.Neft va gaz
            </p>
            <p>
            6.Yoqilģi resurslari
            </p>
            <p>
            7.Ekologiya va suv energetikasi
            </p>
            <p>
            1-yilda 4-marta chiqadi, maqolalar rus, ingliz, òzbek tilida chop etiladi
            </p>
           
            </div>
        </div>
    );
}

export default Eneegy;
