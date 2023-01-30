import Image from "next/image";
import Button from '@mui/material/Button';

import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import oliy from './../../public/assets/images/oliy.jpg'
import ziyo from './../../public/assets/images/ziyo.jpg'
import govuz from './../../public/assets/images/govuz.png'
import gerb from './../../public/assets/images/gerb.png'

import Aos  from "aos";
import { useEffect } from "react";





const Partner = () => {
    useEffect(() =>{
        Aos.init()
    })
    return (
        <div className='w-full flex flex-wrap items-center justify-evenly py-5 partner'>
             <div
             data-aos="fade-right"
             className='flex w-full items-center justify-start my-5 bg'>
                <h1 className='text-white text-2xl ml-10 uppercase font-mono font-bold '>Hamkorlar</h1>
                </div>
            <Swiper
               data-aos="zoom-in-up"
               slidesPerView={4}
               modules={[Navigation,Thumbs]}
               navigation={true}
               grabCursor={true}
               loop = {true}
               spaceBetween ={50}
               breakpoints={{
                481:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
               className={' w-11/12 flex items-center  justify-evenly'}
               >
                <SwiperSlide>
                <div className=' w-48 rotate-45 h-48 py-5 bg-white flex flex-col items-center shadow my-10  hover:scale-105 hover:animate-pulse hover:border-2 hover:border-grenn transform ease-in-out duration-500'>
                <Image className='w-36 h-36 -rotate-45 rounded-full' src={oliy}  alt='icon'/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-48 rotate-45 h-48 py-5 bg-white flex flex-col items-center shadow my-10 hover:scale-105 hover:animate-pulse hover:border-2 hover:border-grenn transform ease-in-out duration-500'>
                <Image className='w-36 h-36 -rotate-45 rounded-full' src={govuz}  alt='icon'/>
                 </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-48 rotate-45 h-48 py-5 bg-white flex flex-col items-center shadow my-10 hover:scale-105 hover:animate-pulse hover:border-2 hover:border-grenn transform ease-in-out duration-500'>
                <Image className='w-36 h-36 -rotate-45 rounded-full' src={ziyo}  alt='icon'/>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-48 rotate-45 h-48 py-5 bg-white flex flex-col items-center shadow my-10 hover:scale-105 hover:animate-pulse hover:border-2 hover:border-grenn transform ease-in-out duration-500'>
                <Image className='w-36 h-36 -rotate-45 rounded-full' src={gerb}  alt='icon'/>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Partner;
