import React from 'react';
import Link from 'next/link';
import { items2 } from '../../components/data/items';
// import Boss from '../../components/boss/boss';
import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'
// import adham from './../../public/assets/images/adhamjon.png'
import download from './../../public/assets/svg/download.svg'
const Tadqiqot = () => {
    return (
        <div className='flex flex-wrap w-full my-20 justify-around'>
            <h2 className='text-3xl w-full text-center  ml-10 uppercase font-bold text-grenn'>{items2[0]}</h2>
          <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
          {
            items2?.map((el,index) =>{
            if(typeof el ==='object'){
                return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between' href='/'>
                {el.id}. {el.name}
                 <Image className='w-6 h-6 rounded-full ml-5' src={strel} alt='icon'/>
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
            text={"Xalqaro reyting bo'limi boshlig'i Mahkamov Adhamjon"}
             /> */}
        </div>
    );
}

export default Tadqiqot;
