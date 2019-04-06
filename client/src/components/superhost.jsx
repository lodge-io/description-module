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
  margin-left: 2%;
  font-style: ${fontStyle};
  color: ${fontColor};
`;

const Icon = styled.i`
  margin-right: 16px;
`;

const SuperHost = ({info}) => (
  <div>
    <HouseTopic>
      <Icon className="fas fa-award" />
      {info.firstName} {info.lastName} is a Superhost
    </HouseTopic>
    <HouseDetails>
      Superhost are experienced, highly rated hosts who are committed to providing great stays for guests.
    </HouseDetails>
  </div>
);

export default SuperHost;
