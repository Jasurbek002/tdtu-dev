import Image from "next/image";
import React from "react";
import { images } from "../public/assets";

const News = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="text-3xl font-bold w-10/12 text-center my-5 text-grenn">
        The First International Conference on Innovative Technologies in
        Agri-food Chain: Problems and Perspectives (ITAC-2023)
      </h1>
      <div className="w-full flex flex-wrap justify-around my-5">
        <Image className="rounded-md max-w-[700px]" src={images.konfrence} alt="img" />
        <div className="max-w-[600px] p-2 bg-white rounded-md">
          <h2 className="text-xl text-grenn font-medium my-1">
            Tashkent State Technical University, Tashkent, Uzbekistan
          </h2>
          <p className="">
            The First International Conference on Innovative Technologies in
            Agri-food Chain: Problems and Perspectives (ITAC-2023) is organized
            by Tashkent State Technical University and will be held in Tashkent,
            Uzbekistan during May 25-26, 2023. ITAC is going to be one of the
            leading international conferences in Central Asia for presenting
            novel and fundamental advances in the fields of Agriculture. It also
            serves to foster communication among researchers, academicians,
            students, and practitioners working in a wide variety of scientific
            areas with a common interest in improving Agriculture related
            technologies and mechanisms. With members from around the world
            focused on learning about Agriculture and its advances; this is the
            best opportunity to reach the largest assemblage of participants
            from the Agro community. Conducted presentations, distribute
            information, meet with current and potential scientists, make a
            splash with new advancements and developments, and receive name
            recognition at this 2-days scientific event. World-renowned
            speakers, the most recent techniques, developments, and the newest
            updates in Agriculture are hallmarks of this conference.
          </p>
        </div>
        <div className="w-full flex justify-around items-center flex-wrap my-5 ">
          <Image
            className="rounded-md max-w-[700px]"
            src={images.organization}
            alt="img"
          />
          <div className="max-w-[600px] items-start bg-white rounded-md p-2">
            <h2 className="text-xl text-grenn font-medium my-3">
              ITAC-2023 is excited to invite you to attend with presentations
              under the theme “Current Challenges and Future Perspectives of
              Agriculture”. Key themes (additional themes and sessions are
              welcome) of the conference are:
            </h2>
            <ol>
               <li className="my-1">1. Mechanics and agricultural machinery.</li>
               <li className="my-1">2. Food and agricultural technologies. </li>
               <li className="my-1">3. Food security and environmental safety.</li>
               <li className="my-1">4. Energy, renewables, and resource saving technologies.</li>
               <li className="my-1">5. Energy saving technologies and renewable energy.</li>
               <li className="my-1">6. Environmental chemistry and food industry</li>
               <li className="my-1"> Please, contact ITAC-2023 Co-Chairman if you need any information on the registration, conference agenda, and submission procedures. </li>
               <li className="my-1"> We look forward to meeting you at ITAC-2023!  </li>
               <li className="my-1"> On behalf of the ITAC-2023 Conference Committee and for more information: </li>
            </ol>
            <h1 className="mt-5">Conference Coordinator: Adham Maxkamov</h1>
            <h1>Email: <a className="text-blue" href="mailto:a.makhamov@tdtu.uz">a.makhamov@tdtu.uz</a></h1>
            <h1>Tel: <a className="text-blue" href="tel:+998 97 775 75 93">+998 97 775 75 93</a></h1>
            <h1 className="mt-5">Conference Coordinator: Umidjon  Rajapbaev</h1>
            <h1>Email: <a className="text-blue" href="mailto:umidrajapbaev1@gmail.com">umidrajapbaev1@gmail.com</a></h1>
            <h1>Tel: <a className="text-blue" href="tel:Tel:+998 90 433 77 63">+998 90 433 77 63</a></h1>
             <p className="mt-5">Tashkent State Technical University, University str. 2, Tashkent 100095, UZBEKISTAN</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
