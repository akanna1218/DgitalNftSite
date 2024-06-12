import React from 'react';
import logo from './Styles/Assets/logo.png';
import '../Components/Styles/Footer.css'

const Footer = () => {
  return (
    <footer >
      <div >
        <div className='footer-container'>
          <div >
            <h5>Company</h5>
            <ul>
              <li><a href="#Vision" >Vision</a></li>
              <li><a href="#Mission" >Mission</a></li>
              <li><a href="#core values" >Core values</a></li>
              <li><a href="#contact us" >Contact us</a></li>
              <li><a href="#about" >Team</a></li>
              <li><a href="#about" >FAQ</a></li>
            </ul>
          </div>
          <div >
            <h5 >Products</h5>
            <ul>
              <li><a href="#edatokens" >Eda Tokens</a></li>
              <li><a href="#digitaalClinic" >Digital Clinic</a></li>
              <li><a href="#schoolOfCryptos" >School of Cryptos</a></li>
              <li><a href="#litePaper" >Litepaper</a></li>
              <li><a href="#whitePaper" >Whitepaper</a></li>
              <li><a href="#welfareDonations" >Welfare Donations</a></li>
              <li><a href="#howToUseEda" >How to Use EdaFace</a></li>
            </ul>
          </div>
          <div >
            <ul >
              <li><a href="#contact" ><img src={logo} alt="logo" /></a></li>
              <li><a href="#career" >Subscribe Our Newsletter</a></li>
              <li >
                <input type="text" placeholder="Email" />
                <button className='footer-button'>subscribe</button>
              </li>
              
            </ul>
          </div>
          <div >
            <h5 >Legal</h5>
            <ul>
              <li><a href="#termsOfUse" >Terms of Use</a></li>
              <li><a href="#privacyPolicy" >Privacy Policy</a></li>
              <li><a href="#disclaimers" >Disclaimers</a></li>
              <li><a href="#listing" >Listing T&C</a></li>
            
            </ul>
          </div>
          <div>
            <h5>Communities</h5>
            <ul>
              <li><a href="#facebook" >Facebook</a></li>
              <li><a href="#instagram" >Instagram</a></li>
              <li><a href="#telegram" >Telegram</a></li>
              <li><a href="#twitter" >Twitter</a></li>
              
            </ul>
          </div>
        </div>
        <div className='copy-right-line'>copyright &copy; 2022. EdaFace is a product of EDA Holdings.All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
