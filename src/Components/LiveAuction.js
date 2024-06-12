import React, { useEffect, useState } from 'react'
import '../Components/Styles/LiveAuction.css'
import LikeFeature from '../Components/LikeFeature';
const LiveAuction = ({liveAuctionData}) => {
    return (
        <section className='live-auction-section'>
                      <h2>Live Auctions</h2>
                          <div className='live-auction-container'>
                                  {liveAuctionData.map((nft) => (
                                          <div key={nft.id}>
                                            <NFTCard nft={nft} />
                                          </div>
                                  ))}
                          </div>
            
        </section>
      );
    };
    
    const NFTCard = ({ nft }) => {
    
      const [currentTime, setCurrentTime] = useState(new Date());
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
        // When you place setInterval inside useEffect, you ensure that the interval is set up once when the component mounts, and the interval is cleared when the component unmounts or the effect dependencies change. This prevents multiple intervals from being set up, which would happen if setInterval were called directly within the component's body on every render.
      }, []);
    
      return (
        <div className='profile-card-live'>
                                                  
                                                  <img  className="card-image-live" src={nft.image}  alt=' card Images' />
                                                  <p className='live-time'>
                                                        {currentTime.toLocaleTimeString()}
                                                  </p>
                            <div >
                                            
                                            <div className='creator-content-line-one' >
                                            <h5 classN>{nft.title}</h5>
                                            </div>
                                          
                                            <div className='creator-content-line-one'>
                                              <p >{nft.bid}</p>
                                              <p >{nft.amount}</p>
                                            </div>
                                            
                                            <div className='creator-content-line-one'>
                                                <img src={nft.image}  alt={''} style={{ width: '30px', height: '30px' }} />
                                                <img src={nft.profilePic} alt={''} style={{ width: '30px', height: '30px' }} />
                                                <p>{nft.username}</p>
                                                <LikeFeature/>
                                            </div>
                            </div>
        </div>
      );
    };

export default LiveAuction