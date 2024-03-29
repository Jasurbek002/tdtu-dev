import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { useRouter } from "next/router";
import {
  items1,
  items2,
  items3,
  items4,
  items5,
  items6,
} from "../components/data/items";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const router = useRouter();
  return (
    <div className={styles.Navbar}>
      <h1 className={styles.Navbar__title}>ILMIY FAOLIYAT</h1>
      <div onClick={() => setOpen((x) => !x)} className={styles.Navbar__toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        style={{
          // display: open ? "blok" : "none",
        }}
        className={styles.Navbar__nav}
      >
        <li key={Math.random()} className={styles.Navbar__nav__item}>
          <Link
            key={Math.random()}
            className={
              router.pathname == "/"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/"
          >
            Bosh sahifa
          </Link>
        </li>

        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/doctarant/doktarant"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/doctarant/doktarant"
          >
           Doktorantura
          </Link>
          <div className={styles.Navbar__nav__item__menu}>
            <p key={Math.random()}>{items1[0]}</p>
            {items1?.map((el, index) => {
              return (
                <Link
                  className={styles.Navbar__nav__item__menu__links}
                  key={index}
                  href={`${el.path}`}
                >
                  {" "}
                  {el.name}
                </Link>
              );
            })}
          </div>
        </li>
        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/tadqiqot/tadqiqot"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/tadqiqot/tadqiqot"
          >
            Ilmiy-tadqiqot
          </Link>
          <div className={styles.Navbar__nav__item__menu}>
            <p key={Math.random()}>{items2[0]}</p>
            {items2?.map((el, index) => {
              return (
                <Link
                  key={index}
                  className={styles.Navbar__nav__item__menu__links}
                  href={`${el.path}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </li>

        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/reyting/reyting"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/reyting/reyting"
          >
            {" "}
            Reyting{" "}
          </Link>
          <div className={styles.Navbar__nav__item__menu}>
            <p key={Math.random()}>{items3[0]}</p>
            {items3?.map((el, index) => {
              return (
                <Link
                  key={index}
                  className={styles.Navbar__nav__item__menu__links}
                  href={`${el.path}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </li>

        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/talaba/talaba"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/talaba/talaba"
          >
            Iqtidorli-talabalar
          </Link>
          <div className={styles.Navbar__nav__item__menu}>
            <p key={Math.random()}>{items4[0]}</p>
            {items4?.map((el, index) => {
              return (
                <Link
                  key={index}
                  className={styles.Navbar__nav__item__menu__links}
                  href={`${el.path}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </li>
        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/tijorat/tijorat"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/tijorat/tijorat"
          >
            Tijoratlashtirish
          </Link>
          <div className={styles.Navbar__nav__item__menu}>
            <p key={Math.random()}>{items5[0]}</p>
            {items5?.map((el, index) => {
              return (
                <Link
                  key={index}
                  className={styles.Navbar__nav__item__menu__links}
                  href={`${el.path}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </li>
        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/jurnal/jurnal"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/jurnal/jurnal"
          >
            Ilmiy jurnallar
          </Link>
          <div className={styles.Navbar__nav__item__menu}>
            <p key={Math.random()}>{items6[0]}</p>
            {items6?.map((el, index) => {
              return (
                <Link
                  key={index}
                  className={styles.Navbar__nav__item__menu__links}
                  href={`${el.path}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </li>
        <li className={styles.Navbar__nav__item}>
          <Link
            className={
              router.pathname == "/inno/inno"
                ? styles.Navbar__nav__item__link
                : styles.Navbar__nav__item__unlink
            }
            href="/inno/inno"
          >
            INNO Texnopark
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
