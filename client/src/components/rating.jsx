import React from 'react';
import styled from 'styled-components';

const fontStyle = 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';
const fontColor = '#484848';

const HouseTopic = styled.p`
  font-weight: 600;
  font-size: 16px;
  font-family: ${fontStyle};
  color: ${fontColor};
  margin-bottom: 5px;
`;

const HouseDetails = styled.div`
  font-weight: 400;
  margin-left: 2%;
  font-family: ${fontStyle};
  color: ${fontColor};
`;

const Icon = styled.i`
  margin-right: 10px;
  // padding-bottom: 16px;
`;

const Rating = ({ info }) => (
  <div>
    <HouseTopic>
      <Icon className="fas fa-star" />
      Great Location Experience
    </HouseTopic>
    <HouseDetails>
      { info.rating } of recent guests gave the check-in process a 5-star rating.
    </HouseDetails>
  </div>
);

export default Rating;
