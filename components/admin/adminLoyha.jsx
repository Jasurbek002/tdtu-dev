import React from 'react';
import { useContext,useState } from 'react';
import { context } from '../context/context';
import Bigmodal from '../modal/bigmodal';
import Modal from '../modal/modal';
const AdminLoyha = () => {
    const {modal,setModal} = useContext(context)
    const [id,setId] = useState(0)
    const [path,setPath] = useState('news')
    const stateHendler = (modal,pathname,thisid) =>{
        setModal(modal);
        setPath(pathname);
        setId(thisid);
  }
    return (
        <div
        className='w-full flex flex-col items-center p-12 gap-5 relative'
        >
             <button
                onClick={() => stateHendler(true,'/loyha/add',0)}
                className='w-20 h-10 bg-blue text-white absolute right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'>
                Add
            </button>
         <div className='w-11/12 border-2 border-blue bg-white shadow-4xl rounded-md my-4 p-2'>
         <div className='w-full  flex justify-around  items-center '>
            <p className='w-2/3'>
               Mavzu: Ф-ОТ-2021-497 "Фотоэлектрик иссиқлик батареялари асосидаги
                 қуёш когенератсион қурилмаларини яратишнинг
                  илмий асосларини ишлаб чиқиш "
            </p>
            <div>
                <h1 className=''>Mu'alif: Аюпов Қутуп Саутович</h1>
                <p>muddat: 2021-2025</p>
            </div>
        </div>   
        <div className='w-full flex items-center justify-around py-1'>
                    <button
                     onClick={(e) => stateHendler(true,'/loyha/edit',e.target.value)}
                        className='w-20 h-10 rounded-lg bg-[#FFD739] hover:text-white active:opacity-50 ml-auto'>
                        edit
                    </button>
                    <button
                        onClick={(e) => stateHendler(false,'/loyha/delete',e.target.value)}
                        className='w-20 h-10 rounded-lg bg-red hover:text-white active:opacity-50 ml-10 mr-10'>
                        delete
                    </button>
                </div>
         </div>
        <Bigmodal />
        </div>
    );
}

export default AdminLoyha;
