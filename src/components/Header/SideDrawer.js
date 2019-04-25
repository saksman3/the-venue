import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';

const SideDrawer = (props) => {
   const ScrollToElement = (element)=>{
        scroller.scrollTo(element,{
           duration:1400,
           delay:100,
           smooth:true,
           offset:-150,
        })
        props.onClose(false);

   }
    return (
        <div>
            <Drawer
               anchor="right"
               onClose={props.onClose}
               open={props.open}
            >
               <List
                  component="nav"
                 
               >
                  <ListItem
                  button
                  onClick={()=>ScrollToElement('Featured')}
                  >
                      Featured
                  </ListItem>

                  <ListItem
                     button 
                     onClick={()=>ScrollToElement('VenueInfo')} 
                  >
                     Venue Info
                  </ListItem>

                  <ListItem
                    button 
                    onClick={()=>ScrollToElement("Highlights")} 
                  >
                     Highlights
                  </ListItem>

                  <ListItem
                  button 
                  onClick={()=>ScrollToElement("Pricing")} 
                 >
                   Pricing
                </ListItem>
                 <ListItem
                   button
                   onClick={()=>ScrollToElement("Location")}
                 >
                     Location
                 </ListItem>

               </List>
            </Drawer>
        </div>
    );
};

export default SideDrawer;