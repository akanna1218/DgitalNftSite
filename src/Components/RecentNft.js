import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Styles/RecentNft.css';
import LikeFeature from './LikeFeature';
import StarRating from './StarRating';

const RecentNft = ({ addedNfts }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMoreItems = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };
  const loadBack = () => {
    setVisibleCount(8);
  };

  return (
    <section className='recent-nft-section'>
                            
                            <h2>Recently Added NFTs</h2>
                                    
                                    <div className='recent-nft-container'>
                                                {addedNfts.slice(0, visibleCount).map((nft) => (
                                                  <div key={nft.id}>
                                                                <NFTCard nft={nft} />
                                                  </div>
                                                ))}
                                    </div>
                                    
                                    {visibleCount < addedNfts.length && (
                                      
                                      <button className='load-button' onClick={loadMoreItems}>
                                        Load More
                                      </button>
                                   
                                   )}
                                    {visibleCount >= addedNfts.length-1 && (
                                      
                                      <button className='back-button' onClick={loadBack}>
                                        back
                                      </button>
                                   
                                   )}

    </section>
  );
};

const NFTCard = ({ nft }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
                          <div className='profile-card-recent'>
      
                                                      <img className="card-image" src={nft.image}  alt=' card Images' />

                        
                                            <div >
                          
                                                      <div className='recent-content-line-one'>
                                                        <h5>{nft.title}</h5>
                                                        <StarRating rating={rating} onClickingStar={handleRatingChange} />
                                                      </div>
                                                    
                                                      <div className='recent-content-line-one'>
                                                        <p>{nft.bid}</p>
                                                        <p>{nft.amount}</p>
                                                      </div>
                                                    
                                                      <div className='recent-content-line-one'>
                                                        <img src={nft.profilePic} alt={''} style={{ width: '30px', height: '30px' }} />
                                                        <img src={nft.image}  alt={''} style={{ width: '30px', height: '30px' }} />
                                                        <p>{nft.username}</p>
                                                        <LikeFeature  />
                                                    </div>
                                           </div>
                          </div>
  );
};

export default RecentNft;
