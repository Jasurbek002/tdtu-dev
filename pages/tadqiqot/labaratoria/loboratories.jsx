import Image from 'next/image';
import React, { Fragment } from 'react';
import itemImg from "../../../public/assets/static/items.jpg"
import { Row } from '../../../components/Ui';

import { pdflink } from "../../../components/data/pdflink";

const Loboratories = () => {
    return (
       <Fragment>
        <Row styles={'bg-white'}>
            <div className='w-[500px] p-2 flex flex-col items-center'>
                  {
                    pdflink?.map((el) => {
                        return <div className='bg-grenn rounded-md flex items-center w-full my-2 h-[50px] justify-between px-1'>
                           <p className='text-white lowercase text-sm text-center'>{el.name}</p>
                           <a href='../../../public/assets/pdfs/lob1.pdf' download className='w-[100px] h-[30px] text-center bg-white text-grenn rounded-sm px-1 hover:bg-blue cursor-pointer hover:text-white'>
                            download
                           </a>
                        </div>
                    })
                  }
            </div>
            <div className='w-[500px] h-[500px]'>
               <Image className='w-full h-full' src={itemImg} alt='img'/>
            </div>
        </Row>
       </Fragment>
    );
}

export default Loboratories;
