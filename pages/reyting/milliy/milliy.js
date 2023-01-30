import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import milliyimg from './../../../public/assets/images/milliy.jpg'
import milliyimg2 from './../../../public/assets/images/milliy2.jpg'
import milliyimg3 from './../../../public/assets/images/milliy3.jpg'


const Milliy = () => {
    return (
        <div className='w-full flex flex-wrap justify-around items-center my-10'>
                     <h1 className='text-xl mb-10 font-bold w-full text-center text-grenn'>MILLIY REYTING</h1>
            <div 
            className='bg-kokroq rounded-md'
            style={{height: "450px" ,maxWidth:'600px'}}>
                <p className='font-medium  text-xl shadow-2xl text-grenn w-full text-center'>Тошкент давлат техника университети Миллий ОТМлар рейтингида қуйидаги ўринларни эгаллади</p>
                <Image className='w-full h-11/12' src={milliyimg} alt='img' />
            </div>
            <div 
            style={{
                minHeight:'400px',
            }}
            className='w-2/4  shadow-2xl rounded-md p-5 bg-kokroq '>
                <p className='text-xl text-grenn font-medium'>
                Тошкент давлат техника университети 2021 йил Миллий рейтингида 6-ўринни эгаллади
                Олий ва ўрта махсус таълим вазирлигида олий таълим муассасалари ва академик лицейлар
                 рейтингини эълон қилинди. Миллий рейтинг доирасида битирувчилари мавжуд 92 та (шу жумладан,
                  69 та ОТМ, 23 та филиал) олий таълим муассасаларининг фаолияти самарадорлигига қуйидаги 4 
                  та йўналишдаги 20 та индикатор асосида баҳо берилди.
                </p>
                <li className='my-2'> илмий тадқиқот фаолияти ва таълим-фан-ишлаб чиқариш интеграцияси;</li>
                <li className='my-2'> ўқув-методик ишлар фаолияти ва ўқитиш сифати;</li>
                <li className='my-2'> ўқув-методик ишлар фаолияти ва ўқитиш сифати;</li>
                <li className='my-2'>спортни ривожлантириш.</li> 
            </div>
           
            <div 
            className='bg-kokroq rounded-md my-10 shadow-2xl'
            style={{ height: "450px" ,maxWidth:'600px'}}>
            <p className='font-medium  text-xl text-grenn w-full text-center'>
                Энг кўп маблағ ишлаб топган ОТМлар бўйича
                Тошкент давлат техника университети 1-ўрин.
            </p>
                <Image className='w-full h-11/12' src={milliyimg2} alt='img' />
            </div>

            
            <div
             className='bg-kokroq rounded-md my-10 w-2/4 shadow-2xl'
            style={{  height: "450px"  }}>
            <p className='font-medium  text-xl text-grenn w-full text-center'>
                Техника ва қишлоқ хўжалиги соҳаси бўйича ОТМлар рейтингида
                Тошкент давлат техника университети 3-ўрин.
            </p>
                <Image className='w-full h-auto' src={milliyimg3} alt='img' />
            </div>
        </div>
    );
}

export default Milliy;
