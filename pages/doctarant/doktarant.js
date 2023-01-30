import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// import Boss from '../../components/boss/boss.jsx';
import {items1 } from '../../components/data/items.js'
import strel from './../../public/assets/images/strel.png'
// import adham from './../../public/assets/images/adhamjon.png'
import download from './../../public/assets/svg/download.svg'
const Doktarant = () => {
    return (
        <div className='flex flex-wrap w-full my-20 justify-around'>
            <h2 className='text-3xl w-11/12 text-center  ml-10 uppercase font-bold text-grenn'>{items1[0]}</h2>
          <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
          {
            items1?.map((el,index) =>{
            if(typeof el ==='object'){
                return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between' href={`${el.path}`}>
                {el.id}. {el.name}
                 <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
             </Link>
            }
            })
           } 
           
          </div>
          <div className='w-2/4 p-5  shadow-2xl'>
        <p className='text-xl font-bold text-grenn'>
        Ilmiy–tadqiqotlar innovatsiyalar va pedagogik kadrlarni
         tayyorlash bo’limi quydagi vazifalarni bajaradi:
        </p>
        <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
          Bo'lim nizomi
          <Image className='w-8 ml-2' src={download} alt='icon' />
        </button>
      </div>
        </div>
    );
}

export default Doktarant;
