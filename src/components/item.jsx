import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Eth from "./images/eth2.svg"
import clock from "./images/clock.svg"
import '../store.css';
import ShoppingCart from "./images/shopping.png"


export default function Item() {


  const [png, setPng] = useState([])
  const [nftFloor, setFloorPrice] = useState()
  const [nftOwners, setOwnerNum] = useState()
  const [sevenDayVol, setSevenDayVol] = useState()
  const [marketCap, setMarketCap] = useState()
  const [nftCollection, changeCollection] = useState("morethangamersnftmtg")

  useEffect(() => {
    getNFT()
    getCollectionStats()
  }, [nftCollection])

  function collectionChangeInbetweeners () {
    changeCollection("inbetweeners") 
  }
  
  function collectionChangeCyphercity () {
    changeCollection("cyphercity") 
  }
  
  function collectionChangeMTG () {  
    changeCollection("morethangamersnftmtg") 
  }
  
  function collectionChangeCLONEX () {
    changeCollection("clonex") 
  }
  
  function collectionChangeDoodles () {
    changeCollection("doodles-official") 
  }

  function collectionChangeCoolCats () {
    const collect = "cool-cats-nft"
    changeCollection(collect)

  }

  function collectionChangeShiba () {   
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
      console.log(nftArr)
      setPng(nftArr)
    } catch {
      console.log("ERROR")
    }
  }

  async function getCollectionStats() {

    try {
      const response = await fetch(
        `https://api.opensea.io/api/v1/collection/${nftCollection}`,
        { mode: 'cors' },
      );
      const nftStats = await response.json();
      console.log(nftStats)
      const nftFloorPrice = nftStats.collection.stats.floor_price
      setFloorPrice(nftFloorPrice)
      const nftOwnerNumber = nftStats.collection.stats.num_owners
      setOwnerNum(nftOwnerNumber)
      const marketCap = nftStats.collection.stats.market_cap
      setMarketCap(marketCap)
      const sevenDay = nftStats.collection.stats.seven_day_volume
      setSevenDayVol(sevenDay)
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

      <div className="absolutePos">
        <div className="statsContainer">
          <div className="statsBox"> Floor Price
            <div className="strike">
            <img className="EthLogo" src={Eth} alt="" />
              <h5>{nftFloor}</h5>  
            </div>
          </div>
          <div className="statsBox"> Owners
            <div className="strike">
                <h5>{nftOwners}</h5>
            </div>
          </div>
          <div className="statsBox"> Market Cap
            <div className="strike">
            <img className="EthLogo" src={Eth} alt="" />
                <h5>{Math.round(marketCap)}</h5>
            </div>
          </div>
          <div className="statsBox"> 7-Day Volume
            <div className="strike">
            <img className="EthLogo" src={Eth} alt="" />
            <h5>{Math.round(sevenDayVol)}</h5>
            </div>
          </div>
          
        </div>
        
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

