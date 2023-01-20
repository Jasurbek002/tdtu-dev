import React from 'react';
import { useContext,useState } from 'react';
import { context } from '../context/context';
import Bigmodal from '../modal/bigmodal';

const AdminEconomic = () => {
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
        style={{
            'overflowY': "auto",
            'overflowX':'hidden',
            height: '600px',
            marginRight: modal ? '500px' : '10px',
        }}
        >
              <button
                onClick={() => stateHendler(true,'/loyha/add',0)}
                className='w-20 h-10 bg-blue text-white absolute right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'>
                Add
            </button>
           <div className='w-full flex flex-col items-center border-2 my-5 border-blue bg-white shadow-4xl rounded-md'>
           <div className='w-full w-11/12 flex justify-around  items-center p-4 '>
                <p className='w-2/3'>
                    <span className='text-xl text-blue' >
                        Loyha nomi:
                        </span>  х/ш. 4/19 Изучение 
                    естественного состава руд и вмещающих пород золоторудных зон №2,3,5 Окжетпесского рудного поля и геолого-структурные (комплексное)
                     изучение Кокпатас-Окжетпесского глубинного разлома (тренда)
                </p>
                <p>
                <span className='text-xl text-blue'>Kafedra:</span> Mashinasozlik kafedrasi
                </p>
                
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

export default AdminEconomic;
