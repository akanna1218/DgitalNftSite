import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import '../Components/Styles/HotCollection.css';

const ImageSlider = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);

  // Update imagesPerSlide based on window width
  React.useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.innerWidth < 576) {
        setImagesPerSlide(1);
      }
      else if(window.innerWidth < 900){
        setImagesPerSlide(2);


      } else {
        setImagesPerSlide(4);
      }
    };

    window.addEventListener('resize', updateImagesPerSlide);
    updateImagesPerSlide();

    return () => window.removeEventListener('resize', updateImagesPerSlide);
  }, []);

  const handleClickNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + imagesPerSlide, images.length - imagesPerSlide));
  };

  const handleClickPrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - imagesPerSlide, 0));
  };

  const displayedImages = images.slice(startIndex, startIndex + imagesPerSlide);

  return (
    <section className='image-slider'>
                        <h2 >Hot Collections</h2>
                           <div className='image-container'>
                                      <button 
                                        onClick={handleClickPrevious} 
                                        style={{ visibility: startIndex === 0 ? 'hidden' : 'visible' }}
                                      >
                                        <GrFormPrevious style={{fontSize:'40px'}}/>
                                      </button>

                                              <div className='carousel'>
                                                      {displayedImages.map(nft => (
                                                             
                                                              <div className='collection-image' key={nft.id}>
                                                                      
                                                                      <img  src={nft.pic}  alt={`slide ${nft.id}`}  />
                                                                      
                                                                      <div>
                                                                        <label>{nft.item}</label>
                                                                      </div>
                                                              
                                                              </div>
                                                      ))}
                                              </div>

                                      <button 
                                        onClick={handleClickNext} 
                                        style={{ visibility: startIndex + imagesPerSlide >= images.length ? 'hidden' : 'visible' }}
                                      >
                                        <MdNavigateNext style={{fontSize:'40px'}} />
                                      </button>
                          </div>
    </section>
  );
};

export default ImageSlider;
