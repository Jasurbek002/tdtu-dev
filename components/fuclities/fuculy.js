import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import mexanika from "../../public/assets/svg/mexanika.svg";
import mashina from "../../public/assets/svg/mashina.svg";
import issq from "../../public/assets/svg/issq.svg";
import muxandis from "../../public/assets/svg/muxandis.svg";
import asu from "../../public/assets/svg/asu.svg";
import neft from "../../public/assets/svg/neft.svg";
import geolog from "../../public/assets/svg/geolog.svg";
import energetc from "../../public/assets/svg/energetc.svg";

import styles from "./../../styles/fuculy.module.scss";
import { useEffect } from "react";

const Fuculy = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const fuculty = [
    { id: 1, name: "Mexanika fakulteti", img: mexanika },
    { id: 2, name: "Elelktr energetika fakulteti", img: energetc },
    { id: 3, name: "Mashinasozlik fakulteti", img: mashina },
    { id: 4, name: "Muhandislik texnologiyalari fakulteti", img: muxandis },
    { id: 5, name: "Neft va gaz fakulteti", img: neft },
    {
      id: 6,
      name: "Geologiya-qidiruv va kon-mettalurgiya  fakulteti",
      img: geolog,
    },
    { id: 7, name: "Elektronika va avtomatika fakulteti", img: asu },
    { id: 8, name: "Issiqlik energetikasi fakulteti", img: issq },
  ];

  return (
    <div
      className={styles.Fuculy}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="flex w-full items-center justify-start my-30 border-b-2 bg border-white">
        <h1 className="text-white text-2xl ml-5 uppercase font-mono font-bold">
          Fakultetlar
        </h1>
      </div>
      {fuculty.map((el, index) => {
        return (
          <div
            data-aos="fade-down-right"
            href="/"
            id="Link"
            key={index}
            className={
              "flex flex-col items-center justify-between items-center justify-around shadow-4xl h-32 w-64   relative p-2"
            }
          >
            <Image className={"w-10 h-10"} src={el.img} alt="icon" />
            <p className={"text-grenn font-bold text-center w-10/12 uppercase"}>
              {el.name}
            </p>
            <span className="absolute bottom-0 w-0  bg-blue h-1"></span>
          </div>
        );
      })}
    </div>
  );
};

export default Fuculy;
