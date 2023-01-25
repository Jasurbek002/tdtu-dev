
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
import image2 from '../../public/assets/images/fon2.jpg'
import image3 from '../../public/assets/images/fon3.jpg'
import image4 from '../../public/assets/images/univerimg.jpg'
import image5 from '../../public/assets/images/fon4.jpg'


import Image from 'next/image';





function Carusel() {


  return (
    <div className={styles.Carusel}>


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
        // effect={"fade"}
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
            backgroundImage:`url('${image.src}')`,
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
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div 
          style={{
            backgroundImage:`url('${image2.src}')`,
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
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div 
          style={{
            backgroundImage:`url('${image3.src}')`,
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
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div 
          style={{
            backgroundImage:`url('${image4.src}')`,
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
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div 
          style={{
            backgroundImage:`url('${image5.src}')`,
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
          </div>
          </SwiperSlide>
    
      </Swiper>
     
    </div>
  )
}

export default Carusel
