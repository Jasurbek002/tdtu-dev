import React from 'react';
import { useContext } from 'react';
import { context } from '../context/context';
import Input from '../form/input';
import {AiOutlineClose} from 'react-icons/ai'
import uploadIcon from './../../public/assets/svg/download.svg'
import Image from 'next/image';
import zIndex from '@mui/material/styles/zIndex';
const Modal = ({inp1,inp2,inp3,inp4,text5,text6,text7,text8,file,pathname}) => {
    const {modal,setModal} = useContext(context)
    return (
        <div 
        onClick={(e) => e.stopPropagation()}
        style={{
            translate:modal ? '0px' : '450px',
            height:"600px",
            overflowY:'scroll',
            transition:'1s ease-in-out',
        }}
        className='flex w-96 flex-col items-center py-10 absolute shadow-2xl top-0 right-0 px-2 bg-white z-50  transform ease-in-out duration-500'>
            <button 
            onClick={() => setModal(false)}
            className='absolute right-3 top-3 z-50'>
                <AiOutlineClose size={30} />
            </button>
            <p className='text-xl text-grey'>
               {pathname === '/news/add' ? 'add item' : 'edit item'}
                </p>
            <Input 
            active={inp1}
            type={'text'} 
            holder={'nameuz...'} 
            status={'blue'} />
            <Input
            active={inp2}
             type={'text'} 
             holder={'nameen...'} 
             status={'blue'} />
            <Input 
            active={inp3}
            type={'text'} 
            holder={'textuz...'} 
            status={'blue'} />
            <Input 
            active={inp4}
            type={'text'} 
            holder={'texten...'} 
            status={'blue'} />

           <textarea 
           placeholder='textuz'
           style={{
            display: text5 ? 'block' : 'none',
           }}
           className='w-full outline-none border-2 p-1 rounded-md my-5'
           name="textuz" 
           id="text"
            cols="50" 
            rows="40">
           </textarea>
           <textarea 
           style={{
            display: text6 ? 'block' : 'none'
           }}
           className='w-full outline-none border-2 p-1 rounded-md my-5'
           name="textuz" 
           id="text"
            cols="30" 
            rows="40">
           </textarea>
           <textarea 
           style={{
            display: text7 ? 'block' : 'none'
           }}
           className='w-full outline-none border-2 p-1 rounded-md my-5'
           name="textuz" 
           id="text"
            cols="30" 
            rows="40">
           </textarea>
           <textarea 
           style={{
            display: text8 ? 'block' : 'none'
           }}
           className='w-full outline-none border-2 p-1 rounded-md my-5'
           name="textuz" 
           id="text"
            cols="30" 
            rows="40">
           </textarea>
          <div 
          style={{display:file ? 'flex' : 'none'}}
          className='w-36 h-24 relative  items-center justify-center '>
          <Image 
            className='w-14 h-14 rotate-180  ' src={uploadIcon}  alt='icon' />
            <input className='w-full h-full border-2 absolute opacity-0 cursor-pointer' type="file" />
          </div>
            <button 
            className='w-20 h-10 bg-blue text-white right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'
            >
               {pathname === '/news/add' ? 'add' : 'edit' }
            </button>
        </div>
    );
}

export default Modal;
