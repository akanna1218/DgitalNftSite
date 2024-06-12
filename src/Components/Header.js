import React from 'react';
import { useState } from 'react';
import logo from './Styles/Assets/logo.png';
import './Styles/Header.css';
import { FaWallet } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
import { IoSearchCircle } from "react-icons/io5";


const Header = () => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (event)=>{
    setSearchTerm(event.target.value)
}
 const handleSearchSubmit = (e)=>{
    e.preventDefault();
    console.log('Term',searchTerm)
 }

return (
    
    <header>


            <div className='logo'>
               <a> <img src={logo} alt='logo'/></a>
            </div>

                <ul className='nav-links'>
                    <li className=''>
                        <a className='' href='#art'>
                            Art
                        </a>
                    </li>
                    <li className=''>
                        <a className='' href='#collectible'>
                            Collectible
                        </a>
                    </li>
                    <li className=''>
                        <a className='' href='#gaming'>
                            Gaming
                        </a>
                    </li>
                    <li className=''>
                        <a className='' href='#art'>
                            Explore
                        </a>
                    </li>
                </ul>

            <div className='option-box'>

                
                    <button className='' ><IoSearchCircle className='icn'/></button>
                    <button className='' ><IoIosCreate className='icn'/></button>
                    <button className=''><CgProfile className='icn' /> </button>
                     <button className=''><FaWallet  className='icn'/></button>
                


            </div>






    </header>
  )
}

export default Header