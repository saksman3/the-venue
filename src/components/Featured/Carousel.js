import React from 'react';
import Slider from 'react-slick';
import SlideOne from '../../resources/resources/images/slide_one.jpg';
import SlideTwo from '../../resources/resources/images/slide_two.jpg'
import SlideThree from '../../resources/resources/images/slide_three.jpg'

const Carrousel = () => {
    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }
    return (
        <div className="carrousel_wrapper"
           style={{
               height:`${window.innerHeight}px`,
               overflow:'hidden',
              
               
           }}
        >
        <Slider
            {...settings}
        >
           <div>
               <div 
                  className="carrousel_image"
                  style={{
                      background:`url(${SlideOne}) center center no-repeat`,
                      backgroundSize:'cover',
                      height:`${window.innerHeight}px`
                  }}
               
               ></div>
           </div>
           <div>
               <div
                  className="carrousel_image"
                  style={{
                      background:`url(${SlideTwo}) center center no-repeat`,
                      backgroundSize:'cover',
                      height:`${window.innerHeight}px`
                  }}
               ></div>
           </div>
           <div>
                <div
                className="carrousel_image"
                style={{
                    background:`url(${SlideThree}) center center no-repeat`,
                    backgroundSize:'cover',
                    height:`${window.innerHeight}px`
                }}
                ></div>
           </div>
           
        </Slider>
        
        </div>
    );
};

export default Carrousel;