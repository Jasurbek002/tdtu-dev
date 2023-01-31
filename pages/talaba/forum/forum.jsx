import Image from 'next/image';
import React from 'react';
import { images } from '../../../public/assets/index';
const Forum = () => {
    return (
        <div className='w-full flex items-center justify-around flex-wrap  '>
            <h1 className='text-xl uppercase text-grenn font-bold mt-10'>Tanlovlar va Forum</h1>
            <div
                style={{
                    height: "600px"
                }}
                className='w-11/12 my-10 rounded-2xl border-4 border-grenn'>
                <Image
                    className='w-full h-full rounded-2xl'
                    src={images.forum} alt='info img' />
            </div>
            <div className='w-11/12 p-5 bg-kokroq flex flex-col justify-center items-start mb-10 rounded-2xl'>
                <p className='text-xl text-white font-medium text-center p-5 bg-grenn'>
                    Islom Karimov nomidagi Toshkent
                    davlat texnika unversiteti talabalarining
                    Belarus milliy texnika unversiteti negizida
                    INNOREGION-2022 forumidagi ishtiroki!
                </p>
                <p className='mt-5 text-xl text-white  text-start p-5 bg-grenn'>
                    Joriy yilning 23-25 noyabr kunlari Belarus milliy texnika universiteti
                     va Islom Karimov nomidagi Toshkent davlat texnika universitetining qo‘shma 
                     ilmiy va ilmiy-innovatsion faoliyati doirasida yoshlar o‘rtasida startap loyihalari
                      va tanlovlarining qo‘shma tanlovlari to‘g‘risidagi nizomga muvofiq Belarus Milliy Texnika 
                      Universiteti negizida INNOREGION-2022 forumining “SMART Trajectory” modellashtirish, texnik 
                      ijodkorlik va muhandislik tadbirkorligi bo‘yicha talabalar uchun ilmiy-amaliy seminar dasturi
                       doirasida o‘tkazildi. Bunda Toshkent davlat texnika universiteti va Belarus milliy texnika 
                       universitetining robototexnika yo‘nalishida talabalarining robototexnika bo‘yicha eng yaxshi 
                       startap loyihalari taqdimoti va saralanishi bo‘lib o‘tdi. Toshkent davlat texnika universitetining 
                       2 nafar talabasi online va 2 nafar talabasi offline rejimda qatnashdilar.
                </p>
            </div>
        </div>
    );
}

export default Forum;
