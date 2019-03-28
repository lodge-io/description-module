import React from 'react';

var Rating = ({info}) => (
  <div>
    Great Location Experience
    <div>
      {info.rating} of recent guests gave the check-in process a 5-star rating.
    </div>
  </div>
)

export default Rating;