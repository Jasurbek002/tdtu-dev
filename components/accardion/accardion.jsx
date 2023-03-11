import Image from 'next/image';
import React, { useState } from 'react';
import down from './../../public/assets/svg/down.svg'

const Accardion = ({name,desc}) => {

    const [btn,setBtn] = useState(false)
    return (
        <div className='w-full mb-2  border-2 border-grenn ease-in-out duration-300'>
            <div className='w-full rounded-xl flex h-16  justify-between px-2 items-center'>
                <p className='text-grenn text-xl'>
                	{name}
                </p>
                <button onClick={() =>setBtn(x => !x)}>
                    <Image
                     style={{
                        transform: `rotate(${btn ? 180 : 0}deg)`,
                        transition: 'transform 550ms',
                        
                    }}
                      className='w-7 h-7' 
                      src={down} alt='icon' />
                </button>
                
            </div>
                 <p 
                 style={{
                    display: btn ? 'block' : 'none',
                    transition: 'transform 550ms',
                    minHeight:'60px'
                }}
                  className='w-full px-10 bg-white text-grenn'>
                  {desc}
                </p>
        </div>
    );
}

export default Accardion;
