import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
export default class Header extends Component {
    onClick = ()=>{
        console.log("clicked");
    }
  render() {
    return (
     <AppBar
         position="fixed"
         style={{
             backgroundColor:'#2f2f2f',
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
        </ToolBar>

       
     </AppBar>
    )
  }
}
