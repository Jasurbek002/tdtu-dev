import React from 'react';
import Link from 'next/link';
import { items2 } from '../../components/data/items';
import Image from 'next/image';
import strel from './../../public/assets/images/strel.png'
import download from './../../public/assets/svg/download.svg'
import Boss from '../../components/boss/boss';
import { images } from '../../public/assets/index.js';
const Tadqiqot = () => {
    return (
        <div className='flex flex-wrap w-full my-20 justify-around'>
            <h2 className='text-3xl w-full text-center  ml-10 uppercase font-bold text-grenn'>{items2[0]}</h2>
          <div className='w-full flex-wrap flex justify-evenly items-center my-5'>
          {
            items2?.map((el,index) =>{
            if(typeof el ==='object'){
                return <Link key={index} className='bg-kokroq shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex items-center justify-between' href='/'>
                {el.id}. {el.name}
                 <Image className='w-6 h-6 rounded-full ml-5' src={strel} alt='icon'/>
             </Link>
            }
            })
           } 
          
          </div>
          <Boss
           image={images.timur}
           name={"Daminov Temurbek zokir o'g'li"}
           urven={"Kichik ilmiy xodimi"}
           time={"Dushanba - Juma | 14:00 - 16:00"}
           phone={"+998 90 008 61 01"}
           gamil={"dt3252000@gmail.com"}
           wimg1={images.jamal}
           wname1={"Jamoliddin Samariddinov"}
           wurvern1={"Hr maneger"}
           wtel1={"+99 895 555 50 59"}
           wgmail1={"jamoliddinsamariddinov059@gmail.com"}
           />
          <div className='w-2/4 p-5  shadow-2xl'>
          <p className='text-xl font-bold text-grenn text-start'>
          Quyidagilar Ilmiy tadqiqot qismining
           asosiy vazifalari hisoblanadi:
           </p>
           <li>
           Universitet jamoasining, ilmiy bo'limlarining va alohida 
           xodimlarining mavjud ilmiy salohiyatidan to'la va samarali 
           foydalanish hamda salohiyatini yanada oshirish maqsadida, 
           ular uchun kerakli iqtisodiy, ijtimoiy va ishlab chiqarish 
           shart-sharoitlarini yaratib berish bo’yicha takliflar berish;
           </li>
           <li>
           fan va texnologiyalarni rivojlantirishning ustuvor yo'nalishlariga 
           muvofiq ilmiy faoliyatga oid davlat dasturlari doirasida ilmiy-tadqiqot 
           ishlariga davlat buyurtmasi talablari asosida bajarilishi mo'ljallangan 
           fundamental, amaliy, innovatsion, startap va boshqa loyihalarni amalga 
           oshirish ishlarini muvofiqlashtirish;
           </li>
           <li>
           iqtisodiyot sohalarini rivojlantirishdagi ilmiy-texnologik vazifalarni bajarishga 
           yo'naltirilgan amaliy ilmiy-tadqiqot ishlarini olib borish hamda, chet el ilg'or 
           texnologiyalarini sinovdan o'tkazish va joriy etish uchun kerakli shart-sharoitlar 
           yaratishga ko’maklashish;
           </li>
           <li>
           ilmiy-tadqiqot ishlarining ilmiy-texnik samadorligini oshirish, buning uchun o'quv 
           jarayonlariga ilmiy-tadqiqot ishlari natijalarini faol qo'llash hamda bu ishlarga 
           magistratura va bakalavriat talabalarini jalb etish yo'li bilan  kadrlar tayyorlash
            sifatini oshirish, ilmiy maktablar va yuqori malakali ilmiy jamoalarni shakllantirish;
           </li>
           <li>
           Universitetning texnik va ishlab chiqarish bazasini rivojlantirishda, ilmiy xodimlari 
           malakasi va kasb mahorati darajasini ko'tarishda ko'maklashish;
           </li>
           <li>
           yirik ilmiy-texnik vazifalarni birgalikda yechish va oliy ta'lim maskanlarida yaratilgan 
           ishlanmalarni ishlab chiqarishga keng joriy etish maqsadida, oliy ta'lim muassasalari va 
           ilmiy tadqiqot institutlari orasidagi ilmiy-texnik hamkorlikning istiqbolli shakllarini 
           rivojlantirish;
           </li>
           <li>
           het el o'quv yurtlari va ilmiy markazlari bilan halqaro ilmiy-texnik hamkorlikni kengaytirish.
           </li>
        </div>
        </div>
    );
}

export default Tadqiqot;
