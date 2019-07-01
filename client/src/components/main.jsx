import React from 'react';
import SuperHost from './superhost.jsx';
import Rating from './rating.jsx';
import SelfCheckIn from './selfcheckin.jsx';

const { styled } = window;
const fontStyle = 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';
const fontColor = '#484848';

const TopHalf = styled.div`
  height: auto;
`;

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
  margin-left: 29px;
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
`;

const Read = styled.span`
  color: teal;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Contact = styled.span`
  color: teal;
  :hover {
    text-decoration: underline;
    cursor: pointer;
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
    const text = details.description.split(' ');
    const limit = 75;
    const toShow = `${text.slice(0, limit).join(' ')}...`;
    if (text.length < limit) {
      this.setState({ showAll: false });
    }
    return (
      <div>
        <TopHalf>
          <TopLeft>
            <Title>{details.title}</Title>
            <City>{details.city}</City>
          </TopLeft>
          <TopRight>
            <Avatar src={details.pic} />
            <Host>
              {`${details.firstName} ${details.lastName}`}
            </Host>
          </TopRight>
        </TopHalf>
        <HouseBox>
          <HouseTopic>
            <Icon id="icons" className="fas fa-home" />
            Entire House
          </HouseTopic>
          <HouseDescription>
            <HouseDetails>{`${details.guests} guests`}</HouseDetails>
            <HouseDetails>{`${details.bedrooms} bedrooms`}</HouseDetails>
            <HouseDetails>{`${details.beds} beds`}</HouseDetails>
            <HouseDetails>{`${details.baths} baths`}</HouseDetails>
          </HouseDescription>
          <div>{details.superHost ? <SuperHost info={details} /> : null}</div>
          <div>{details.rating > 89 ? <Rating info={details} /> : null}</div>
          <div>{details.selfCheckIn ? <SelfCheckIn info={details} /> : null}</div>
        </HouseBox>
        <div>
          {showAll
            ? (
              <Text>
                { toShow }
                <br />
                <br />
                <Read onClick={this.showMore}>
                  Read More
                </Read>
              </Text>
            )
            : (
              <Text>
                {details.description}
                <br />
                <br />
                License #
                <br />
                {details.license}
                <br />
                <br />
                <Contact>
                  Learn about this number
                </Contact>
                {showAll
                  ? null
                  : (
                    <Read onClick={this.showLess}>
                      <br />
                      <br />
                      Hide
                    </Read>
                  )
                }
              </Text>
            )}
        </div>
        <Contact>
          Contact Host
        </Contact>
      </div>
    );
  }
}

export default Main;
export {
  TopLeft,
  Title,
  City,
  Host,
  HouseDetails,
  Read,
};
