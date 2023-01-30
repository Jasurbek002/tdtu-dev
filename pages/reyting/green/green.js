import React from 'react';
import Image from 'next/image';
import greenImg from './../../../public/assets/images/green.png'
import Link from 'next/link';
const Grenn = () => {
    return (
        <div className='w-full flex flex-wrap justify-around items-center my-10'>
            <h1 className='text-xl font-bold w-full text-center text-grenn'>GREENMETRIC</h1>
            <div style={{ maxWidth: '600px', height: "580px" }}>
                <Image className='w-full h-full rounded-md' src={greenImg} alt='img' />
            </div>
            <div className='w-2/4 shadow-2xl p-4 rounded-md my-10'>
                <p className='text-xl font-medium text-grenn text-start'>
                    Toshkent davlat texnika universiteti <Link className='text-blue' href={'https://tdtu.uz/en/home-2-2/'} >reyting</Link> dunyo OTMlarining
                    “Yashil reytingi “da
                </p>
                <p className='text-xl text-grenn text-start'>
                    Joriy yilning 12 – dekabrida “Greenmetric <Link className='text-blue' href={'https://greenmetric.ui.ac.id/rankings/overall-rankings-2022/tdtu.uz'}>greenmetric</Link> ”ning
                    jahon universitetlarining ekologiya va atrof-muhit barqarorligi boʻyicha
                    reytingini eʼlon qildi. Toshkent davlat texnika universiteti
                    ilk bor xalqaro yashil universitetlar reytingida
                    ishtirok etib “Greenmetric” reyting mezonlarida
                    quyidagi natijalarga erishildi:
                </p>
                <li>
                    🟢Universitet infratuzilmasi va
                    atrof-muhit  (975 ball)
                </li>
                <li>
                🟢Energiya samaradorligi va
                iqlim oʻzgarishi  (1250 ball)
                </li>
                <li>
                🟢Chiqindilarni boshqarish (1050 ball)
                </li>
                <li>
                🟢Suv resurslaridan
                samarali foydalanish  (600 ball)
                </li>
                <li>
                🟢Transport siyosati (1225 ball)
                </li>
                <li>
                🟢Ekologik taʼlim (960 ball).
                </li>
                <p>
                Ushbu reytingda Toshkent davlat
                texnika universiteti 1050 ta OTMlar ichida umumiy 6060 ball toʻplab
                491-oʻrinni egalladi. Dunyoda yagona boʻlgan ushbu reyting, universitetlarning
                atrof-muhit barqarorligi va ekologik infratuzilmasini baholaydi.
                Joriy yilda universitetlar tomonidan taqdim etilgan maʼlumotlarga koʻra,
                AQSh, Yaponiya, Italiya, Yangi Zelandiya, Rossiya, Buyuk Britaniya, Fransiya kabi
                81 davlatlaridan 1050 ta OTM “Yashil reyting” universitetlar roʻyxatiga kiritildi.
                </p>
            </div>
        </div>
    );
}

export default Grenn;
