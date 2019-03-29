import React from 'react';

var Rating = ({info}) => (
  <div>
    <b className="highlights"><p><i class="fas fa-star"></i> Great Location Experience</p></b>
    <div className="house">
      {info.rating} of recent guests gave the check-in process a 5-star rating.
    </div>
  </div>
)

export default Rating;