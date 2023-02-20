import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items3 } from '../../components/data/items';

import Boss from '../../components/boss/boss';

import strel from './../../public/assets/images/strel.png'
import adham from './../../public/assets/images/adhamjon.png'
import download from './../../public/assets/svg/download.svg'
import { images } from '../../public/assets';

const Reyting = () => {
    return (
        <div className='flex flex-wrap w-full my-10 justify-around pt-10'>
            <h2 className='text-3xl w-full text-center mb-5  ml-10 uppercase font-bold text-grenn'>{items3[0]}</h2>
        
          <Boss
           image={adham}
           name={"Mahkamov Adhamjon  Rustamovich"}
           urven={"Bo'lim boshlig'i"}
           time={"Dushanba - Juma | 14:00 - 16:00"}
           phone={'+99 897 775 75 93'}
           gamil={'a.makhamov@tdtu.uz'}
           wname1={"Rajaboyev Umidjon"}
           wimg1={images.umid}
           wurvern1={"Bosh mutaxasis"}
           wtel1={"+998 90 433 77 63"}
           wgmail1={"urajapbaev@gmail.com"}
           status2={true}
           wimg2={images.shagzod}
           wname2={"Rashidov Shohzodbek Abduvahobovich"}
           wurvern2={"Bosh mutaxasis"}
           wtel2={"+998971072692"}
           wgmail2={"shoh.rashidov2103@gmail.com"}
             />

             <div className='w-2/4 p-5  shadow-2xl'>
                <p className='text-xl font-bold text-grenn'>
                Toshkent davlat texnika universteti Xalqaro reyting bo‘limi
                 quyidagi vazifalarni bajaradi: 
                </p>
                <li>
                reyting ko‘rsatkichlariga ta’sir etuvchi parametrlarni doimiy nazorat
                 qilish va ularning holati bo‘yicha universitet rahbariyatini ogoxlantirib borish; 
                </li>
                <li>
                fakultetlar va kafedralar kesimida universitetning xalqaro reytinga qo‘shayotgan 
                hissasi ko‘rsatkichlarini aniqlab borish; 
                </li>
                <li>
                doimiy ravishda kafedralar, bo‘limlarning xodimlarini xalqaro reyting tizimi talablari 
                bilan tanishtirib borish hamda seminarlar tashkil etish; universitetda faoliyat yuritayotgan
                 professor-o‘qituvchilar sonini hisoblash uchun statistika hisobotlarini tayyorlash; 
                </li>
                <li>
                xorijiy professor-o‘qituvchilar sonini hisoblash uchun
                 statistika hisobotlarini tayyorlash; 
                </li>
                <li>
                universitetda faoliyat yuritayotgan fan doktori, fan nomzodi hamda PhD darajasiga ega bo‘lgan 
                professor-o‘qituvchilar sonini hisoblash uchun statistika hisobotlarini tayyorlash; 
                </li>
                <li>
                universitetda tahsil olayotgan mahalliy va xorijiy bakalavriatura talabalari sonini hisoblash
                 uchun statistika hisobotlarini tayyorlash; universitetda tahsil olayotgan 
                </li>
                <li>
                ushbu sohada amalga oshirilayotgan faoliyatlarning natijalarini universitet veb-sayti va 
                universitetning ijtimoiy tarmoklarida aks ettirib borish.
                </li>
                <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
            Bo'lim nizomi
            <Image className='w-8 ml-2' src={download} alt='icon' />
           </button>
             </div>
             <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
          {
            items3?.map((el,index) =>{
            if(typeof el ==='object'){
                return <Link key={index} className=' w-72 h-64 mt-10 shadow-lg border-4 border-transparent text-grenn font-bold transforum ease-out duration-500 hover:border-grenn  rounded-md m-2 flex items-center justify-between' href={`${el.path}`}>
                 <Image className='w-full h-full' src={el.img} alt='icon'/>
             </Link>
            }
            })
           } 
          
          </div>
        </div>
    );
}

export default Reyting;
