import React from "react";
import { motion } from "framer-motion"
import Eth from "./images/eth2.svg"
import clock from "./images/clock.svg"
import HomeNFT from "./images/stolenNFT.png"
import '../store.css';


export default function Item() {
  return (

    <motion.div
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
        <div className='nftEth2'>
          <img className="nftEth-Img" src={clock} alt="" />
          <span>3 Days Left </span>
        </div>
      </div>
    </motion.div>
  )
}