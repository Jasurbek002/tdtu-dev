import React from 'react';
import Accardion from '../../../components/accardion/accardion';

const Olimp = () => {
    return (
        <div className='w-full flex flex-col items-start p-5'>
            <h1 className='text-2xl text-center w-full my-5 text-blue'>Olimpiadalar</h1>
            <Accardion 
            name={'1.Respublika fan olimpiadalari'}
            desc={"Universitet sararlash bosqichidan o'tganlar uchun"}
            />
            <Accardion 
            name={'2.Universitet fan olimpiadalari'} 
            desc={"Universitet o'quvchilari uchun"}
            />
            <Accardion 
            name={'3.Xalqaro fan olimpiadalari'} 
            desc={"Respublika Bosqichidan o'tganlar uchun"}
            />
            <Accardion 
            name={'4.Maktab bitiruvchilari uchun kampuytr'} 
            desc={"Maktab bitruvchilari uchun"}
            />
        </div>
    );
}

export default Olimp;
