import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import theImage from './../../../public/assets/images/the.jpg'

const The = () => {
    return (
        <div className='w-full flex flex-col items-center my-10'>
            <div style={{maxWidth:'1500px',height:"500px"}}>
                <Image className='w-full h-full' src={theImage} alt='img' />
            </div>
            <p className='w-11/12 text-xl text-grenn my-10'>
                Buyuk Britaniyaning nufuzli reyting
                tashkiloti – Times Higher Education
                agentligi o‘zining World University
                Rankings – 2023 reyting natijalarini
                28 ta OTM World University Rankings – 2023
                xalqaro reytingida “reporter” maqomiga ega bo‘ldi
                E’tiborlisi, bu yil respublikamizning yana 18 ta oliy ta’lim muassasasi “reporter” maqomida qayd etilishi bilan TOP-1 000 talik reytingdan joy olish uchun davogarlar o‘tgan yilgi {
                    <Link
                     className='text-blue'
                 href={'https://www.timeshighereducation.com/world-university-rankings/2022#!/page/0/length/25/locations/UZB/sort_by/rank/sort_order/asc/cols/stats'}>Ko'rish</Link>
                } 10 tadan 28 taga yetdi.
                Ushbu reytingda universitetlarning 4 ta yo‘nalishdagi samaradorlik ko‘rsatkichlari baholandi: o‘qitish, tadqiqot, ta’lim sifati va xalqaro istiqbollar.
                Mazkur 28 ta oliy ta’lim muassasasi THEning nufuzli reytinglariga kirish uchun nomzod sifatida tanlanib, bunda reyting agentligi ularga yaqindan yordam beradi.
                Ma’lumot o‘rnida, joriy yil ushbu reytingda 1 799 ta universitet qayd etildi, bundan tashqari 526 ta universitet “reporter”, ya’ni da’vogar universitetlar nominatsiyasiga ega bo‘ldi.
            </p>
        </div>
    );
}

export default The;
