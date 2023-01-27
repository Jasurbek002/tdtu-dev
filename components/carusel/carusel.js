
import styles from '../../styles/carusel.module.scss'
import { Navigation, Thumbs,Autoplay,Pagination,EffectFade, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/thumbs';
import "swiper/css/free-mode";
import 'swiper/css/mousewheel'
import 'swiper/css/keyboard'



import image from '../../public/assets/images/univerimg.jpg'
import { images } from '../../public/assets/index';


import Image from 'next/image';





function Carusel() {


  return (
    <div 
    style={{
      backgroundImage:`url('${image.src}')`,
      width:'100%',
      height:'500px'
    }}
    className={styles.Carusel}>


      <Swiper

        spaceBetween={1}
        style={{
          "--swiper-navigation-color": "#1b6b50",
          "--swiper-pagination-color": "#1b6b50",
          transition:'all 2s ease-in-out'
         
        }}
        modules={[Navigation, Thumbs,Autoplay,Pagination,FreeMode]}
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
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}



      >
        <SwiperSlide>
          <div 
          style={{
            width:'100%',
            height:'500px'
          }}
          className={styles.Carusel__banner}>
            <div className={styles.Carusel__banner__card}>
                 <h1 className={styles.Carusel__banner__card__title}>
                      Bugun Xalqaro hamkorlar bilan uchrashuv bo'lib o'tdi
                 </h1>
                 <p className={styles.Carusel__banner__card__text}>
                      Ushbu uchrashuvda Islom Karimov nomidagi toshkent davlat texnika
                      universiteti va Belarus universiteti o'rtasida turli xil kelishuvlar
                      imzolandi
                 </p>
            </div>
            <div className={styles.Carusel__banner__media}>
                <Image className={styles.Carusel__banner__media__img} src={images.slide} alt='img' />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div 
          style={{
            width:'100%',
            height:'500px'
          }}
          className={styles.Carusel__banner}>
            <div className={styles.Carusel__banner__card}>
                 <h1 className={styles.Carusel__banner__card__title}>
                 O‘zbekiston Respublikasi Prezidenti va nomli davlat stipendiyalari sovrindorlari
                 </h1>
                 <p className={styles.Carusel__banner__card__text}>
                 Islom Karimov nomidagi Toshkent davlat texnika universitetining O‘zbekiston Respublikasi Prezidenti va nomli davlat stipendiyalari sovrindorlari
                 </p>
            </div>
            <div className={styles.Carusel__banner__media}>
                <Image className={styles.Carusel__banner__media__img} src={images.stipendiya} alt='img' />
            </div>
          </div>
          </SwiperSlide>
      </Swiper>
     
    </div>
  )
}

export default Carusel
