import Image from "next/image";
import stdent from '../../public/assets/images/student.svg';
import stdents from '../../public/assets/images/students.svg';
import teacher from '../../public/assets/images/teachers.svg';
import partner from '../../public/assets/images/partner.svg';

import Aos from "aos";
import { useEffect } from "react";




const Score = ({fakul,students,teachers,forwork}) => {
    useEffect(() =>{
        Aos.init()
    })
    return (
        <div
        data-aos="flip-down"
        style={{
            minHeight:'500px',
            backdropFilter: 'blur(10px)'
        }}
        className={'flex w-full   mt-12 items-center justify-center z-0 box'} >


            <div
             style={{
                // backdropFilter: 'blur(10px)'
                backgroundColor:'rgba(0, 0, 0, 0.502)'
            }}
            className="flex w-11/12   mt-12 items-center justify-evenly flex-wrap relative p-20 rounded-xl z-0">
        {/* <h2 className='absolute top-10 text-xl text-grey w-full text-center bg-kokroq'>Ko'rsatgichlar</h2> */}
            
        <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-5 flex flex-col items-center  bg-white rounded-md  relative spin">
                <Image className="w-10 h-10 mb-5" src={stdents} alt='icon' />
                 <h1 className='text-white'>{students} +</h1>
                 <p className='info'>Bakalavrlar</p>
            </div>

            <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-5 flex flex-col bg-white rounded-md items-center   relative spin">
                <Image className="w-10 h-10 mb-5" src={stdent} alt='icon' />
                 <h1 className='text-white'>{fakul} +</h1>
                 <p className='info'>Magistrlar</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-5 flex flex-col items-center  bg-white rounded-md  relative spin">
                <Image className="w-10 h-10 mb-5" src={teacher} alt='icon' />
                 <h1 className='text-white'>{teachers} +</h1>
                 <p className='info'>Professorlar</p>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-5 flex flex-col items-center  bg-white rounded-md  relative spin">
                <Image className="w-10 h-10 mb-5" src={partner} alt='icon' />
                 <h1 className='text-white'>{forwork} +</h1>
                 <p className='info'>Hamkorlar</p>
            </div>
            </div>
        </div>
    );
}

export default Score;
