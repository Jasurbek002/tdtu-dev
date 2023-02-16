import React from 'react';
import { ThCenter,TdCenter } from '../../components/Ui/table';
const Independent = () => {
    return (
        <div className='w-full flex flex-col items-center py-10'>
        <p className='text-xl font-bold w-full text-center text-grenn mb-10'>Mustaqil Izlanuvchilar</p>

        <div className='w-11/12 p-5 flex flex-col items-center rounded-lg shadow-2xl bg-kokroq'>
            <p>Mustaqil izlanuvchilar Ro'yxati</p>
         <table>
         <thead className="text-md">
           <tr>
             <ThCenter>Id</ThCenter>
             <ThCenter>F.I.O</ThCenter>
             <ThCenter>Ixtisoslik</ThCenter>
             <ThCenter >Ish joyi</ThCenter>
             </tr>
             </thead>

           <tbody>
           <tr
            style={{
                background: 2 % 2 ? "#F4F4F4" : "",
              }}
           >
             <TdCenter>1</TdCenter>
             <TdCenter>Kamolov Ahmadjon Abduraximovich</TdCenter>
             <TdCenter>01.04.04 - fizik Elektronika</TdCenter>
             <TdCenter >Samarqand davalar arxitektura va qurulish inistituti dekan o'rinbosari</TdCenter>
             </tr>
             <tr
            style={{
                background: 2 % 2 ? "#F4F4F4" : "",
              }}
           >
             <TdCenter>1</TdCenter>
             <TdCenter>Kamolov Ahmadjon Abduraximovich</TdCenter>
             <TdCenter>01.04.04 - fizik Elektronika</TdCenter>
             <TdCenter >Samarqand davalar arxitektura va qurulish inistituti dekan o'rinbosari</TdCenter>
             </tr>
             <tr
            style={{
                background: 2 % 2 ? "#F4F4F4" : "",
              }}
           >
             <TdCenter>1</TdCenter>
             <TdCenter>Kamolov Ahmadjon Abduraximovich</TdCenter>
             <TdCenter>01.04.04 - fizik Elektronika</TdCenter>
             <TdCenter >Samarqand davalar arxitektura va qurulish inistituti dekan o'rinbosari</TdCenter>
             </tr>
           </tbody>
         </table>
        </div>

    </div>
    );
}

export default Independent;
