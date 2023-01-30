import React from 'react';
import Link from 'next/link';
import { items4 } from '../../components/data/items';
import Boss from '../../components/boss/boss';
import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'
import download from './../../public/assets/svg/download.svg'
import { images } from '../../public/assets';
const Talaba = () => {
  return (
    <div className='flex flex-wrap w-full my-10 justify-around'>
      <h2 className='text-3xl w-full text-center  ml-10 uppercase font-bold text-grenn'>{items4[0]}</h2>
      <div className='w-full flex-wrap flex justify-evenly items-center my-5 '>
        {
          items4?.map((el, index) => {
            if (typeof el === 'object') {
              return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between' href={`${el.path}`}>
                {el.id}. {el.name}
                <Image className='w-6 h-6 rounded-full ml-5' src={strel} alt='icon' />
              </Link>
            }
          })
        }
      </div>
      <Boss
        image={images.qobil}
        name={"Muxiddinov Qobiljon Akmal o'g'li"}
        urven={"Bo'lim boshlig'i"}
        time={"Dushanba - Juma | 14:00 - 16:00"}
        phone={'+99 871 227 10 32'}
        gamil={'m_qobul@yahoo.com'}
        wname1={"Xudoberdiyev Shavkatjon Nurmatjon o'g'li"}
        wimg1={images.shavkatjon}
        wurvern1={"Bosh mutaxasis"}
        wtel1={"+998 91 329 09 59"}
        wgmail1={"xudoberdiyevshavkatjon@gmail.com"}
        wimg2={images.shagzod}
        wname2={"Rashidov Shohzodbek Abduvahobovich"}
        wurvern2={"Bosh mutaxasis"}
        wtel2={"+998971072692"}
        wgmail2={"shoh.rashidov2103@gmail.com"}
      />

      <div className='w-2/4 p-5  shadow-2xl'>
        <p className='text-xl font-bold text-grenn'>
          Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish boʼlimi:
        </p>
        <li>
          Iqtidorli talabalarni aniqlash, yo’nalishiga muvofik maqsadli tayyorlashni
          tashkil etish xamda ular faoliyatini rivojlantirishning kompleks dasturini ishlab chiqish;
        </li>
        <li>
          Talabalar ilmiy jamiyati faoliyatini tashkillashtirish va rivojlantirish.
        </li>
        <li>
          Iqtidorli yoshlarning intellektual saloxiyatini davriy ravishda aniqlab borish.
        </li>
        <li>
          Iqtidorli yoshlarni ilmiy-tadqiqot ishlari xamda kafedralar qoshida
          tashkil etilgan to’garaklarda doimiy ishtirokini ta’minlash;
        </li>
        <li>
        OTMda o’tkaziladigan mutaxassislik fanlari
         bo’yicha Respublika yoshlar olimpiadasining birinchi xamda yakuniy 
         bosqichlarini sifatli o’tkazilishini tashkil etish;
        </li>
        <li>
        Iqtidorli yoshlarni O’zbekiston Respublikasining davlat va Prezident stipendiyalariga, 
        iqtidorli yoshlar faoliyatini qo’llab-quvvatlovchi turli xil davlat, chet el grantlariga 
        tavsiya qilish xamda ishtirokini ta’minlash
        </li>
        <li>
        Xorijiy ta’lim muassasalari va ilmiy 
        markazlarida iqtidorli talabalarni ta’lim olishiga tavsiyalar berish;
        </li>
        <li>
        Iqtidorli yoshlar o’rtasida muntazam ravishda ilmiy  tadqiqotlar ishlarni  o’tkazib borish.
        </li>
        <li>
        Kafedralarda olib borilayotgan ilmiy-tadqiqot ishlarida  iqtidorli yoshlarning faol ishtirokini ta’minlash;
        </li>
        <li>
        O’zlashtirishi yuqori bo’lgan xamda ilmiy-tadqiqot ishlarida faol
         ishtirok etayotgan iqtidorli yoshlarni rag’batlantirish;
        </li>
        <li>
        Iqtidorli yoshlarning ilmiy texnik markazi va kichik akademiya 
        faoliyatini tashkil etish xamda ular faoliyatini rivojlantirish
        </li>
        <li>
        Iqtidorli yoshlarga  uchun dasturiy maxsulotlarni ixtiro uchun
         patent xujjatlarini rasmiylashtirishda amaliy ko’maklashish
        </li>
        <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
          Bo'lim nizomi
          <Image className='w-8 ml-2' src={download} alt='icon' />
        </button>
      </div>
    </div>
  );
}

export default Talaba;
