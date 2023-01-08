import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './../../styles/link.module.scss'

const MyLink = ({path,title,icon}) => {
    return (
        <Link className={styles.Link} href={`${path}`} >
           { icon ? <Image className={styles.Link__img} src={icon} alt='icon' /> : '' }
            <p className={styles.Link__title}>{title}</p>
        </Link>
    );
}

export default MyLink;

