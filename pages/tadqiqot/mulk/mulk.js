import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import strel from './../../../public/assets/images/strel.png'
import univer from './../../../public/assets/images/univer.png'
const Mulk = () => {
    return (
        <div className='w-full flex justify-around items-center flex-wrap'>
           <div className='w-10/12 flex items-center bg-white shadow-3xl p-5 rounded-lg my-10'>
           <p>
                2020-yilda ToshDTU da olib borilgan ilmiy-tadqiqot natijalari asosida universitet professor-o'qituvchilari va olimlari tomonidan ilmiy tadqiqotlar natijasi bo'yicha  jami 37 ta ixtiro, foydali model va sanoat namunalari uchun patent hamda  91 ta EHM uchun dasturga guvohnomalar olingan.
            </p>
           </div>
           <div className='w-10/12 flex items-center bg-white shadow-3xl p-5 rounded-lg my-10'>
           <p>
            2021-yilda ToshDTU da olib borilgan ilmiy-tadqiqot natijalari asosida universitet professor-o'qituvchilari va olimlari tomonidan ilmiy tadqiqotlar natijasi bo'yicha 23 ta ixtiro va foydali model  uchun patent hamda  186 ta EHM uchun dasturga guvohnomalar olingan.
            </p>
           </div>
        </div>
    );
}

export default Mulk;
