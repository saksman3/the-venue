import React from 'react';
import Carrousel from './Carousel';
import CountDown from './CountDown';
const Featured = () => {
    return (
        <div style={{position:'relative'}}>
            <Carrousel/>
            <CountDown/> 
                <div className="artist_name">
                    <div className="wrapper">
                    Artist name
                    </div>
                </div> 
           
        </div>
    );
};

export default Featured;