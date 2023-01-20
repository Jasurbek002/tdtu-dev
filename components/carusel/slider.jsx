import Image from 'next/image';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { context } from '../context/context';
import  {AiOutlineClose} from 'react-icons/ai'

import downloadIco from './../../public/assets/svg/download.svg'
const Slider = () => {
    const [data,setData] = useState([])
    const [close,setClose] = useState(false)
    const [id,setId] = useState(0)
    const [path,setPath] = useState('banners')
    
    useEffect(() =>{
        fetch(`localhost:5000/${path}`)
        .then(res => res.json())
        .then(res =>setData(res.data))
        .catch(err => console.error(err))
    })

    const stateHendler = (modal,pathname,thisid) =>{
         setClose(modal);
         setPath(pathname);
         setId(thisid)
    }
    // const {data} = useContext(context)
    return (
        <div
         style={{'overflowY':"auto",height:'600px'}}
         className='w-full flex items-center justify-evenly flex-wrap p-10 gap-5 relative'>
           
            <button 
            onClick={() => stateHendler(true,'/banners/add',0) }
            className='w-20 h-10 bg-blue text-white absolute right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'>
                Add
            </button>

            <div 
            style={{display: close ? 'block' : 'none'}}
            className='w-96 py-10 px-5 text-center absolute bg-white border-2 border-blue rounded-3xl'>
            <button 
            onClick={() => setClose(false) }
            className='absolute right-3 top-3'>
                <AiOutlineClose size={20} />
            </button>
                    <p className='text-xl text-blue mb-10'>{
                        path === '/banners/add' ? 'banner add' : 'bannner edit'
                    }</p>
                    <input className='w-36 my-10 border-2 h-20 absolute right-28 bottom-1 z-50 opacity-0 cursor-pointer' type="file" />
                    <Image
                    className='w-20 h-20  left-36 rotate-180 ml-auto mr-auto'
                     src={downloadIco}
                      alt= 'download'/>
            </div>
            <div className='w-60 bg-white shadow-2xl'>
               <img 
               className='w-full h-40'
                src={'https://picsum.photos/200/300'} 
                alt='images' />
                <div className='w-full flex items-center justify-around py-1'>
                    <button
                    onClick={(e) => stateHendler(true,'/banner/put/',e.target.value)}
                    value={0}
                     className='w-20 h-10 rounded-lg bg-[#FFD739] hover:text-white active:opacity-50'>
                        edit
                    </button>
                    <button
                    onClick={(e) => stateHendler(false,'/banners/remove/',e.target.value)}
                    value={0}
                     className='w-20 h-10 rounded-lg bg-red hover:text-white active:opacity-50'>
                        delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
