import React, { useContext } from 'react';
import { context } from '../context/context';
import { Button } from '@mui/material';
import Modal from '../modal/modal';
import { useState } from 'react';

const AdminPartner = () => {
    const { modal, setModal } = useContext(context)
    const [id,setId] = useState(0)
    const [path,setPath] = useState('partners')
    const stateHendler = (modal,pathname,thisId) =>{
       setModal(modal)
       setPath(pathname)
       setId(thisId)
    }
    return (
        <div
            style={{
                'overflowY': "auto",
                'overflowX':'hidden',
                height: '600px',
                marginRight: modal ? '500px' : '10px',
            }}
            className='w-full flex items-center justify-evenly flex-wrap p-10 gap-5 relative'
        >
              <button
                onClick={() => stateHendler(true,'/partners/add',0)}
                className='w-20 h-10 bg-blue text-white absolute right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'>
                Add
            </button>
            <div className='w-64 h-60 py-5 bg-white flex flex-col items-center shadow my-5 hover:scale-105'>
                <img className='w-36 h-36' src={'https://picsum.photos/200/300'} alt='icon' />

                <div className='w-full flex items-center justify-around py-1 mt-5'>
                    <button
                         onClick={(e) => stateHendler(true,'/partners/edit',e.target.value)}
                        className='w-20 h-10 rounded-lg bg-[#FFD739] hover:text-white active:opacity-50'>
                        edit
                    </button>
                    <Button variant='contained' href="https://www.edu.uz/uz">Link</Button>
                    <button
                        // onClick={(e) => stateHendler(false,'/news/delete',e.target.value)}
                        className='w-20 h-10 rounded-lg bg-red hover:text-white active:opacity-50'>
                        delete
                    </button>
                </div>
            </div>
        <Modal
        inp1={true}
        inp2={false}
        inp3={false}
        inp4={false}

        />
        </div>
    );
}

export default AdminPartner;
