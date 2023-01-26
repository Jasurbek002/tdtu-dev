
import Image from 'next/image';
import React from 'react';
import Aos from 'aos';

import styles from './../../styles/news.module.scss'
import img from '../../public/assets/images/logo.jpg'
import { images } from '../../public/assets/index';
import { useEffect } from 'react';

const News = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>



            <div
                style={{
                    // backgroundImage: `url('${images.news.src}')`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    height: '500px'

                }}
                className='w-full flex items-center justify-evenly p-5 flex-wrap border-t-2 border-grenn'>
                <div className='flex w-full items-center justify-start mb-5 '>
                    <h1 className='text-grenn text-2xl w-40 ml-5'>So'ngi e'lonlar</h1>
                </div>

                {/* <div
                        data-aos="flip-left"
                        style={{ backgroundColor: 'lightskyblue' }}
                        className={styles.card}>
                            <div className={styles.card__bg}>

                            </div>
                        <Image className={styles.card__img} src={img} alt='card img' />
                        <h4 className={styles.card__title}>songi yangilik</h4>
                        <p className={styles.card__text}>bu universitetimizda rektoz bilan uchrashuv bo'lib
                            o'tdi unda universitetimiz talabalari faol qatnshdi
                        </p>
                       
                    </div> */}

                <div className={styles.news}>
                    <h2 className='text-xl text-white w-full h-20 bg-grenn'>
                        So'ngi yangiliklar
                    </h2>
                    <p className='text-md text-grenn text-start '>
                        bu universitetimizda rektoz bilan uchrashuv bo'lib
                        o'tdi unda universitetimiz talabalari faol qatnshdi
                    </p>
                </div>
                <div className={styles.news}>
                    <h2 className='text-xl text-white w-full h-20 bg-grenn'>
                        So'ngi yangiliklar
                    </h2>
                    <p className='text-md text-grenn text-start '>
                        bu universitetimizda rektoz bilan uchrashuv bo'lib
                        o'tdi unda universitetimiz talabalari faol qatnshdi
                    </p>
                </div>
                <div className={styles.news}>
                    <h2 className='text-xl text-white w-full h-20 bg-grenn'>
                        So'ngi yangiliklar
                    </h2>
                    <p className='text-md text-grenn text-start '>
                        bu universitetimizda rektoz bilan uchrashuv bo'lib
                        o'tdi unda universitetimiz talabalari faol qatnshdi
                    </p>
                </div>
                <div className={styles.news}>
                    <h2 className='text-xl text-white w-full h-20 bg-grenn'>
                        So'ngi yangiliklar
                    </h2>
                    <p className='text-md text-grenn text-start '>
                        bu universitetimizda rektoz bilan uchrashuv bo'lib
                        o'tdi unda universitetimiz talabalari faol qatnshdi
                    </p>
                </div>


            </div>

        </>

    );
}

export default News;
