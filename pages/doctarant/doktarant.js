import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Boss from '../../components/boss/boss.jsx';
import { items1 } from '../../components/data/items.js'
import strel from './../../public/assets/images/strel.png'
import download from './../../public/assets/svg/download.svg'
import { images } from '../../public/assets/index.js';
const Doktarant = () => {
  return (
    <div className='flex flex-wrap w-full my-20 justify-around'>
      <h2 className='text-3xl w-11/12 text-center  ml-10 uppercase font-bold text-grenn'>{items1[0]}</h2>
      <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
        {
          items1?.map((el, index) => {
            if (typeof el === 'object') {
              return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between' href={`${el.path}`}>
                {el.id}. {el.name}
                <Image className='w-8 h-8 rounded-full' src={strel} alt='icon' />
              </Link>
            }
          })
        }

      </div>
      <Boss
       image={images.latofat}
       name={"Raximova Latofatxon Sobirjonovna"}
       urven={"Bo'lim boshlig'i"}
       time={"Dushanba - Juma | 14:00 - 16:00"}
       phone={"+99 871 207 09 95"}
       gamil={"latofat.2011@mail.ru"}
       wimg1={images.oybek}
       wname1={"Obidov Oybek Akmal o‘g‘li"}
       wurvern1={"Bosh mutaxasis"}
       wtel1={"+998 99 474 69 99"}
       wgmail1={"oybekobidov87@gmail.com"}
      />
      <div className='w-2/4 p-5  shadow-2xl'>
        <p className='text-xl font-bold text-grenn text-start'>
          Ilmiy–tadqiqotlar innovatsiyalar va pedagogik kadrlarni
          tayyorlash bo’limi quydagi vazifalarni bajaradi:
        </p>
        <p className='w-11/12 font-medium text-start'>
          Joriy yilning 31 yanvar kuni O‘zbek-Yapon yoshlar innovatsion markazida 2023
           yilda oliy ta’limdan keyingi ta’lim (PhD/DSc) hamda stajyor-tadqiqotchilik 
           institutlariga o‘qishga qabul qilingan tadqiqotchilar bilan universitet o‘quv 
           ishlari bo’yicha prorektor O.O. Zaripov hamda Ilmiy ishlar va innovatsiyalar 
           bo‘yicha prorektor S.B. Donayevlar uchrashuvi bo‘lib o‘tdi. Ilmiy-tadqiqot 
           izlanuvchilariga universitet rektori S.M. Turabdjanovning tabrigi o’qib eshittirildi.
          Yangi O‘zbekistonda – ilmiy-pedagogik kadrlarni zamon talablari asosida tayyorlash, 
          xorijiy olimlar va izlanuvchilar tadqiqotlari bilan uzviy tanishib borishlarini 
          ta’minlash hamda raqobatbardosh kadrlarni tayyorlashni nazarda tutib, tadqiqotchi-izlanuvchilar
           kelgusi faoliyatlariga vazifalar belgilandi.
          Tayanch doktorantlarning ilmiy izlanishlari samaradorligini amalga oshirish maqsadida 
          “Yosh olimlar Kengashi” tashkil etilib, iqtidorli tadqiqotchilar orasidan 1-bosqich 
          doktoranti Sh.Chorshanbiyev Kengash raisi etib belgilandi.
          Uchrashuvda tadqiqotchilarni qiziqtirgan savollarga prorektorlar tomonidan javoblar berildi.

        </p>
        <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
          Bo'lim nizomi
          <Image className='w-8 ml-2' src={download} alt='icon' />
        </button>
      </div>
    </div>
  );
}

export default Doktarant;
