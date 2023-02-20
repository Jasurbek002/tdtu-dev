import React from 'react'
import Carusel from '../components/carusel/carusel';
import Fuculy from '../components/fuclities/fuculy';
import News from '../components/news/news';
import Partner from '../components/partners/partner';
import Score from '../components/score/score';


const Index = () => {
    return (
        <>
            <div className={'flex w-full justify-center'}>
                <Carusel />
            </div>
            <News />
            <Fuculy />
            <Score fakul={300} students={25000} teachers={990} forwork={50} />
            <Partner />
        </>
    );
}

export default Index;
