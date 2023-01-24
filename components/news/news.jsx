
import Image from 'next/image';
import React from 'react';
import Aos from 'aos';

import styles from './../../styles/news.module.scss'
import img from '../../public/assets/images/logo.jpg'
import { useEffect } from 'react';

const News = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <>
            
                <div className='flex w-full items-center justify-evenly mb-8 mt-20'>
                    <span className="w-96 h-1 bg-grenn sm:hidden md:hidden  lg:flex "></span>
                    <h1 className='text-grenn text-2xl w-40'>So'ngi e'lonlar</h1>
                    <span className="w-96 h-1 bg-grenn sm:flex-none"></span>
                </div>

                <div className='w-full flex items-center justify-evenly p-5 flex-wrap '>

                    <div
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
                       
                    </div>
                 

                </div>
           
        </>

    );
}

export default News;
