import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/Button';

class Discount extends React.Component{
    state = {
        discountStart:0,
        discountEnd:30
    }
    percentage = ()=>{
        const start = this.state.discountStart;
        const end = this.state.discountEnd;
        
       if(start<end){
           this.setState(()=>{
               return {
                   discountStart:this.state.discountStart+1
               }
           });
       }
    }
    componentDidUpdate (){
        setTimeout(()=>{
            this.percentage()
        },30);
    }
    render(){
        return (
            <div className="center_wrapper">
               <div className="discount_wrapper">
                <Fade
                  onReveal = {this.percentage}
                >
                    <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
                </Fade>
                 <Slide
                   right
                 >
                 <div className="dicount_description">
                 <h3>Purchase tickets before 30 September 2019</h3>
                 <p>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip</p>
                     <MyButton
                        color="red"
                        bck="black"
                        link={"http://www.google.com"}
                        text="Purchase Ticket"
                     /> 
                 </div>

                 </Slide>
               </div>
            </div>
        );
    }
}
export default Discount;