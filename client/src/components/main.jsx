import React from 'react';
import styled from 'styled-components';
import SuperHost from './superhost.jsx';
import Rating from './rating.jsx';
import SelfCheckIn from './selfcheckin.jsx';

const fontStyle = 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';
const fontColor = '#484848';

const TopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  height: 120px;
  margin: 0;
  flex-direction: column;
  float: left;
  flex-wrap: wrap;
`;

const TopRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  width: 10%;
  height: 120px;
  // flex-wrap: wrap;
  // text-align: center;
`;

const Title = styled.div`
  font-size: 40px;
  display: flex;
  flex-wrap: wrap;
  font-family: ${fontStyle};
  color: ${fontColor};
`;

const City = styled.div`
  font-family: ${fontStyle};
  color: ${fontColor};
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Host = styled.p`
  font-family: ${fontStyle};
  font-size: 14px;
  font-weight: 400;
  color: ${fontColor};
`;

const HouseBox = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: rgba(109, 109, 109, 0.24);
  padding-bottom: 8px;
`;

const HouseTopic = styled.p`
  font-weight: 600;
  font-size: 16px;
  font-family: ${fontStyle};
  margin-bottom: 5px;
  color: ${fontColor};
`;

const HouseDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2%;
`;

const HouseDetails = styled.div`
  margin-right: 1%;
  font-style: ${fontStyle};
  color: ${fontColor};
`;

const Text = styled.p`
font-weight: 400;
font-size: 16px;
font-style: ${fontStyle};
color: ${fontColor};
`;

const Icon = styled.i`
  margin-right: 10px;
  // padding-bottom: 16px;
`;

const Read = styled.span`
  color: teal;
  :hover {
    text-decoration: underline;
  }
`;

const Contact = styled.span`
  color: teal;
  :hover {
    text-decoration: underline;
  }
`;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: true,
    };
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  showMore() {
    this.setState({ showAll: false });
  }

  showLess() {
    this.setState({ showAll: true });
  }

  render() {
    const { details } = this.props;
    const { showAll } = this.state;
    const text = details[0].description.split(' ');
    const limit = 75;
    const toShow = text.slice(0, limit).join(' ') + '...';
    if (text.length < limit) {
      this.setState({ showAll: false });
    }
    return (
      <div>
        <TopLeft>
          <Title>{details[0].title}</Title>
          <City>{details[0].city}</City>
        </TopLeft>
        <TopRight>
          <Avatar src={details[0].pic} />
          <Host>
            {details[0].firstName} {details[0].lastName}
          </Host>
        </TopRight>
        <HouseBox>
          <HouseTopic>
            <Icon id="icons" className="fas fa-home" />
            Entire House
          </HouseTopic>
          <HouseDescription>
            <HouseDetails>{details[0].guests} guests </HouseDetails>
            <HouseDetails>{details[0].bedrooms} bedrooms </HouseDetails>
            <HouseDetails>{details[0].beds} beds </HouseDetails>
            <HouseDetails>{details[0].baths} baths </HouseDetails>
          </HouseDescription>
          <div>{details[0].superHost ? <SuperHost info={details[0]} /> : null}</div>
          <div>{details[0].rating > 89 ? <Rating info={details[0]} /> : null}</div>
          <div>{details[0].selfCheckIn ? <SelfCheckIn info={details[0]} /> : null}</div>
        </HouseBox>
        <div>
          {showAll
            ? <Text> { toShow } <br /><br /> <Read onClick={this.showMore}>Read More</Read> </Text>
            : <Text> {details[0].description} {showAll ? null : <Read onClick={this.showLess}><br/><br/>Hide</Read>} </Text>}
        </div>
        <Text>
          License #
          <br />
          {details[0].license}
        </Text>
        <Contact>
          Contact Host
        </Contact>
      </div>
    );
  }
}

export default Main;
