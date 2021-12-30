import * as React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "./images/logo.png"
import Button from '@mui/material/Button';


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
          <div className='pageInfo'>
              <div className='infoBox1'>
                  <h2>
                      ClosedSea - The online marketplace to Discover, collect, and sell NFTs
                  </h2>
              </div>
              <div className='infoBox2'>
                 <h3>
                     ClosedSea is the world's first and largest fake NFT marketplace! Why buy NFTs with your hard earned cash when, you can just screenshot them!  
                 </h3>
                
                <button className='shopBtn' >Shop NFTs</button>

              </div>
          </div>
      </div>

    </div>
    
  );
}

export default Home;
