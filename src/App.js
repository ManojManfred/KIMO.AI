import React from "react";
import background from "./TestImages/bg.png";
import Heading from "./TestImages/Welcome to Hawaii.png"
import './testcss.css';
import './Components/Navbar'
import Navbar from "./Components/Navbar";
import Cards from './Components/Cards';
import { Card, CardContent, Container, Grid, TableRow, Typography } from "@mui/material";
import {StyleRoot} from "radium"
import logo from './TestImages/logo.png';
import sidecard from './Components/sidecard';
import Box from '@mui/material/Box';
import Item from '@mui/material/Grid';
import Test from "./test";
import ellipseImage from './TestImages/Ellipse.png';


function App() {
  return (
    
    <>
    <div style={{marginTop:'1.2%',borderRadius:'10%','@media screen and (maxWidth:768px)':{marginTop:'0%'}}}>
    <Navbar/>
    </div>
    <div style={{backgroundImage: `url(${background})` ,width:'100%',height: 550,left: 0,top:0,backgroundSize:"cover",position:'absolute','@media screen and (max-width:768px)':{position:'relative'},zIndex:-1,
  }}>
    </div>
    <img src={Heading} alt="Image " style={{position:'absolute',top:'20%',left:'20%' ,width:'55%',height:'35%'}} />
    <div style={{'@media screen and (maxWidth:768px)':{marginTop:'0%'},marginTop:500}}>
      <div>
        <h3 style={{fontFamily:'IBM Plex Mono',fontWeight:700,fontSize:16,marginTop:'2',marginLeft:'10%'}}>Highlights</h3>  </div>
        <div style={{display:'flex',flexDirection:'row'}}>
    <Cards/>
    </div>
    </div>
    <div style={{backgroundColor:'#E6F2F2',marginTop:20,paddingBottom:'5%',marginBottom:4}}> 
  <h3 style={{fontFamily:'-moz-initial',fontWeight:700,fontSize:16,marginTop:'4%',marginLeft:'10%',paddingTop:20  }}>
    Categories
    <span style={{ marginLeft: '40%' }}>
      Travel Guide
    </span>
  </h3>     
     <Test/>
    </div> 
    
    <div style={{backgroundColor:'#001A1A',height:80}}><div>
        <h3 style={{backgroundColor:'#001A1A',fontFamily:'cursive',fontWeight:700,fontSize:30,marginLeft:250,color:'white',marginBottom:5}}>Aloha</h3>  </div></div>
    </>
    
  );
}

export default App;