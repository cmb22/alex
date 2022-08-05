import './App.css'
import { useState } from 'react';
const ANNI_FRONT = require('./img/Visitenkarte_Anni_DE_Front.jpg');
const LUPE = require('./img/lupe.png')
const VISIT_KARTE_BACK = require('./img/Visitenkarte_Alex_DE_Rückseite.jpg')
const IMG_1 = require("./img/slide-img-1.jpg")
const IMG_2 = require("./img/slide-img-2.jpg")

const SLIDE_IMAGES = [
    [ 
        <img src={ANNI_FRONT} className="thumbnail_1" />,
        <img src={LUPE} className="lupe" />,
        <img src={VISIT_KARTE_BACK} className="thumbnail_2" />,
    ],
    [
        <img src={IMG_1} className="thumbnail_1"/>,
        <img src={LUPE} className="lupe" />,
        <img src={IMG_2} className="thumbnail_2"/>,
    ],
    [
        <img src={IMG_1} className="thumbnail_1"/>,
        <img src={LUPE} className="lupe" />,
        <img src={ANNI_FRONT} className="thumbnail_2"/>,
    ]
]
const NUMBER_OF_IMAGES = SLIDE_IMAGES.length;

const App = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   return (
    <div className="App">
     <div className="wrapper_sitecontent_all">
        <div className="wrapper_slider_all card-container">
            <div className="card">
               {SLIDE_IMAGES.filter((images, i) => i === currentSlide)}
            </div>
        </div>

        <div className="controls">
            <div 
                onClick={() => setCurrentSlide(currentSlide === 0 ? NUMBER_OF_IMAGES - 1 : currentSlide - 1) }
                className="left-arrow prev"
            >
                <div className="left-arrow-icon" />
            </div>
            <div 
                onClick={() => setCurrentSlide(currentSlide === NUMBER_OF_IMAGES - 1 ? 0 : currentSlide + 1) } 
                className="right-arrow next"
            >
                <div className="right-arrow-icon" />
            </div>
        </div>


            {/* <div className="hidden grey_lightbox_backgr_one">
                <img src={ANNI_FRONT} className="lightbox_one hidden" />
                <img src={VISIT_KARTE_BACK} className="lightbox_two hidden" />
            </div>

            <div className="hidden grey_lightbox_backgr_two">
                <img src={IMG_1} className="lightbox_three hidden" />
                <img src={IMG_2} className="lightbox_four hidden" />
            </div> */}

        </div>
    </div>
  );
}

export default App;
