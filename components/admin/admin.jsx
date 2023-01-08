import Image from 'next/image';
import React from 'react';
import styles from './../../styles/admin.module.scss'

import logotip from './../../public/assets/svg/logo.svg'
import homeimg from './../../public/assets/svg/home.svg'
import userimg from './../../public/assets/svg/user.svg'
import settingsimg from './../../public/assets/svg/mexanika.svg'

import { category } from '../data/category';


const AdminBar = () => {

    return (
        <div className={styles.Admin}>
            <div className={styles.Admin__sitebar}>
             <div className={styles.Admin__sitebar__logo}>
                <Image src={logotip} alt='logotip image'/>
                <h1>TDTU</h1>
             </div>
             <ul className={styles.Admin__sitebar__items}>
                <li className={styles.Admin__sitebar__items__item}>
                    <p>Home</p>
                    <Image src={homeimg} alt='icon' />
                </li>
                <li className={styles.Admin__sitebar__items__item}>
                    <p>Admins</p>
                    <Image src={userimg} alt='icon' />
                </li>
                <li className={styles.Admin__sitebar__items__item}>
                    <p>Settings</p>
                    <Image src={settingsimg} alt='icon' />
                </li>
             </ul>
            </div>
            <div className={styles.Admin__menu}>
               <div className={styles.Admin__menu__nav}>
                <p>SupperAdmin</p>
               </div>
               <div className={styles.Admin__menu__category}>
                  {
                    category?.map((el) =>{
                        return <button key={el.id}>
                                 {el.name}
                        </button>
                    })
                  }
               </div>
            </div>
        </div>
    );
}

export default AdminBar;
