import Image from 'next/image';
import React, { useContext, useEffect, useRef } from 'react';
import  {AiOutlineClose} from 'react-icons/ai'
import { context } from '../context/context';
import downloadIco from './../../public/assets/svg/download.svg'
import axios from './../axios/axios'
import GetData from '../../hooks/getData';
const Slider = () => {
const {data,modal,setModal,path,setPath,setId,setLoading,setMessage} = useContext(context)
    const fileRef = useRef()
   
    const stateHendler = (modal,pathname,thisid) =>{
         setModal(modal);
         setPath(pathname);
         setId(thisid);
    }

    GetData('/banners')
  
    const postData = (pathname) =>{
       useEffect(() =>{
        const formData = new FormData()
        formData.append("banners",fileRef.current.files[0],fileRef.current.files.type)
        setLoading(true)
       axios.post(pathname,{
           body:formData
        })
        .then((res) => setMessage({active:true,message:res.message,status:res.status}))
      .catch((err) => {
        setMessage({active:true,message:err.message,status:err.status})
      })
      .finally(() =>{
        setLoading(false)
      })
       },[pathname])
    }

   
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
            style={{display: modal ? 'block' : 'none'}}
            className='w-96 py-10 px-5 text-center absolute bg-white border-2 border-blue rounded-3xl'>
            <button 
            onClick={() => stateHendler(false,'/',0) }
            className='absolute right-3 top-3'>
                <AiOutlineClose size={20} />
            </button>
                    <p className='text-xl text-blue mb-10'>{
                        path === '/banners/add' ? 'banner add' : 'bannner edit'
                    }</p>
                    <input ref={fileRef} className='w-36 my-10 border-2 h-20 absolute right-28 bottom-1 z-50 opacity-0 cursor-pointer' type="file" />
                    <Image
                    className='w-20 h-20  left-36 rotate-180 ml-auto mr-auto'
                     src={downloadIco}
                      alt= 'download'/>

                      <button 
                      onClick={postData('/banner/post')}
                      className='w-20 h-10 bg-blue text-white mt-5 absolute bottom-2  right-2 rounded-md hover:border-2 border-grenn active:opacity-60'>
                        Add
                      </button>
            </div>
           {
            data.data?.map((el,index) =>{
           return  <div key={index} className='w-60 bg-white shadow-2xl'>
            <img 
            className='w-full h-40'
             src={'http://localhost:5000/'+el.image} 
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
         })
           }
        </div>
    );
}

export default Slider;
