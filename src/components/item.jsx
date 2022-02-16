import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Eth from "./images/eth2.svg"
import User from "./images/user.png"
import Button from '@mui/material/Button';
import wallet from "./images/wallet.png"
import '../store.css';
import ShoppingCart from "./images/shopping.png"


export default function Item() {

  let internationalNumberFormat = new Intl.NumberFormat('en-US')

  const [png, setPng] = useState([])
  const [nftFloor, setFloorPrice] = useState()
  const [nftOwners, setOwnerNum] = useState()
  const [sevenDayVol, setSevenDayVol] = useState()
  const [marketCap, setMarketCap] = useState()
  const [price, setPrice] = useState()
  const [nftCollection, changeCollection] = useState("clonex")

  useEffect(() => {
    getNFT()
    getCollectionStats()
  }, [nftCollection])

  
  function collectionAlienFriends () {
    changeCollection("alienfrensnft") 
  }

  function collectionpbear () {
    changeCollection("phantabear") 
  }

  function collectionpWOW () {
    changeCollection("world-of-women-nft") 
  }

  function collectionpPudgypenguins () {
    changeCollection("pudgypenguins") 
  }
  
  function collectionChange0nForce () {
    changeCollection("0n1-force") 
  }
  
  function collectionChangePAG () {
    changeCollection("chromie-squiggle-by-snowfro") 
  }

  function collectionChangeBAKC () {
    changeCollection("bored-ape-kennel-club") 
  }
  
  function collectionChangePunks () {
    changeCollection("cryptopunks") 
  }

  function collectionChangeprimeapeplanetpap () {
    changeCollection("primeapeplanetpap") 
  }

  function collectionChangemutantApeYachtClub () {
    changeCollection("mutant-ape-yacht-club") 
  }

  function collectionChangeInbetweeners () {
    changeCollection("inbetweeners") 
  }

  function collectionChangeBAYC() {
    changeCollection("boredapeyachtclub") 
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
        `https://api.opensea.io/api/v1/assets?limit=45&collection=${nftCollection}`,
        { mode: 'cors',
         credentials: 'include',
        orgin: 'true'}
      );
      const nftData = await response.json();
      const nftArr = nftData.assets
      console.log(nftData)
      setPng(nftArr.slice(6,15))   //Removing the first item form array since some collections give a null value on the first item
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
      const avgPrice = nftStats.collection.stats.one_day_average_price
      setPrice(avgPrice)
    } catch {
      console.log("ERROR")
    }
  }
  
  


  return (

    <div className="spacing">

      <div className='sideNav'>
        <h6>Browse Collections</h6>
          <div className="collectionButtons">
          <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionAlienFriends} > Alien Friends</motion.button>
          <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeBAYC} > BAYC</motion.button>
          <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeBAKC} > BAKC</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeCLONEX} > CLONE X</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeCyphercity} > Cypher City</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeCoolCats} > Cool Cats</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChange0nForce} >ON1 Force</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeDoodles} > Doodles</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeInbetweeners} > Inbetweeners</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangemutantApeYachtClub} > MAYC</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeMTG} > MTG</motion.button>
            <motion.button  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeShiba} > Shiba</motion.button>
            <motion.button  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangeprimeapeplanetpap} > PAP</motion.button>
               <motion.button  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionpbear} > Phanta Bear</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangePunks} > Punks</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionChangePAG} > Psychedelics</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionpPudgypenguins} > Pudgy Penguins</motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="collectionBtn" onClick={collectionpWOW} > World of Woman</motion.button>
         </div>
     
         
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
            <img className="EthLogo" src={User} alt="" /> 
                <h5>{internationalNumberFormat.format(nftOwners)}</h5>
            </div>
          </div>
          <div className="statsBox"> Market Cap
            <div className="strike">
            <img className="EthLogo" src={Eth} alt="" />
                <h5>{internationalNumberFormat.format((Math.round(marketCap)))}</h5>
            </div>
          </div>
          <div className="statsBox"> 7-Day Volume
            <div className="strike">
            <img className="EthLogo" src={Eth} alt="" />
            <h5>{internationalNumberFormat.format((Math.round(sevenDayVol)))}</h5>
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
              <span>{Math.round(price * 100) / 100} Eth </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick= {(e) => {
              e.preventDefault();
              window.open(`${images.permalink} `);
              }}
              className="buyBtn"> BUY
              <img className="shoppingCart" src={ShoppingCart} alt="" />
            </motion.button>
            <div className='nftEth2'>
              <motion.button  
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="walletBtn"  onClick= {(e) => {
              e.preventDefault();
              window.open(`https://etherscan.io/address/${images.owner.address}`);
              }}>   <img className="wallet" src={wallet} alt="" /> </motion.button>
            </div>
          </div>
        </motion.div>

      ))}
    </div>


  )
}

