import './App.css'
import { useState } from 'react';
import { Controls } from './Controls';


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
    // [
    //     <img src={IMG_1} className="thumbnail_1"/>,
    //     <img src={LUPE} className="lupe" />,
    //     <img src={ANNI_FRONT} className="thumbnail_2"/>,
    // ]
]
// debugger
const NUMBER_OF_IMAGES = SLIDE_IMAGES.length;

const App = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   return (
    <div className="App">
     <div className="wrapper_sitecontent_all">
        <div className="wrapper_slider_all card-container">
            <div className="card">
               {SLIDE_IMAGES.filter((images, index) => {
            //    console.log('images', images)
            //    console.log('currentSlide', currentSlide)
            //    console.log('index', index)
              return index === currentSlide
            })
            }
            </div>
        </div>

       <Controls currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} NUMBER_OF_IMAGES={NUMBER_OF_IMAGES}/>


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
