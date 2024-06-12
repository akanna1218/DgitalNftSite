import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import '../Components/Styles/RecentNft.css'


const LikeFeature = () => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
  
    const toggleLike = () => {
      setLiked(!liked);
      setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    };
  return (
    <div  >
                      <button className={`${liked?'like':''}`}
                      // if the the use state liked is true , it should add like class , but the liked use state is true once when we click
                      onClick={toggleLike} >
                            <FaHeart />
                            <span>{likesCount}</span>
                      </button>
                    
    </div>
  )
}

export default LikeFeature