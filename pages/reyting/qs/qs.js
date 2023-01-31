import Image from 'next/image';
import React from 'react';
import { images } from './../../../public/assets/index'
const Qs = () => {
    return (
        <div className='w-full flex items-center flex-col my-10'>
            <div className='bg-grenn p-5 flex w-11/12 items-center justify-between flex-wrap rounded-md'>
                <p className='text-xl w-full text-center text-grenn rounded-md font-medium bg-white mb-5 py-5'>Islom Karimov nomidagi
                    Toshkent davlat Texnika
                    universiteti xalqaro miqyosda e’tirof etildi
                </p>
                <Image
                    style={{
                        height: "550px"
                    }}
                    className='rounded-md w-full my-5  flex'
                    src={images.eeca} alt='images' />
                <p className='p-6 md:my-5 bg-white rounded-md 2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-full text-grenn'>
                    O‘zbekiston Respublikasi oliy ta’lim tizimini
                    2030 yilgacha rivojlantirish konsepsiyasida xalqaro
                    e’tirof etilgan tashkilotlar (Quacquarelli Symonds World University.
                    Times Higher Education yoki ARWU) reytingidagi birinchi 1000 ta oliy
                    ta’lim muassasasi ro‘yxatiga kamida 10 ta oliy ta’lim muassasasini kiritish
                    ko‘zda tutilgan. Bu borada Oliy va o‘rta maxsus ta’lim vazirligi hamda barcha
                    oliy ta’lim muassasalari maqsadli rejalar asosida ish boshladi va «Rivojlanayotgan
                    Yevropa va Markaziy Osiyo davlatlari oliy ta’lim muassasalarining (QS World University
                    Rankings: Emerging Europe and Central Asia) 2022 yilgi reytingi» e’lon qilindi.
                    Quvonarlisi, O‘zbekistonda QS mintaqaviy reytingida qayd etilgan universitetlar ketma-ket
                    ikkinchi yil o‘z o‘rnini yanada mustahkamladi va yuqoriroq pog‘onalarga ko‘tarildi.
                    Bu bugungi kunda «Yangi O‘zbekiston» oliy ta’lim tizimida samarali faoliyat yuritayotganidan,
                    ta’limga bo‘lgan munosabatni oshirayotganidan dalolat beradi.\
                </p>
            </div>
            <div className='bg-grenn p-5 flex w-11/12 items-center justify-between flex-wrap rounded-md mt-10'>
                <p className='text-xl w-full text-center text-grenn rounded-md font-medium bg-white mb-5 py-5'>Islom Karimov nomidagi
                    Nufuzli xalqaro QS reyting tashkiloti 2023-yil uchun reyting natijalarini
                    e’lon qildi
                </p>
                <Image
                    style={{
                        height: "550px"
                    }}
                    className='rounded-md w-full my-5'
                    src={images.asia} alt='images' />
                <p className='p-6 md:my-5 bg-white rounded-md 2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-full text-grenn'>
                    2023-yil uchun QS Osiyo Universitetlar reytingi (QS Asia University Rankings 2023) da ilk bor
                    respublikamizning 8 ta oliy ta’lim muassasasi TOP 1 000 talikdagi Osiyoning eng kuchli
                    universitetlari qatoridan joy oldi.
                    Xalqaro reyting tuzuvchi tashkilot Quacquarelli Symondsning bu yilgi reytingi
                    bugungi kunga qadar eng kattasi hisoblanib, o‘z ichiga 760 ta eng kuchli Osiyo
                    universitetlarini qamrab olgan. Shuningdek, reytingni shakllantirishdagi
                    asosiy koʻrsatkichlar sifatida akademik va ish beruvchining obroʻsi, PhD
                    darajasiga ega boʻlgan xodimlar soni hamda xalqaro talabalar ulushi kabi me’zonlar
                    birinchi marotaba kiritildi.
                    Qolaversa, QS Asia University 2023 reytingida Osiyo qit’asidagi universitetlar
                    joylashuviga qarab mintaqaviy o‘rinlari ham belgilangan bo‘lib, mamlakatimizning
                    yuqoridagi 8 ta oliy ta’lim muassasasi QS Markaziy Osiyo Universitetlar Reytingida
                    ham munosib o‘rinlarni egalladi.
                </p>
            </div>
            <div className='bg-grenn p-5 flex w-11/12 items-center justify-between flex-wrap rounded-md mt-10'>
                <p className='text-xl w-full text-center text-grenn rounded-md font-medium bg-white mb-5 py-5'>Islom Karimov nomidagi
                    Toshkent davlat texnika universiteti QS
                    Markaziy Osiyo Universitetlar reytingining Top 30 taligi kirdi
                </p>
                <p className='p-6 md:my-5 bg-white rounded-md 2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-full text-grenn'>
                    QS Asia University 2023 reytingida Osiyo qit’asidagi universitetlar joylashuviga qarab mintaqaviy
                    o‘rinlari ham belgilangan bo‘lib Toshkent davlat texnika universiteti QS Markaziy Osiyo Universitetlar
                    Reytingida #29 o'rinni egallab eng kuchli Markaziy Osiyo Universitetlari qatorida xam e’tirof etildi.
                    Bu yilgi reytinglarni tuzishda foydalaniladigan asosiy koʻrsatkichlar orasida akademik va ish beruvchining obroʻsi,
                    doktorlik darajasiga ega boʻlgan xodimlar soni va xalqaro talabalar ulushi kiritilgan.
                </p>
            </div>
        </div>
    );
}

export default Qs;
