import React, { Fragment } from "react";
import { Col, Row } from "../../../components/Ui";

import loborbg from "../../../public/assets/static/loborbg.jpg";
import Image from "next/image";
import Link from "next/link";
let rooms = [
  {
    id: 1,
    name: "Tadqiqot energiyasi va laboratoriyasi",
  },
  {
    id: 2,
    name: "Energiya auditi laboratoriyasi",
  },
  {
    id: 3,
    name: "Robototexnika va Nazarat-Ulchov laboratoriyalari",
  },
  {
    id: 4,
    name: "Автоматлаштирилган тизимларни бошқариш ",
  },
  {
    id: 5,
    name: "Муқобил энергия манбаалари лабораторияси ",
  },
  {
    id: 6,
    name: "Материалларни комплекс таҳлил қилиш лабораторияси ",
  },
  {
    id: 7,
    name: "Физик-кимёвий хусусиятлар модификацияси ",
  },
  {
    id: 8,
    name: "Иссиқлик-масса алмашинуви лабораторияси ",
  },
];

const Labaratorya = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url('${loborbg.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        className="w-full min-h-[100vh] flex flex-col items-center py-10"
      >
        <h2 className="text-white border-b-2 border-kokroq  text-2xl uppercase font-bold w-10/12 text-center ">
          Energiya tejamkor texnologiyalari, nazarat-ulchov va
          avtomatlashtirilgan tizimlar OTM lar aro ilmiy tadqiqot
          laboratoriyasi.
        </h2>
        <div className="flex w-10/12 flex-wrap justify-evenly gap-10 my-10">
          {rooms?.map((el) => {
            return (
              <Link
              // style={{backgroundColor:"white"}}
                href={"/tadqiqot/labaratoria/loboratories"}
                key={el.id}
                className="w-[250px] shadow-md shadow-blue h-[150px] rounded-md backdrop-blur-3xl cursor-pointer flex justify-center items-center border-2 transform duration-700 border-transparent hover:border-white"
              >
                <p className="text-xl text-center text-oqroq font-medium">
                  {el.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Labaratorya;
