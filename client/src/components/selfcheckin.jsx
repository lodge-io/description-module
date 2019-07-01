import React from 'react';

const { styled } = window;
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
  margin-left: 29px;
  font-family: ${fontStyle};
  color: ${fontColor};
`;

const Icon = styled.i`
  margin-right: 12px;
  // padding-bottom: 16px;
`;

const SelfCheckIn = () => (
  <div>
    <HouseTopic>
      <Icon className="fas fa-key" />
      Self check-in
    </HouseTopic>
    <HouseDetails>
      Check yourself in with the keypad code.
    </HouseDetails>
  </div>
);

export default SelfCheckIn;
