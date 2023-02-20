import Image from 'next/image';
import React from 'react';
import { images } from '../../../public/assets';
const Mago = () => {
    return (
        <div className='w-full flex items-center justify-around py-10 flex-wrap'>
            <h2 className='w-full text-xl text-grenn text-center font-bold mb-10'>SCImago reytingi</h2>
            <div className='desktop:w-2/5 rounded-md py-5 bg-white laptop:w-2/5 tablet:w-11/12 mobile:w-11/12 sm:w-11/12 h-auto'>
                <Image className='w-full h-full rounded-md ' src={images.mago} />
            </div>
            <div className='desktop:w-2/4 laptop:w-2/5 rounded-md tablet:w-11/12 mobile:w-11/12 sm:w-11/12 text-center p-5 bg-kokroq'>
                <p className='w-full text-md text-grenn font-medium text-start'>
                    SCImago испан консалтинг компанияси (Scimago Lab) ва бир нечта Испания ва Лотин
                     Америкаси академик институтларида ишлайдиган тадқиқот гуруҳлари тармоғи бўлиб, 
                     улар  илметрия, илмий нашрлар ва веб-кўриниш соҳаларида ихтисослашган тадқиқотларни олиб боради.
                    Компания Гранада Университети ва Испания Миллий Тадқиқот Кенгаши (University of 
                    Granada and the Spanish National Reseach Council) да жойлашган тадқиқот гуруҳларининг 
                    шўба корхонаси сифатида ташкил қилинган. Ҳозирги вақтда тадқиқот фаолиятини баҳолаш 
                    кўрсаткичлари ва методологиялари ишлаб чиқилган бўлиб бу кўрсаткичлар (Google-нинг PageRank 
                    дан илҳомланган SJR кўрсаткичи ва Журнал квартиллари Q1,Q2,Q3,Q4) (Elsevier)нинг Scopus ва 
                    (Clarivate)нинг WoS базалари томонидан қабул қилинган, консепсияларни ўз ичига олган, машҳур 
                    кўрсаткичлар порталлари ва инновацион воситаларни яратиш бўйича жаҳон етакчиси хисобланади.
                </p>
            </div>
        </div>
    );
}

export default Mago;
