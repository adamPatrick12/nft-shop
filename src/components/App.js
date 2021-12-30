import * as React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "./images/logo.png"


const theme = createTheme({
  typography: {
    fontFamily: [
      'Arial' 
    ].join(','),
  },
});

function Home() {
  
  
  return (
    <div className="Home-BG">
      <div className='circle1'>

      </div>
      <div className='circle2'>

      </div>
      <div className='glass'>
          <div className='header'>    
           <img className='logo' src={Logo} alt="" />
            <a  className='menuBtn' href="">Home</a>
            <a  className='menuBtn' href="">Shop</a>
            <a  className='menuBtn' href="">What are NFT's</a>
          </div>
      </div>

    </div>
    
  );
}

export default Home;
