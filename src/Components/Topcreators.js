import React from 'react';
import '../Components/Styles/TopCreators.css'

const Topcreators = ({creatorImages}) => {
    return (
      <section className='top-creators-container'>
                            <h2>Top Creators</h2>
                                <div className='top-creators-container'>
                                  
                                        {creatorImages.map((creator)=>{   
                                        return(
                                                  < div className='creator-image-container' key={creator.id}>
                                                
                                                          <div  ><img className='creator-image' src={creator.pic}  alt={creator.item} /></div>
                                                          <div><p>lenin quies <br></br><span>{creator.item}</span></p></div>
  
                                                  </div>
                                              )})}
                                    
                                </div> 
      </section>
    )
  };
  
  
  
  export default Topcreators;
  