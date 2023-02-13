import React from 'react';
import Link from 'next/link';
import { items6 } from '../../components/data/items';

import Image from 'next/image';

const Jurnal = () => {
    return (
      <div className='flex flex-wrap w-full my-10 justify-around'>
      <h2 className='text-3xl w-full text-center  ml-10 uppercase font-bold text-grenn'>{items6[0]}</h2>
    <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
    {
      items6?.map((el,index) =>{
      if(typeof el ==='object'){
          return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between' href={`${el.path}`}>
           <Image className='w-48 h-80 ' src={el.img} alt='icon'/>
       </Link>
      }
      })
     } 
    </div>
  </div>
    );
}

export default Jurnal;
