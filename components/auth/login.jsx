import Image from 'next/image';
import React from 'react';
import logo from './../../public/assets/images/LOGO.png'

const Login = () => {
    return (
        <div className='w-full top-0 left-0 bottom-0 fixed flex items-center justify-center bg-white z-50'>
            <div className='w-96 p-5 flex flex-col items-center shadow-4xl rounded-lg border-kokroq border-2'>
                  <Image className='w-28' src={logo} alt='logotip'/>
                  <p className='mt-5 text-xl text-grenn'>TDTU Ilmiy Bo'limi</p>
                  <input className='w-full h-10 text-xl border-grenn border-b-2 outline-none mt-7 px-2' type="text" placeholder='Enter your name....' />
                  <input className='w-full h-10 text-xl border-grenn border-b-2 outline-none mt-7 px-2' type="password" placeholder='Enter your password....'/>
                  <button className='w-24 mt-10 bg-grenn rounded-md text-white p-1 hover:text-grenn  hover:bg-kokroq active:bg-blue'>Login</button>
            </div>
        </div>
    );
}

export default Login;
