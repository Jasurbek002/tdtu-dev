import React from 'react';
import Accardion from '../../../components/accardion/accardion';

const Circles = () => {
    return (
        <div className='w-full flex flex-col items-center p-5'>
            <h1 className='text-2xl text-center w-full py-5 text-blue border-b-2'>To'garaklar</h1>
         
            <div className='px-2 py-5 w-10/12 flex items-center flex-col'>
            <Accardion
             name={'3D Modellash'}
            desc={"Bu to'garakda siz Compass, AutoCad, 3D max dasturlar bo'yicha ishlashni o'rganasiz"}
             />
            <Accardion 
            name={'Issiqlik energetika yulduzlari'} 
            desc={"Bu to'garakda siz Issiqlik energetikasi haqidagi bilimlarni egallaysiz"}
            />
            <Accardion
            name={'Konstruktor'} 
            desc={"Bu to'garakda siz Konstruktorlik haqidagi bilimlarni egallaysiz"}
            />
            <Accardion
             name={'Qum-gilli qoliplar asosidagi yangi texnologiyalar va jixozlar'} 
             desc={"Bu to'garakda siz KQum-gilli qoliplarga oid yangi texnolagiyalar bilan tanishasiz"}
            />
            <Accardion
            name={'Intellektual va raqamli metrologiya'} 
            desc={"Bu to'garakda siz Intellektual va raqamli metrologiya oid yangi bilimlarni o'rganasiz"}
            />
            <Accardion
            name={'Kompyuter olami'}
            desc={"Kompyuter olami ilmiy to'garagda kompiyuter muxandisligini o'rganasiz"}
            />
             <Accardion
            name={'Yosh mutaxassis'}
            desc={"Yosh mutaxassis ilmiy to'garagda siz O'z soxangizni mutaxasisi bo'lish sirlarni o'rganasiz"}
            />
            <Accardion
            name={'Yosh metallurg'}
            desc={"Yosh metallurg ilmiy to'garagda siz ushbu sohani chuqurroq o'rgansiz"}
            />
            <Accardion
            name={'Yosh prokatchilar'}
            desc={"Yosh prokatchilar ilmiy to'garagda ushbu sohaga doir amaliy ishlar qilasiz"}
            />
             <Accardion
            name={'Yosh texnik'}
            desc={"Yosh texnik ilmiy to'garagda ushbu sohaga doir amaliy ishlar qilasiz"}
            />
            <Accardion
            name={'Yosh elektr ta’minotchi'}
            desc={"Yosh elektr ta’minotchi ilmiy to'garagda ushbu sohaga doir amaliy ishlar qilasiz"}
            />
            <Accardion
            name={'Yosh tarixchi'}
            desc={"Yosh tarixchi ilmiy to'garagda tajribali ustozlardan ta'lim olasiz"}
            />
            <Accardion
            name={'Yosh energetik'}
            desc={"Yosh energetik ilmiy to'garagda siz o'z tajribangizni oshirasiz"}
            />
            <Accardion
            name={'Young engineering club'}
            desc={"Young engineering club ilmiy to'garagda siz sohaga oid mutahasizlar bilan fikir almashasiz"}
            />
             <Accardion
            name={'Yosh sanoatchilar'}
            desc={"Young engineering club ilmiy to'garagda siz sanoat korxonalariga ekskursiya qilasiz"}
            />
            </div>

    
       
         <p className='text-grenn text-xl top-0 w-10/12 p-5 bg-white shadow-3xl border-2 border-grenn'>
           TITning asosiy maqsadi talabalarning ilmiy-tadqiqot ishlarini 
rivojlantirishga yordam berish, nazariy va amaliy bilim darajasini oshirish, talabalar 
ilmiy to‘garagi doirasida innovatsion jarayonlarda ishtirok etish va boshqarish 
ko‘nikmalarini rivojlantirish, amaliy muammolarni hal qilishda loyiha faoliyatida 
ko‘nikmalarni shakllantirish, tadqiqot kompetensiyalarini shakllantirish uchun 
qulay shart-sharoitlarni yaratish va rivojlantirish, har bir o‘quvchiga o‘z qobiliyati 
va ehtiyojlariga mos ravishda o‘z shaxsiyatini ijodiy rivojlantirish huquqini amalga 
oshirish imkoniyatini ta’minlash, ilmiy-pedagogik kadrlar zaxirasini shakllantirish 
uchun istiqbolli va iqtidorli yoshlarni tanlashdan iborat.
2.2. TITning asosiy vazifalari quyidagilardan iborat:
- talabalarning ilmiy tayyorgarlik darajasini oshirishga yordam berish;
- talabalarnin ijodiy faoliyatni shakllantirish uchun sharoit yaratish;
- talabalarning kasbiy tayyorgarligi sifatini oshirish;
- talabalarga mustaqil ilmiy izlanishlar olib borishlariga amaliy yordam berish 
va ularning ilmiy ishlarini tashkiliy ta’minlash;
- iqtidorli va qobiliyatli talabalarni aniqlash, ta’lim jarayoni samaradorligini 
oshirishning dolzarb masalalarini hal etishda ularning ijodiy va intelektual 
salohiyatlaridan foydalanish;
- talabalarni Davlat ilmiy-texnik dasturlari doirasida amalga oshiriladigan 
loyihalar va xo‘jalik shartnomalari doirasidagi ilmiy-tadqiqot ishlarini bajarishga 
jalb etish;
- rejalashtirilgan ilmiy anjumanlar, tanlovlar, ko‘rgazmalar va boshqalar 
haqida talabalarni o‘z vaqtida xabardor qilish va ularda ishtirok etish imkoniyatini 
yaratish.
           </p>
        </div>
    );
}

export default Circles;
