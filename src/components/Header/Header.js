import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
export default class Header extends Component {
   state = {
      open:false,
      headerVisibility:false
   }
    onClick = ()=>{
        this.setState(()=>{
           return{
              open:true
           }
        });
    }
    componentDidMount() {
   /*   these will target scrollling of the page if the even scroll is taking place then the handleScroll will be called */
      window.addEventListener('scroll',this.handleScroll); 
    }
    handleScroll = ()=>{
       if(window.scrollY > 0)//chacking the position of the vertical scroll 
      { this.setState(()=>{
          return {
             headerVisibility:true
          }
        });
      }else{
         this.setState(()=>{
            return {
               headerVisibility:false
            }
          });
      }
    }
    onClose = ()=>{
       this.setState(()=>{
          return {
             open:false
          }
       });
    }
  render() {
    return (
     <AppBar
         position="fixed"
         style={{
             backgroundColor:this.state.headerVisibility?'#2f2f2f': "transparent",
             boxShadow:'none',
             padding:'10px 0px'
         }}
     >
        <ToolBar>
           <div className="header_logo">
              <div className="header_logo_venue font_righteous">The Venue</div>
              <div className="header_logo_title">Musical    </div>
           </div>
           <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={this.onClick}
           >
              <MenuIcon/>
           </IconButton>
           <SideDrawer
               open={this.state.open}
               onClose={this.onClose}
           />
        </ToolBar>
     </AppBar>
    )
  }
}
