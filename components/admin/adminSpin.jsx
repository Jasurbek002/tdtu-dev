import React from 'react';
import { useContext,useState } from 'react';
import { context } from '../context/context';
import Bigmodal from '../modal/bigmodal';

const AdminSpin = () => {
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
                onClick={() => stateHendler(true,'/partners/add',0)}
                className='w-20 h-10 bg-blue text-white absolute right-5 top-5 rounded-md hover:border-2 border-grenn active:opacity-60'>
                Add
            </button>
           <div className='w-11/12 shadow-md my-5 p-5 rounded-lg bg-white'>
                <p>
                    Аддитив технологияларни ривожлантириш, такомиллаштириш ва
                    соҳалар кесимида тадбиқ этиш
                    бўйича"Inno group" МЧЖ инновацион корхонасини ташкил этиш
                    Ишлаб чиқариш кластерини яратиш ва ишга тушириш, хом-ашё
                    маҳсулотларини, 3D принтрларни ишлаб чиқариш, 3D
                    лабораторияда хизмат кўрсатиш ва 3D моделлаштириш
                    кластерининг асосий йўналишларини аниқлаш
                    Хом-ашё маҳсулотларини ишлаб чиқариш экструзион линиясини
                    такомиллаштириш ва ишга тушириш учун қўшимча полимер гранулаларни
                    характеристикаларини ўрганиш ва ишга тушириш
                    Корхона фаолиятини йўлга қўйиш ва 3D принтерларни соҳалар бўйича
                    (халқ таълими тизими ва бошқ.) тадбиқ этиш хизматларини кўрсатишни кенгайтириш
                </p>

                <div className='w-full flex justify-between '>
                    <p className='text-xl text-grenn'>Korxona: "Inno group" МЧЖ</p>
                    <p className='text-xl text-grenn'>Ma'sul: Тўхтамуратов Б.Т.</p>
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

export default AdminSpin;
