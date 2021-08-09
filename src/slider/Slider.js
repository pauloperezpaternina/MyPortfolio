import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
const slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos
                </h2>
            </div>
            <Carousel 
             arrows
             slidePerPage={3} 
             infinite 
             animationSpeed={200} 
             centered 
             offset={50}
             itemWidth={400}
             />

            
        </div>
    )
}

export default slider
