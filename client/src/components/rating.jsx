import React from 'react';

var Rating = ({info}) => (
  <div>
    <b className="highlights"><p><i className="fas fa-star"></i> Great Location Experience </p></b>
    <div className="housedescription">
      {info.rating} of recent guests gave the check-in process a 5-star rating.
    </div>
  </div>
)

export default Rating;