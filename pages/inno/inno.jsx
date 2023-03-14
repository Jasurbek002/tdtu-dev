import React from 'react';
import { Navigation, Thumbs, Autoplay, Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/thumbs';
import "swiper/css/free-mode";
import 'swiper/css/mousewheel'
import 'swiper/css/keyboard'


import { texno1, texno2, texno3 } from '../../public/assets/index'
import Image from 'next/image';

const Inno = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col py-10 bg-grenn border-t-2 border-b-2 border-white'>
      <h1 className='w-full text-center text-xl font-bold text-white'>INNO TEXNOPARK</h1>
      <div className='w-full flex justify-around items-center flex-wrap'>
        <p className='w-11/12 text-start mb-10 text-white uppercase'>Texno news</p>
        <div className='laptop:w-2/4 h-[400px] rounded-md'>
          <Swiper
            spaceBetween={1}
            style={{
              "--swiper-navigation-color": "#1b6b50",
              "--swiper-navigation-backgroundColor": '#ffffff',
              "--swiper-pagination-color": "#1b6b50",
              transition: 'all 2s ease-in-out'

            }}
            modules={[Navigation, Thumbs, Autoplay, Pagination, FreeMode]}
            pagination={{
              clickable: true,
            }}
            cssMode={true}
            navigation={true}
            grabCursor={true}
            mousewheel={true}
            keyboard={true}
            fadeEffect={true}
            loop={true}
            autoplay={{
              delay: 5500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
          >
            <SwiperSlide>
              <Image loading='lazy' className='w-full h-[400px] rounded-md' src={texno1} alt='textno img' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full h-[400px] rounded-md' src={texno2} alt='textno img' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full h-[400px] rounded-md' src={texno3} alt='textno img' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='w-2/5 h-auto'>
          <p className='text-kokroq'>
            Treningda Islom Karimov nomidagi Toshkent davlat texnika universiteti Iqtidorli talabalarning
            ilmiy-tadqiqot faoliyatini tashkil etish bo'limi boshlig'i va Elektronika va avtomatika fakulteti
            "Axborotlarga ishlov berish va boshqarish tizimlari" kafedrasi o'qituvchilari hamda iqtidorli va
            innovatsion g'oyaga ega talabalar yoshlardan tuzilgan jamoasi ishtirok etishdi. Tadbir ishtirokchilari
            dunyoning o'zgarishiga sababchi bo'lgan innovatsion texnologiyalar hamda sun'iy intellekt va uni turli
            sohalarda qo'llash bo'yicha qiziqarli ma'lumotlarga ega bo'lishdi hamda tadbir davomida universitet talabalari
            160-20 guruh talabalari Rahimova Mohira, Xayrullayev Hikmat, 153-19 guruh talabasi Ayxo’jayev Nurtoz trederlarga
            o'zlarini qiziqarli savollarini berib eng yaxshi savol sohibi sifatida Texno park tomonidan estalik sovg’alar
            bilan taqdirlandi. Tadbir oxirida talabar Texno park bo'ylab qiziqarli tur qilishdi.
          </p>
        </div>
      </div>
    
    </div>
  );
}

export default Inno;
