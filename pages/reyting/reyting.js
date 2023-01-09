import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items3 } from '../../components/data/items';

// import Boss from '../../components/boss/boss';

import strel from './../../public/assets/images/strel.png'
// import adham from './../../public/assets/images/adhamjon.png'
import download from './../../public/assets/svg/download.svg'

const Reyting = () => {
    return (
        <div className='flex flex-wrap w-full my-20 justify-around'>
            <h2 className='text-3xl w-full text-center  ml-10 my-5'>{items3[0]}</h2>
          <div className='w-96'>
          {
            items3?.map((el,index) =>{
            if(typeof el ==='object'){
                return <Link key={index} className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                {el.id}. {el.name}
                 <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
             </Link>
            }
            })
           } 
           <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
            Bo'lim nizomi
            <Image className='w-8 ml-2' src={download} alt='icon' />
           </button>
          </div>
          {/* <Boss
           image={adham}
            text={"Adham Mahkamov Rustamovich Islom Karimov nomidagi Toshkent davlat texnika universiteti Xalqaro reyting bo'limi boshlig'i"}
             /> */}
        </div>
    );
}

export default Reyting;
