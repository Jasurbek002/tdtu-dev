
import styles from '../../styles/carusel.module.scss'
import { Navigation, Thumbs,Autoplay,Pagination,EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/thumbs';


import image from '../../public/assets/images/univerimg.jpg'
import image2 from '../../public/assets/images/slider2.png'
import image3 from '../../public/assets/images/slider3.png'
import image4 from '../../public/assets/images/slider4.png'
import image5 from '../../public/assets/images/slider5.png'


import Image from 'next/image';





function Carusel() {


  return (
    <div className={styles.Carusel}>


      <Swiper

        spaceBetween={1}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-autoplay-tranform":"1s"
        }}
        modules={[Navigation, Thumbs,Autoplay,Pagination,EffectFade]}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        navigation={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}

      // onSlideChange={(e) => console.log(e)}
      // onSwiper={(swiper) => swiper.animating}

      >
        <SwiperSlide><Image className={styles.Carusel__img} src={image} alt="img" /></SwiperSlide>
        <SwiperSlide><Image className={styles.Carusel__img} src={image2} alt="img" /></SwiperSlide>
        <SwiperSlide><Image className={styles.Carusel__img} src={image3} alt="img" /></SwiperSlide>
        <SwiperSlide><Image className={styles.Carusel__img} src={image4} alt="img" /></SwiperSlide>
        <SwiperSlide><Image className={styles.Carusel__img} src={image} alt="img" /></SwiperSlide>
        <SwiperSlide><Image className={styles.Carusel__img} src={image5} alt="img" /></SwiperSlide>
      </Swiper>
      {/* <div className={styles.Carusel__blur}>
      <h1 data-text={`Universitetimizda bugun`} >Universitetimizda bugun</h1>
      <p className='text-white mx-16 mt-10'>Innovatsion loyhalar taqdimoti bo'lib o'tdi. Unda Ko'plab ilg'or texnologiyalar
      taqdim etildi
      </p>
    </div> */}
    </div>
  )
}

export default Carusel
