import React from 'react';
import Image from 'next/image';
import greenImg from './../../../public/assets/images/green.png'
import Link from 'next/link';
const Grenn = () => {
    return (
        <div className='w-full flex flex-col items-center my-10'>
            <div style={{ maxWidth: '1500px', height: "500px" }}>
                <Image className='w-full h-full' src={greenImg} alt='img' />
            </div>
            <p className='w-11/12 text-xl text-grenn my-10'>
                Toshkent davlat texnika universiteti <Link className='text-blue' href={'https://tdtu.uz/en/home-2-2/'} >reyting</Link> dunyo OTMlarining
                “Yashil reytingi “da
                Joriy yilning 12 – dekabrida “Greenmetric <Link className='text-blue' href={'https://greenmetric.ui.ac.id/rankings/overall-rankings-2022/tdtu.uz'}>greenmetric</Link> ”ning
                 jahon universitetlarining ekologiya va atrof-muhit barqarorligi boʻyicha
                  reytingini eʼlon qildi. Toshkent davlat texnika universiteti
                   ilk bor xalqaro yashil universitetlar reytingida 
                   ishtirok etib “Greenmetric” reyting mezonlarida 
                   quyidagi natijalarga erishildi:
                   🟢Universitet infratuzilmasi va
       atrof-muhit  (975 ball)

🟢Energiya samaradorligi va
       iqlim oʻzgarishi  (1250 ball)

🟢Chiqindilarni boshqarish (1050 ball)

🟢Suv resurslaridan
       samarali foydalanish  (600 ball)

🟢Transport siyosati (1225 ball)

🟢Ekologik taʼlim (960 ball).
Ushbu reytingda Toshkent davlat 
texnika universiteti 1050 ta OTMlar ichida umumiy 6060 ball toʻplab 
491-oʻrinni egalladi.
Dunyoda yagona boʻlgan ushbu reyting, universitetlarning 
atrof-muhit barqarorligi va ekologik infratuzilmasini baholaydi.
 Joriy yilda universitetlar tomonidan taqdim etilgan maʼlumotlarga koʻra, 
 AQSh, Yaponiya, Italiya, Yangi Zelandiya, Rossiya, Buyuk Britaniya, Fransiya kabi
  81 davlatlaridan 1050 ta OTM “Yashil reyting” universitetlar roʻyxatiga kiritildi.
            </p>
        </div>
    );
}

export default Grenn;
