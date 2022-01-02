import '../store.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import Eth from "./images/eth2.svg"
import clock from "./images/clock.svg"
import Logo from "./images/logo.gif"
import HomeNFT from "./images/stolenNFT.png"
import Item from './item';

const ShoppingArea = () => {
    return (
        <div className="shop-Bg">
            <motion.div
                className='circle3'
                animate={{ y: [0, 35, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
            >

            </motion.div>
            <motion.div
                className='circle4'
                animate={{ y: [0, 35, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
            ></motion.div>
            <div className='glass2'>
                <div className='header2'>
                    <div className='logoDiv'>
                        <img className='logo' src={Logo} alt="" />
                        <h1>ClosedSea</h1>
                    </div>
                    <Link to="/">  <a className='menuBtn' href="">Home</a> </Link>
                    <Link to="/items"> <a className='menuBtn' href="">Shop</a></Link>
                    <a className='menuBtn' href="">What are NFT's</a>
                </div>

                <div className='shopContainer'>
                     <div className='sideNav'>
                        <h6>Browse Collections</h6>
                        <a href=""> Punk</a>
                     </div>
                     <div className='storeArea' >
                     <Item/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShoppingArea