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
        <div className='flex flex-wrap w-full my-10 justify-around'>
            <h2 className='text-3xl w-full text-center  ml-10 uppercase text-grenn'>{items3[0]}</h2>
          <div className='w-full flex justify-evenly items-center my-5'>
          {
            items3?.map((el,index) =>{
            if(typeof el ==='object'){
                return <Link key={index} className='bg-white shadow-lg text-blue transforum ease-out duration-500 hover:scale-105 w-40 p-1 rounded-md m-2 flex items-center justify-between ' href='/'>
                {el.id}. {el.name}
                 <Image className='w-8 h-8 rounded-full' src={strel} alt='icon'/>
             </Link>
            }
            })
           } 
          
          </div>
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
           wimg2={images.shagzod}
           wname2={"Rashidov Shohzodbek Abduvahobovich"}
           wurvern2={"Bosh mutaxasis"}
           wtel2={"+998971072692"}
           wgmail2={"shoh.rashidov2103@gmail.com"}
             />

             <div className='w-2/4 p-5  shadow-2xl'>
                <p className='text-xl font-bold text-grenn'>
                Тошкент давлат техника универстети 
                Халқаро рейтинг бўлими қуйидаги вазифаларни бажаради:
                </p>
                <li>
                рейтинг кўрсаткичларига таъсир этувчи параметрларни доимий назорат
                 қилиш ва уларнинг ҳолати бўйича университет раҳбариятини огохлантириб бориш;
                </li>
                <li>
                факультетлар ва кафедралар кесимида университетнинг халқаро рейтинга қўшаётган
                 ҳиссаси кўрсаткичларини аниқлаб бориш;
                </li>
                <li>
                доимий равишда кафедралар, бўлимларнинг ходимларини халқаро рейтинг тизими талаблари билан таништириб бориш ҳамда семинарлар
                 ташкил этиш; университетда фаолият юритаётган профессор-ўқитувчилар сонини ҳисоблаш учун статистика ҳисоботларини тайёрлаш;
                </li>
                <li>
                хорижий профессор-ўқитувчилар сонини ҳисоблаш учун статистика ҳисоботларини тайёрлаш;
                </li>
                <li>
                	университетда фаолият юритаётган фан доктори, фан номзоди ҳамда PhD даражасига эга бўлган 
                    профессор-ўқитувчилар сонини ҳисоблаш учун статистика ҳисоботларини тайёрлаш;
                </li>
                <li>
                университетда таҳсил олаётган маҳаллий ва хорижий бакалавриатура талабалари сонини ҳисоблаш 
                учун статистика ҳисоботларини тайёрлаш; университетда таҳсил олаётган 
                </li>
                <li>
                ушбу соҳада амалга оширилаётган фаолиятларнинг натижаларини
                 университет веб-сайти ва университетнинг ижтимоий тармокларида акс эттириб бориш.
                </li>
                <button className='ml-1 py-5 px-10 shadow-lg bg-white mt-5 flex items-center border-2 border-grenn text-grenn hover:border-blue'>
            Bo'lim nizomi
            <Image className='w-8 ml-2' src={download} alt='icon' />
           </button>
             </div>
        </div>
    );
}

export default Reyting;
