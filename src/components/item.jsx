import React from "react";
import { motion } from "framer-motion"
import Eth from "./images/eth2.svg"
import clock from "./images/clock.svg"
import HomeNFT from "./images/stolenNFT.png"
import '../store.css';
import ShoppingCart from "./images/shopping.png"
import Ape from "./images/BAYC.png"

export default function Item() {
  
  const element1 =  <motion.div
  className='icon2'
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 0 }}
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
      <img className="nftEth-Img" src={Eth} alt="" />
      <span>44 Eth </span>
    </div>
  <motion.button 
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}  
   className="buyBtn"> BUY 
   <img className="shoppingCart" src={ShoppingCart} alt="" /> 
    </motion.button>
    <div className='nftEth2'>
      <img className="nftEth-Img" src={clock} alt="" />
      <span>3 Days</span>
    </div>
  </div>
</motion.div>

const element2 =  <motion.div
  className='icon2'
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 0 }}
>
  <div>
    <img className='nftImg' src={Ape} alt="" />
  </div>
  <div className='nftInfo'>
    <h4>BAYC #1341</h4>
  </div>
  <div className='nftInfo2'>
    <p>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs </p>
  </div>
  <div className='nftEth'>
    <div className='nftEth2'>
      <img className="nftEth-Img" src={Eth} alt="" />
      <span>60 Eth </span>
    </div>
  <motion.button 
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}  
   className="buyBtn"> BUY 
   <img className="shoppingCart" src={ShoppingCart} alt="" /> 
    </motion.button>
    <div className='nftEth2'>
      <img className="nftEth-Img" src={clock} alt="" />
      <span>3 Days</span>
    </div>
  </div>
</motion.div>
  
  return (
    
    <div>
     {element1} 
     {element2} 
     
    </div>
  
   
  )
}