
import React from 'react'

const StarRating = ({rating,onClickingStar}) => {
    const stars=[1,2,3,4,5]

  return (
    <div>
                {stars.map((star) => (
                          <span
                            key={star}
                            className={rating >= star ? 'star filled' : 'star'}
                            onMouseEnter={() => onClickingStar(star)}
                          >
                            ★
                          </span>
                ))}
    </div>
  )
}

export default StarRating