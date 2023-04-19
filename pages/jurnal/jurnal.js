import React from "react";
import Link from "next/link";
import { items6 } from "../../components/data/items";

import Image from "next/image";

const Jurnal = () => {
  return (
    <div className="flex flex-wrap w-full my-10 justify-around">
      <h2 className="text-3xl w-full text-center  ml-10 uppercase font-bold text-grenn">
        {items6[0]}
      </h2>
      <div className="w-full flex-wrap flex justify-evenly items-center my-5">
        {items6?.map((el, index) => {
          if (typeof el === "object") {
            return (
              <Link
                key={index}
                className=" hover:bg-white py-5 my-5 w-[400px] h-[450px] shadow-lg text-grenn font-bold transforum ease-out duration-500 hover:scale-105  p-1 rounded-md m-2 flex flex-col items-center justify-between"
                href={`${el.path}`}
              >
                <p className="text-grenn text-center">{el.name}</p>
                <Image
                  className="w-[300px] h-[350px] "
                  src={el.img}
                  alt="icon"
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Jurnal;
