import React from 'react';
import calendar from '../../resources/resources/images/icons/calendar.png';
import location from '../../resources/resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const Venue = () => {
    return (
        <div className="bck_black">
          <div className="center_wrapper">
             <div className="vn_wrapper">
             <Zoom
              duration={500}
             >
                    <div className="vn_item">
                    <div className="vn_outer">
                        <div className="vn_inner">
                            <div className="vn_icon_square bck_red"></div>
                            <div className="vn_icon" style={{background:`url(${calendar})`}}></div>
                            <div className="vn_title">Event Date & Time</div>
                            <div className="vn_desc">
                                16 Dec 2019 @ 10:00am
                            </div>
                        </div>
                    </div>
                            
                </div>
             </Zoom>
             <Zoom
               delay={600}
             >
                <div className="vn_item">
                <div className="vn_outer">
                    <div className="vn_inner">
                        <div className="vn_icon_square bck_yellow"></div>
                        <div className="vn_icon" style={{background:`url(${location})`}}></div>
                        <div className="vn_title">Event Venue</div>
                        <div className="vn_desc">
                            1234 Zibusiswe Street,Midrand
                        </div>
                    </div>
                </div>       
            </div>
             </Zoom>
               
             </div>
          </div>
        </div>
    );
};

export default Venue;