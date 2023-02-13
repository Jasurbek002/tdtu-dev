import React from 'react';
import { items5 } from '../../components/data/items';
import Link from 'next/link';
import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'
import download from './../../public/assets/svg/download.svg'
import Boss from '../../components/boss/boss';
import { images } from '../../public/assets/index';
const Tijorat = () => {
    return (
      <div className='flex flex-wrap w-full my-20 justify-around'>
      <h2 className='text-3xl w-full text-center mb-5  ml-10 uppercase font-bold text-grenn'>{items5[0]}</h2>
   
    <Boss
       image={images.bekmurod}
       name={"Raximjonov Bekmurodjon Baxtiyorjon òĝli"}
       urven={"Bo'lim boshlig'i"}
       time={"Dushanba - Juma | 14:00 - 16:00"}
       phone={"+99 894-023-22-34"}
       gamil={"bekmurodjon0319@mail.ru"}
       wimg1={images.dilshod2}
       wname1={"Abduraximov Dilshod Ilhom o‘g‘li"}
       wurvern1={"Bosh mutaxasis"}
       wtel1={"+99 890 864 56 57"}
       wgmail1={"dilshodabduraximov5@gmail.com"}
       status2={true}
       wimg2={images.dilshod}
       wname2={"Saminjonov Dilshodjon Muzaffar o'g'li"}
       wurvern2={"Bosh mutaxasis"}
       wtel2={"+99888 2121 325"}
       wgmail2={"samijonovdilshod@gmail.com"}
    />
    <div className='w-2/4 p-5  shadow-2xl'>
                <p className='text-xl font-bold text-grenn'>
                Toshkent davlat texnika universteti Ilmiy-inavatsion ishlanmalarni tijoratlashtirish bo'limi
                 quyidagi vazifalarni bajaradi: 
                </p>
                <li>
                Tijoratlashtirish bo‘limi Islom Karimov nomidagi Toshkent davlat texnika
                 universitetiga xuquqiy asosda tegishli bo‘lgan  ilmiy-tadqiqot natijalarini 
                 va ilmiy-innovatsion ishlanmalarni tijoratlashtirishni ta’minlash maqsadida tashkil etiladi.
                </li>
                <li>
                Tijoratlashtirish bo‘limi faoliyatining asosiy yo‘nalishlari quyidagilardan iborat: 
                </li>
                <li>
                bozorni tizimli tahlil qilish va innovatsion mahsulotlarga (ishlarga, xizmatlarga) talabni
                 o‘rganish, o‘zini oqlash muddatini, rentabellikni va innovatsion mahsulotlarni tijoratlashtirish bilan bog‘liq risklarni baholash;
                </li>
                <li>
                tadbiq qilishga tayyor va yuqori tijoratlashtirish
                 salohiyatiga ega innovatsion loyihalarni tanlash va 
                 tijoratlashtirishni amalga oshirish; 
                </li>
                <li>
                innovatsion loyihalarni tijoratlashtirish uchun  investorlar, 
                 hamkorlar va boshqa qiziqish bildirgan shaxslarni jalb qilish; 
                </li>
                <li>
                yangi texnologiyalarni joriy qilish va innovatsion maxsulot 
                ishlab chiqarish maqsadida sanoat korxonalari bilan hamkorlik o‘rnatish.
                </li>
          
                <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
            Bo'lim nizomi
            <Image className='w-8 ml-2' src={download} alt='icon' />
           </button>
             </div>
             <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
    {
      items5?.map((el,index) =>{
      if(typeof el ==='object'){
          return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between ' href={`${el.path}`}>
          {el.id}. {el.name}
           <Image className='w-6 h-6 rounded-full ml-5' src={strel} alt='icon'/>
       </Link>
      }
      })
     } 
    </div>
  </div>
    );
}

export default Tijorat;
