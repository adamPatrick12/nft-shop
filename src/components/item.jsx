import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Eth from "./images/eth2.svg"
import clock from "./images/clock.svg"
import HomeNFT from "./images/stolenNFT.png"
import '../store.css';
import ShoppingCart from "./images/shopping.png"
import Ape from "./images/BAYC.png"


export default function Item() {

  function randomPrice() {
    console.log( Math.floor((Math.random() * 10) + 1));
  }

  const [png, setPng] = useState([])

  const [nftCollection, changeCollection] = useState("inbetweeners")

  useEffect(() => {
    getNFT()
  }, [nftCollection])

  function collectionChangeInbetweeners () {
    getNFT() 
    changeCollection("inbetweeners") 
  }
  
  function collectionChangeCyphercity () {
    getNFT() 
    changeCollection("cyphercity") 
  }
  
  function collectionChangeMTG () {
    getNFT() 
    changeCollection("morethangamersnftmtg") 
  }
  
  function collectionChangeCLONEX () {
    getNFT() 
    changeCollection("clonex") 
  }
  
  function collectionChangeDoodles () {
    getNFT() 
    changeCollection("doodles-official") 
  }

  function collectionChangeCoolCats () {
    const collect = "cool-cats-nft"
    changeCollection(collect)
    getNFT()
  }

  function collectionChangeShiba () {
    getNFT() 
    changeCollection("shiba-social-club")
  }

  async function getNFT() {

    try {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=19&collection=${nftCollection}`,
        { mode: 'cors' },
      );
      const nftData = await response.json();
      const nftArr = nftData.assets
      console.log(nftData)
      setPng(nftArr)
    } catch {
      console.log("ERROR")
    }
  }

  


  return (




    <div className="spacing">

      <div className='sideNav'>
        <h6>Browse Collections</h6>
        <button className="collectionBtn" onClick={collectionChangeCLONEX} > CLONE X</button>
        <button className="collectionBtn" onClick={collectionChangeCyphercity} > Cypher City</button>
        <button className="collectionBtn" onClick={collectionChangeCoolCats} > Cool Cats</button>
        <button className="collectionBtn" onClick={collectionChangeDoodles} > Doodles</button>
        <button className="collectionBtn" onClick={collectionChangeInbetweeners} > Inbetweeners</button>
        <button className="collectionBtn" onClick={collectionChangeMTG} > MTG</button>
        <button className="collectionBtn" onClick={collectionChangeShiba} > Shiba</button>

      </div>

      {png.map(images => (
        <motion.div
          className='icon2'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 0 }}
        >
          <div>
            <img className='nftImg' src={images.image_url} alt="" />
          </div>
          <div className='nftInfo'>
            <h4>{images.name}</h4>
          </div>
          <div className='nftInfo2'>
            <p> A cryptographic asset found on the Ethereum blockchain with unique identification codes and metadata that distinguish them from each other.   </p>
          </div>
          <div className='nftEth'>
            <div className='nftEth2'>
              <img className="nftEth-Img" src={Eth} alt="" />
              <span>{Math.floor((Math.random() * 100) + 1)} Eth </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
             onClick= {(e) => {
              e.preventDefault();
              window.location.href=(`${images.permalink} `);
              }}
              className="buyBtn"> BUY
              <img className="shoppingCart" src={ShoppingCart} alt="" />
            </motion.button>
            <div className='nftEth2'>
              <img className="nftEth-Img" src={clock} alt="" />
              <span>{Math.floor((Math.random() * 10) + 1)} Days</span>
            </div>
          </div>
        </motion.div>

      ))}
    </div>


  )
}

