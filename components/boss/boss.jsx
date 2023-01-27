import Image from 'next/image';
import React from 'react';

const Boss = ({image,name,urven,time,phone,gamil,wimg1, wname1,wurvern1,wtel1,wgmail1 ,worker2}) => {
    return (
        <div 
        style={{width:"550px"}}
        className='flex flex-col items-center bg-white shadow-md p-2'
        >
           <div className='flex w-full'>
           <Image className=' w-28 h-28 rounded-md' src={image} alt='img' />
           <div className='w-96 text-start ml-5 border-l-2 border-oqroq pl-2'>
             <p className='text-grenn'>{name}</p>
             <p className='text-grenn'><span className='text-md text-blue'>Lavozimi: </span>{urven}</p>
             <p className='text-grenn'><span className='text-md text-blue'>Qabul vaqti: </span>{time}</p>
             <p className='text-grenn'><span className='text-md text-blue'>Telefon: </span>{phone}</p>
             <p className='text-grenn'><span className='text-md text-blue'>E-Mail: </span>{gamil}</p>
           </div>
           </div>
           <div className='flex w-full border-t-2 border-oqroq'>
           <Image className=' w-28 h-28 rounded-md' src={wimg1} alt='img' />
           <div className='w-96 text-start ml-5 border-l-2 border-oqroq pl-2'>
           <p className='text-grenn'>{wname1}</p>
             <p className='text-grenn'><span className='text-md text-blue'>Lavozimi: </span>{wurvern1}</p>
             <p className='text-grenn'><span className='text-md text-blue'>Telefon: </span>{wtel1}</p>
             <p className='text-grenn'><span className='text-md text-blue'>E-Mail: </span>{wgmail1}</p>
           </div>
           </div>
         
        </div>
    );
}

export default Boss;
