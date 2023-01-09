import React from 'react';
import Link from 'next/link';
import { items6 } from '../../components/data/items';

import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'

const Jurnal = () => {
    return (
      <div className='flex flex-wrap w-full my-20 justify-around'>
      <h2 className='text-3xl w-full text-center  ml-10 my-5'>{items6[0]}</h2>
    <div className='w-96'>
    {
      items6?.map((el,index) =>{
      if(typeof el ==='object'){
          return <Link key={index} className='bg-white shadow-lg text-blue  hover:scale-105 w-full p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
          {el.id}. {el.name}
           <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
       </Link>
      }
      })
     } 
    </div>
  </div>
    );
}

export default Jurnal;
