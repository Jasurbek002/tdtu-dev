// import Image from 'next/image';
// import React, { useState,useContext } from 'react';
// import styles from './../../styles/admin.module.scss'

// import logotip from './../../public/assets/svg/logo.svg'
// import homeimg from './../../public/assets/svg/home.svg'
// import userimg from './../../public/assets/svg/user.svg'
// import settingsimg from './../../public/assets/svg/mexanika.svg'

// import { category } from '../data/category';
// import Slider from '../carusel/slider';
// import Newsadmin from '../news/newsadmin';
// import AdminPartner from './adminPartner';
// import AdminLoyha from './adminLoyha';
// import AdminEconomic from './adminEconomic';
// import AdminSpin from './adminSpin';
// import { context } from '../context/context';
// import Loading from '../loading/loading';
// import TostMessage from '../tost/tostMessage';


// const AdminBar = () => {
// const [btn,setBtn] = useState(1)
// const {data} = useContext(context)

// console.log(data);
//     return (
//         <div className={styles.Admin}>
//             <div className={styles.Admin__sitebar}>
//              <div className={styles.Admin__sitebar__logo}>
//                 <Image src={logotip} alt='logotip image'/>
//                 <h1>TDTU</h1>
//              </div>
//              <ul className={styles.Admin__sitebar__items}>
//                 <li className={styles.Admin__sitebar__items__item}>
//                     <p>Home</p>
//                     <Image src={homeimg} alt='icon' />
//                 </li>
//                 <li className={styles.Admin__sitebar__items__item}>
//                     <p>Admins</p>
//                     <Image src={userimg} alt='icon' />
//                 </li>
//                 <li className={styles.Admin__sitebar__items__item}>
//                     <p>Settings</p>
//                     <Image src={settingsimg} alt='icon' />
//                 </li>
//              </ul>
//             </div>
//             <div className={styles.Admin__menu}>
//                <div className={styles.Admin__menu__nav}>
//                 <input  type="text" placeholder='search...'/>
//                 <p>SupperAdmin</p>
//                </div>
//                <div className={styles.Admin__menu__category}>
//                   {
//                     category?.map((el) =>{
//                         return <button 
//                         onClick={(e) => setBtn(e.target.value)}
//                         key={el.id} 
//                         value={el.id}
//                         >
//                                  {el.name}
//                         </button>
//                     })
//                   }
//                </div>
               
//                <div className={styles.Admin__menu__products}>
//             { btn ==1 ? <Slider /> : ''}
//                { btn == 2 ? <Newsadmin /> : ''}
//               {btn == 3 ? <AdminPartner /> : ''}
//               {btn == 4 ? <AdminLoyha /> : ''}
//                {btn == 5 ? <AdminEconomic /> : ''}
//                {btn == 7 ? <AdminSpin /> : ''}
//                </div>
               
//             </div>
//             <Loading />
//             <TostMessage />
//         </div>
//     );
// }

// export default AdminBar;
