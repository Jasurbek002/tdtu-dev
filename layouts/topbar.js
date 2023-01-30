import Image from 'next/image'
import Link from 'next/link';
import styles from './../styles/topbar.module.scss'
import settings from './../public/assets/settings.module.scss'
import logo from '../public/assets/images/LOGO.png'
import searchicon from '../public/assets/svg/search.svg'
import { useContext } from 'react';
import { context } from '../components/context/context';

const Topbar = () => {
    const {lang,setLang} = useContext(context)
    return (
 
            <div
            style={{display:'flex'}}
            className={styles.Topbar}>
                <Link className={styles.Topbar__logo} href='/'>
                    <Image className={styles.Topbar__logo__img} src={logo} alt='logotip image' />
                    <h2 className={styles.Topbar__logo__title}>
                     TOSHKENT DAVLAT TEXNIKA UNIVERSITETI
                </h2>
                </Link>
                   <h1 className={styles.Topbar__name}>
                    ILMIY FAOLIYAT
                   </h1>
               <div className={styles.Topbar__btngroup}>
               <div className={styles.Topbar__btngroup__lang}>
                <div 
                style={{
                    transition:lang ? 'all 1s ease-in-out' : 'all 1s ease-in-out',
                    right:lang ? '7px': '',
                    left:lang ? '7px' : ''
                }}
                className={styles.Topbar__btngroup__lang__round}></div>
                  <p 
                  onClick={() => setLang(true)}
                  >uz</p>  
                  <p
                  onClick={() => setLang(false)}
                  >en</p>
               </div>

                <buttom className={styles.Topbar__btngroup__btn}>
                    Search
                    <Image
                     style={{width:'30px',cursor:'pointer'}}
                      src={searchicon}
                       alt='search icon'/>
                </buttom>

               </div>
               
            </div>

    );
}

export default Topbar;
