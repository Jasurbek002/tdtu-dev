import Image from 'next/image';
import React from 'react';
import download from './../../../public/assets/svg/download.svg'
const Texnik = () => {
    return (
        <div className='w-full flex items-center justify-around flex-wrap py-32'>
            <p className='text-2xl text-grenn w-full text-center'>Ilmiy-texnik kengash </p>
             <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
                kengash nizomi
                <Image className='w-8 ml-2' src={download} alt ='icon' />
             </button>
             <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
                kengash tarkibi
                <Image className='w-8 ml-2' src={download} alt ='icon' />
             </button>
        </div>
    );
}

export default Texnik;
