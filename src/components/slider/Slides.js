import React from 'react';
const slidesInfo = [

    {
        src:" ",
        alt:"Proyecto 1",
        desc:"-"
    },
    {
        src:" ",
        alt:"Proyecto 2",
        desc:"-"
    },
    {
        src:" ",
        alt:"Proyecto 3",
        desc:"-"
    }
] 
const slides = slidesInfo.map(slide =>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));
export default slides;