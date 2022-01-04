import * as React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
import HomeNFT from "./images/stolenNFT.png"
import Eth from "./images/eth2.svg"
import clock from "./images/clock.svg"
import Logo from "./images/logo.gif"

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
      <motion.div 
      className='circle1'
        animate={{ y: [0, 35, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >

      </motion.div>
      <motion.div 
      className='circle2'
      animate={{ y: [0, 35, 0] }}
      transition={{ repeat: Infinity, duration: 10 }}
      >

      </motion.div>
      <div className='glass'>
          <div className='header'>    
           <div className='logoDiv'>
             <img className='logo' src={Logo} alt="" />
             <h1>ClosedSea</h1>
           </div>
              <div className='links'>
                  <a  className='menuBtn' href="">Home</a>
                <Link to = "/items"> <a  className='menuBtn' href="">Shop</a></Link> 
                  <a  className='menuBtn' href="">What are NFT's</a>
              </div>
              
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
                
                <Link to= "/items">
                <motion.button 
                className='shopBtn' 
                whileHover={{ scale: 1.1 }}
                >Shop NFTs</motion.button>
                </Link>

              </div>
              <div className = "nftContainer" >
                  <motion.div 
                  className='icon'
                  animate={{ y: [0, 35, 0] }}
                  transition={{ repeat: Infinity, duration: 10 }}
                  >
                    <div>
                        <img className='nftImg' src={HomeNFT} alt="" />
                    </div>
                    <div className='nftInfo'>
                      <h4>CloneX #17580</h4>
                    </div>
                    <div className='nftInfo2'>
                    <p>Virtual fashion collective by RTFKT Studios. A clear homage to the CryptoPunks series </p>
                    </div>
                    <div className='nftEth'>
                        <div className='nftEth2'>
                        <img className= "nftEth-Img" src={Eth} alt="" />
                        <span>44 Eth </span>
                        </div> 
                        <div className='nftEth2'>
                        <img className= "nftEth-Img" src={clock} alt="" />
                        <span>3 Days Left </span>
                        </div> 
                    </div>
                  </motion.div>
              </div>
          </div>
          
          
      </div>

    </div>
    
  );
}

export default Home;
