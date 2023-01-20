import React, { useContext } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { context } from '../context/context';
const Bigmodal = () => {
    const {modal,setModal} = useContext(context)
    return (    
        <div 
        style={{
            height:'600px',
            translate: modal ? '0%' : '100%',
            overflowY:'auto'
        }}
        className='w-full border-l-2 border-oqroq flex duration-300 ease-in-out items-center justify-around bg-white absolute top-0'>
             <button 
            onClick={() => setModal(false)}
            className='absolute right-3 top-3 z-50'>
                <AiOutlineClose size={30} />
            </button>
           <form 
           className='w-full flex flex-col items-center justify-around'
           action="post">
            <textarea 
            placeholder='uz'
             style={{
                border:'2px solid black',
                borderRadius:'5px',
                padding:'5px 10px',
                marginBottom:'20px'
             }}
            name="nameuz" id="uz" cols="50" rows="5">

            </textarea> 
            
            <textarea 
            placeholder='en'
             style={{
                border:'2px solid black',
                borderRadius:'5px',
                padding:'5px 10px',
                marginBottom:'20px'
             }}
            name="nameen" id="en" cols="50" rows="5">

            </textarea>

           </form>
           <form 
           className='w-96 mr-20'
           action="post">
            <input
            placeholder='author...'
            className='w-full border-2 border-oqroq rounded-md h-10 px-2 mb-5'
            type="text" />
             <input
             placeholder='dedline...'
            className='w-full border-2 border-oqroq rounded-md h-10 px-2 mb-5'
            type="text" />
           </form>
           <button className='w-20 h-10 bottom-10 border-2 bg-grenn text-white rounded-md hover:opacity-80 active:border-yellow right-10 absolute'>
            submit
           </button>
        </div>
    );
}

export default Bigmodal;
