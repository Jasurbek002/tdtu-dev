import Image from "next/image";
import React from "react";
import { images } from "../public/assets";

const News = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="text-3xl font-bold w-10/12 text-center my-5 text-grenn">
      O'quvchi yoshlar, talabalar, yosh o'quvchilar va korhonalar
                mutahassislari uchun robotics bo'yicha XALQARO TANLOV
                "ROBOT.Uz-2023"
      </h1>
      <div className="w-full flex flex-wrap justify-around my-5">
        <Image className="rounded-md max-w-[700px]" src={images.robot} alt="img" />
        <div className="max-w-[600px] p-2 bg-white rounded-md">
    
          <p className="">
          Islom Karimov nomidagi Toshkent davlat texnika universiteti 2023-yil 16-17-May kunlari robotika iqtidorli oʻquvchi va talabalar, yosh oʻquvchilar, olim va mutahassislar uchun "ROBOT.Uz-2023"
xalqaro tanlovi bulib utishi haqida xabar beradi.
Xalqaro tanlovni o'tkazishdan kuzlangan maqsadli robototexnika sohasidagi iqtidorli yoshlarning ilmiy-texnikaviy izhodini ommalashtirish, muxandislik kasblarini nufuzini oshirish, yoshlarning innovation va zamonaviy texnologiyalar sohasiga qiziqishini ra g'alabadan iborat.
Tanlovda o'quvchilari, talabalar, o'quvchi va yosh maktablar, korkhonalarning robotlashtirilgan ishlanmalar va sohani ommalashtirish bilan shug'ullanayotgan yosh mutahassislari ishtirok etishlari mumkin.
Musobakalar 9 yoshdan 15 ta bulgan o'kuvchilar va 16 yoshdan 25 ta bulgan yoshlar o'rtasida o'tkazilady.
ROBOT.Uz-2023
9-15 yoshli talabalar oracida (3rd nominatsiya):
- Robo-Football (har bir zhamoadan ikkita robot katnashadi)
- Robot Sumo
- Robotning chizik buylab harakatlanishi
Har bir hududda rezerv mavjud. I, II va III o'rinlar diplomlari va qimmatbaho sovg'alar bilan taqdirlanadi
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default News;
