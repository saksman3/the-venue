import React from 'react';
import Button from '@material-ui/core/Button';
import img from '../../resources/resources/images/icons/ticket.png';
const CustomButton = (props)=>{
    return (
        <React.Fragment>
          <Button
            variant="contained"
            href={props.link}
            size="small"
            style={{
                background:props.bck,
                color:props.color
            }}
          >
              <img 
                src={img}
                className="iconImage"
                alt="ticket"
              />
              {props.text}
          </Button>
        </React.Fragment>
    );
}
export default CustomButton;

