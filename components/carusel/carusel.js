import styles from "../../styles/carusel.module.scss";
import {
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
  EffectFade,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

import image from "../../public/assets/images/univerimg.jpg";
import { images } from "../../public/assets/index";

import Image from "next/image";
import Link from "next/link";

function Carusel() {
  return (
    <div
      style={{
        backgroundImage: `url('${image.src}')`,
        width: "100%",
        height: "500px",
      }}
      className={styles.Carusel}
    >
      <Swiper
        spaceBetween={1}
        style={{
          "--swiper-navigation-color": "#1b6b50",
          "--swiper-navigation-backgroundColor": "#ffffff",
          "--swiper-pagination-color": "#1b6b50",
          transition: "all 2s ease-in-out",
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
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              height: "500px",
            }}
            className={styles.Carusel__banner}
          >
            <div className={styles.Carusel__banner__card}>
              <h1 className={styles.Carusel__banner__card__title}>
                O'quvchi yoshlar, talabalar, yosh o'quvchilar va korhonalar
                mutahassislari uchun robotics bo'yicha XALQARO TANLOV
                "ROBOT.Uz-2023"
              </h1>
              <p className={styles.Carusel__banner__card__text}>
                Islom Karimov nomidagi Toshkent davlat texnika universiteti
                2023-yil 16-17-May kunlari robotika iqtidorli oʻquvchi va
                talabalar, yosh oʻquvchilar, olim va mutahassislar uchun
                "ROBOT.Uz-2023" 
              </p>
              <Link
                className="px-2 rounded-sm text-blue border-2 border-blue bg-transparent"
                href={"/news"}
              >
                more
              </Link>
            </div>
            <div className={styles.Carusel__banner__media}>
              <Image
                loading="lazy"
                className={styles.Carusel__banner__media__img}
                src={images.robot}
                alt="img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              height: "500px",
            }}
            className={styles.Carusel__banner}
          >
            <div className={styles.Carusel__banner__card}>
              <h1 className={styles.Carusel__banner__card__title}>
                The First International Conference on Innovative Technologies in
                Agri-food Chain: Problems and Perspectives (ITAC-2023)
              </h1>
              <p className={styles.Carusel__banner__card__text}>
                The First International Conference on Innovative Technologies in
                Agri-food Chain: Problems and Perspectives (ITAC-2023) is
                organized by Tashkent State Technical University and will be
                held in Tashkent, Uzbekistan during May 25-26, 2023.
              </p>
              <Link
                className="px-2 rounded-sm text-blue border-2 border-blue bg-transparent"
                href={"/news"}
              >
                more
              </Link>
            </div>
            <div className={styles.Carusel__banner__media}>
              <Image
                loading="lazy"
                className={styles.Carusel__banner__media__img}
                src={images.banner2}
                alt="img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              height: "500px",
            }}
            className={styles.Carusel__banner}
          >
            <div className={styles.Carusel__banner__card}>
              <h1 className={styles.Carusel__banner__card__title}>
                O‘zbekiston Respublikasi Prezidenti va nomli davlat
                stipendiyalari sovrindorlari
              </h1>
              <p className={styles.Carusel__banner__card__text}>
                Islom Karimov nomidagi Toshkent davlat texnika universitetining
                O‘zbekiston Respublikasi Prezidenti va nomli davlat
                stipendiyalari sovrindorlari
              </p>
            </div>
            <div className={styles.Carusel__banner__media}>
              <Image
                loading="lazy"
                className={styles.Carusel__banner__media__img}
                src={images.stipendiya}
                alt="img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              height: "500px",
            }}
            className={styles.Carusel__banner}
          >
            <div className={styles.Carusel__banner__card}>
              <h1 className={styles.Carusel__banner__card__title}>
                ILMIY TADQIQOT ISHLARINI TASHKIL ETISH, MAVJUD MUAMMOLAR HAMDA
                TAKLIFLAR BO’YICHA YOSH OLIMLAR BILAN UCHRASHUV O’TKAZILDI
              </h1>
              <p className={styles.Carusel__banner__card__text}>
                Joriy yilning 31-yanvar kuni O‘zbek-Yapon yoshlar innovatsion
                markazida 2023-yilda oliy ta’limdan keyingi ta’lim (PhD/DSc)
                hamda stajyor-tadqiqotchilik institutlariga o‘qishga qabul
                qilingan tadqiqotchilar bilan universitet o‘quv ishlari
              </p>
            </div>
            <div className={styles.Carusel__banner__media}>
              <Image
                loading="lazy"
                className={styles.Carusel__banner__media__img}
                src={images.banner1}
                alt="img"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carusel;
