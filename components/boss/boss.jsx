import Image from 'next/image';
import React from 'react';

const Boss = ({image,name,urven,time,phone,gamil,wimg1, wname1,wurvern1,wtel1,wgmail1 ,wimg2,wname2,wurvern2,wtel2,wgmail2}) => {
    return (
        <div 
        style={{width:"550px"}}
        className='flex flex-col items-center p-2'
        >
           <div className='flex w-full mb-5 bg-kokroq rounded-md border-4 border-kokroq hover:border-grenn transform ease-in duration-300'>
           <Image className=' w-32 h-32 mt-2 ml-1 rounded-md' src={image} alt='img' />
           <div className='w-96 text-start ml-5 border-l-2 border-oqroq pl-2'>
             <p className='text-grenn font-bold  mb-1'>{name}</p>
             <p className='text-grenn  mb-1'><span className='text-md text-blue font-bold'>Lavozimi: </span>{urven}</p>
             <p className='text-grenn  mb-1'><span className='text-md text-blue font-bold'>Qabul vaqti: </span>{time}</p>
             <p className='text-grenn  mb-1'><span className='text-md text-blue font-bold'>Telefon: </span>{phone}</p>
             <p className='text-grenn  mb-1'><span className='text-md text-blue font-bold'>E-Mail: </span>{gamil}</p>
           </div>
           </div>
           <div className='flex w-full  mb-5  bg-kokroq rounded-md border-4 border-kokroq hover:border-grenn transform ease-in duration-300'>
           <Image className='w-32 h-32 mt-2 ml-1 rounded-md' src={wimg1} alt='img' />
           <div className='w-96 text-start ml-5 border-l-2 border-oqroq pl-2'>
           <p className='text-grenn font-bold  mb-1'>{wname1}</p>
             <p className='text-grenn  mb-1'><span className='text-md font-bold text-blue'>Lavozimi: </span>{wurvern1}</p>
             <p className='text-grenn  mb-1'><span className='text-md font-bold text-blue'>Telefon: </span>{wtel1}</p>
             <p className='text-grenn  mb-1'><span className='text-md font-bold text-blue'>E-Mail: </span>{wgmail1}</p>
           </div>
           </div>
           <div className='flex w-full bg-kokroq rounded-md border-4 border-kokroq hover:border-grenn transform ease-in duration-300 '>
           <Image className='w-32 h-32 mt-2 ml-1 rounded-md' src={wimg2} alt='img' />
           <div className='w-96 text-start ml-5 border-l-2 border-oqroq pl-2'>
           <p className='text-grenn font-bold  mb-1'>{wname2}</p>
             <p className='text-grenn mb-1'><span className='text-md font-bold text-blue'>Lavozimi: </span>{wurvern2}</p>
             <p className='text-grenn mb-1'><span className='text-md font-bold text-blue'>Telefon: </span>{wtel2}</p>
             <p className='text-grenn mb-1'><span className='text-md font-bold text-blue'>E-Mail: </span>{wgmail2}</p>
           </div>
           </div>
        </div>
    );
}

export default Boss;
