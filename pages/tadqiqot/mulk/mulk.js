import Image from 'next/image';
import React from 'react';

const Mulk = () => {
    return (
        <div className='w-full flex justify-around items-center flex-wrap'>
            <h1 className='text-grenn text-xl w-full text-center my-10 font-bold'>INTELEKTUAL MULK OBYEKTLARI</h1>
           <div className='w-10/12 flex items-center bg-kokroq shadow-3xl p-5 rounded-lg my-10'>
           <p className='text-xl text-grenn'>
                2020-yilda ToshDTU da olib borilgan ilmiy-tadqiqot natijalari
                 asosida universitet professor-o'qituvchilari va olimlari tomonidan 
                 ilmiy tadqiqotlar natijasi bo'yicha  jami 37 ta ixtiro, foydali model 
                 va sanoat namunalari uchun patent hamda  91 ta EHM uchun dasturga guvohnomalar olingan.
            </p>
           </div>
           <div className='w-10/12 flex items-center bg-kokroq shadow-3xl p-5 rounded-lg my-10'>
           <p className='text-xl text-grenn'>
            2021-yilda ToshDTU da olib borilgan ilmiy-tadqiqot natijalari 
            asosida universitet professor-o'qituvchilari va olimlari tomonidan 
            ilmiy tadqiqotlar natijasi bo'yicha 23 ta ixtiro va foydali model  
            uchun patent hamda  186 ta EHM uchun dasturga guvohnomalar olingan.
            </p>
           </div>
        </div>
    );
}

export default Mulk;
