
import { useEffect } from 'react';
import Aos from 'aos';

function HeroWidget() {

    useEffect(() => {

        Aos.init()

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "proName": "FOREXCOM:TDTU",
                    "title": "Ushbu sayt №MRB-2021-552 “Raqamli transformatsiya sharoitida texnika universitetning innovatsion muhitini rivojlantirish modelini ishlab chiqish (Belarus milliy texnika universiteti va Islom Karimov nomidagi Toshkent davlat texnika universiteti misolida)” (Ilmiy raxbar: f.-m.f.d., prof. Sh.Nematov) loyixasi doirasida yaratildi"
                },
            ],
            "showSymbolLogo":true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
        });

        document.getElementById("myContainer").appendChild(script);

    }, []);



    return (
        <div className='relative'>
            <div className='w-full h-full absolute z-50'>

            </div>
            <div
       
             data-aos-duration="2000"
            id="myContainer">
                <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroWidget