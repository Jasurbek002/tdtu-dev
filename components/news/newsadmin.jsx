
import React from 'react';
import { useContext,useState } from 'react';
import { context } from '../context/context';
import Modal from './../modal/modal'
const Newsadmin = ({ }) => {
    const { modal, setModal } = useContext(context)
    const [id,setId] = useState(0)
    const [path,setPath] = useState('news')
  const stateHendler = (modal,pathname,thisid) =>{
        setModal(modal);
        setPath(pathname);
        setId(thisid);
  }
    return (
        <div
            style={{ 
                'overflowY': "auto",
                 height: '600px',
                 marginRight: modal ? '500px': '10px',
                 overflowX:'hidden'
                }}
            className='w-full flex items-center justify-evenly flex-wrap p-10 gap-5 relative'
        >
            <button
                onClick={() => stateHendler(true,'/news/add',0)}
                className='w-20 h-10 bg-blue text-white absolute right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'>
                Add
            </button>


            <div
                style={{ backgroundColor: 'lightskyblue' }}
                className='mb-5 w-72 flex flex-col items-center  shadow-4xl  rounded-md'>
                <img
                    className='w-full h-40 rounded-md'
                    src={'https://picsum.photos/200/300'}
                    alt='card img' />
                <h4 className='text-xl my-2 mx-2'>songi yangilik</h4>
                <p className=' mx-2'>bu universitetimizda rektoz bilan uchrashuv bo'lib
                    o'tdi unda universitetimiz talabalari faol qatnshdi
                </p>
                <div className='w-full flex items-center justify-around py-1'>
                    <button
                     onClick={(e) => stateHendler(true,'/news/edit',e.target.value)}
                        className='w-20 h-10 rounded-lg bg-[#FFD739] hover:text-white active:opacity-50'>
                        edit
                    </button>
                    <button
                        onClick={(e) => stateHendler(false,'/news/delete',e.target.value)}
                        className='w-20 h-10 rounded-lg bg-red hover:text-white active:opacity-50'>
                        delete
                    </button>
                </div>
            </div>

            <Modal 
            inp1={true}
            inp2 ={true}
            inp3={true}
            inp4={true}
             pathname={path} />

        </div>
    );
}

export default Newsadmin;
