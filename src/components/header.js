import {AppBar,Toolbar, Button} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
 render(){
   return(
    <AppBar position="static"> 
     { this.renderIfAuth(false) }
   </AppBar>
   )
 }
 renderIfAuth(login){
  if (!login){
    return(
      <Toolbar className='nav_cont'>    
        <h2>Blog</h2> 
        <div className='header'> 
          <Button variant="contained" color='primary'><Link to="/sign_up">Sign up</Link></Button>
            &nbsp;&nbsp;
          <Button variant="contained" color='primary'><Link to="/log_in">Log in</Link></Button>          
        </div>         
      </Toolbar>       
  )}
  else{
    return(
      <Toolbar className='nav_cont'> 
           <h2>Car 2 go</h2> 
          <div className='header'>     
            <Button variant="contained" color='primary'><Link to="/profile">Profile</Link></Button>
            &nbsp;&nbsp;
          </div>
      </Toolbar> 
  )}
} 
   
}