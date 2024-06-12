import React from 'react'
import profileImg from '../Components/Styles/Assets/01.jpg'
import profileImg2 from '../Components/Styles/Assets/13.jpeg'

import './Styles/DiscoverNfts.css'
const DiscoverNft = () => {
        return (
                <section className='discover-nft'>
            
            <div className="word-content">
                        
                        <h1><span>DISCOVER</span> <br />DIGITAL ARTS & NFTs</h1>
                        <p>The data is being provided to the clients on an "as is" and "what-is" basis as provided by the trading member. The Exchange shall not be liable for any delays, errors, omissions, commissions, inaccuracies in rendering the data. In no event shall the Exchange be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with the data provided by the Exchange through this facility. You are requested to note that in the event of trading member being declared as defaulter/expelled, all transactions executed on the exchange trading </p>
                      </div>
            
            
            <div className='profile-card'>
            
              <img  className='card-discover-image' alt={''} src={profileImg}/>
            
                <div className='card-content'>
                  <img  className='dp' alt={''}src={profileImg2}/>
                  <div  className='infos'>
                    <h2>Blue Studios NFT <br></br> <span>engineer</span></h2> 
                </div>
                </div>
            
                
            
            </div>
            
            
            
            
            
            
            
                </section>
              );
            };
export default DiscoverNft