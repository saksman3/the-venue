import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class CountDown extends Component {
    state = {
        eventDate:'DEC, 16, 2019',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }
    getTimeLeft(){
     const time = Date.parse(this.state.eventDate) - Date.parse(new Date());
     if(time <0){
         console.log("Event passed");
     }else{
         const seconds = Math.floor((time/1000)%60);  /* current time left divided by 1000 from that get the modulus of 60 */
         const minutes = Math.floor((time/1000/60)%60);
         const hours = Math.floor((time/(1000*60*60))%24);
         const days = Math.floor((time/(1000*60*60*24)));
         this.setState(()=>{
             return{
                minutes,
                hours,
                days,
                seconds
             }
         })
     }
    }
    componentDidMount() {
      setInterval(() => this.getTimeLeft(), 1000);
    }
    
    render() {
        return (
            <Slide
               left
               delay={1000}  
            >
                <div className="countdown_wrapper">
                    <div className="countdown_top">Count down</div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.days}</div>
                            <div className="countdown_tag">Days</div>

                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.hours}</div>
                            <div className="countdown_tag">Hr</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.minutes}</div>
                            <div className="countdown_tag">Min</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{this.state.seconds}</div>
                            <div className="countdown_tag">Sec</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default CountDown;