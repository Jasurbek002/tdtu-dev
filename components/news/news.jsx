
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
                className={styles.newscontiner}>
                <div className='flex w-full items-center justify-start mb-5 '>
                    <h1 className='text-grenn text-2xl font-mono font-bold ml-5 uppercase'>So'ngi e'lonlar</h1>
                </div>
                <div className={styles.news}>
                    <Image src={images.xashar} alt="icon" />
                    <div className={styles.news__info}>
                    <h2 className='text-xl text-oqroq w-full my-4'>
                       Universitetimizda hashar
                    </h2>   
                    <p className='text-md text-oqroq text-center w-11/12 '>
                    Toshkent davlat texnika universitetida 2023-yilning 13-14-yanvar 
                    kunlari barcha fakultetlarda
                    </p>
                    <button 
                    className='w-24 h-8 border-2 border-grenn text-grenn ml-auto mt-auto mb-1 hover:bg-grenn hover:text-white transform ease-in-out duration-500'>
                        Batafsil
                    </button>
                    </div>  
                </div>

                <div className={styles.news}>
                    <Image src={images.tezkor} alt="icon" />
                    <div className={styles.news__info}>
                    <h2 className='text-xl text-oqroq w-full my-4'>
                        #Tezkor
                    </h2>   
                    <p className='text-md text-oqroq text-center w-11/12 '>
                    O‘qish 23-yanvardan an’anaviy tarzda boshlanadi
                    </p>
                    <button 
                    className='w-24 h-8 border-2 border-grenn text-grenn ml-auto mt-auto mb-1 hover:bg-grenn hover:text-white transform ease-in-out duration-500'>
                        Batafsil
                    </button>
                    </div>
                </div>

                <div className={styles.news}>
                    <Image src={images.stipendiya} alt="icon" />
                    <div className={styles.news__info}>
                    <h2 className='text-xl text-oqroq w-full my-4'>
                        stipendiyalari sovrundorlari
                    </h2>   
                    <p className='text-md text-oqroq text-center w-11/12 '>
                    Islom Karimov nomidagi Toshkent davlat texnika universitetining O‘zbekiston 
                    Respublikasi Prezidenti 
                    </p>
                    <button 
                    className='w-24 h-8 border-2 border-grenn text-grenn ml-auto mt-auto mb-1 hover:bg-grenn hover:text-white transform ease-in-out duration-500'>
                        Batafsil
                    </button>
                    </div>
                </div>

                <div className={styles.news}>
                    <Image src={images.slide} alt="icon" />
                   <div className={styles.news__info}>
                   <h2 className='text-xl text-oqroq w-full my-4'>
                        Yoshlar ittifoqi kengashi
                    </h2>   
                    <p className='text-md text-oqroq text-center w-11/12 '>
                    Barcha loyihalar g'oliblari universitet rahbariyatining 
                    diplomlari hamda estalik sovg'alari bilan taqdirlandi.
                    </p>
                    <button 
                    className='w-24 h-8 border-2 border-grenn text-grenn ml-auto mt-auto mb-1 hover:bg-grenn hover:text-white transform ease-in-out duration-500'>
                        Batafsil
                    </button>
                   </div>
                </div>
               
            </div>

        </>

    );
}

export default News;
