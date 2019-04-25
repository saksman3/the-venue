import React from 'react';
import Button from '../utils/Button';
import Zoom from 'react-reveal/Zoom'

class Pricing extends React.Component {
    state = {
        prices:[100,200,245],
        positions:['Balcony','Medium','Star'],
        desc:['It is a long established fact that a reader will be distracted by the readable content of a page when looking',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking'
        ],
        linkto:['http://sales/b','http://sales/s','http://sales/m'],
        delay:[500,0,500]
    }
    showBoxes = ()=>{
        return (
              this.state.prices.map((box,ind)=>{
                  return (
                   <Zoom
                      delay={this.state.delay[ind]}
                      key={ind}
                   >
                   <div className="pricing_item">
                   <div className="pricing_inner_wrapper">
                     <div className="pricing_title">
                       <span>{this.state.prices[ind]}</span>
                       <span>{this.state.positions[ind]}</span>
                     </div>
                     <div className="pricing_description">
                        {this.state.desc[ind]}
                     </div>
                     <div className="pricing_buttons">
                          <Button
                             text="Purchase"
                             color="white"
                             bck="rgb(198, 201, 59)"
                          />
                     </div>
                  </div>
                </div>
                   </Zoom>
                  );
              })
        );
    }
   render(){
    return (
        <div className="bck_black">
          <div className="center_wrapper pricing_section">
             <h2>Prices</h2>
             <div className="pricing_wrapper">
                {
                    this.showBoxes()
                }
             </div>
          </div>   
        </div>
    );
   } 
};

export default Pricing;