import React from 'react';
import Link from 'next/link';
import { items4 } from '../../components/data/items';
import Boss from '../../components/boss/boss';
import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'
import qobul from './../../public/assets/images/qobul.jpg'
import download from './../../public/assets/svg/download.svg'
const Talaba = () => {
    return (
      <div className='flex flex-wrap w-full my-20 justify-around'>
      <h2 className='text-3xl w-full text-center  ml-10 my-5'>{items4[0]}</h2>
    <div className='w-96'>
    {
      items4?.map((el,index) =>{
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
    <Boss
     image={qobul}
      text={"Muxiddinov Qobiljon Akmal o'g'li Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish boʼlimi boshlig'i"}
       />
  </div>
    );
}

export default Talaba;
