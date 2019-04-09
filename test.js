import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import App from './client/src/components/app';
import Main, {
  TopLeft,
  Title,
  City,
  Host,
  HouseDetails,
  Read,
} from './client/src/components/main';
import SuperHost from './client/src/components/superhost';
import Rating from './client/src/components/rating';
import SelfCheckIn from './client/src/components/selfcheckin';

const { fakedata } = require('./data.js');

const falseData = [{
  hostid: 1,
  firstName: 'Aria',
  lastName: 'Willow',
  pic: 'https://source.unsplash.com/random',
  title: 'Ut molestias ipsam eius tenetur enim',
  city: 'South Montana',
  country: 'Uganda',
  guests: 7,
  beds: 2,
  bedrooms: 2,
  baths: 1.5,
  superHost: false,
  selfCheckIn: false,
  rating: 85,
  description: 'Illo aliquid ea qui est exercitationem. Et quibusdam animi laudantium distinctio. Expedita et sequi. Consequuntur enim ullam dolore aut impedit labore. Minus quidem id nostrum omnis veniam iusto voluptates aut. Perspiciatis veritatis unde voluptatum officiis.\n \rSunt excepturi voluptatem sapiente. Corrupti vel quis eligendi error aut dolorum voluptatem. Nihil explicabo harum quia rem velit illum quia. Consequatur explicabo commodi ut cumque et ullam possimus et.\n \rQuisquam iusto culpa. Eum exercitationem distinctio neque quo quaerat. Nisi neque occaecati non debitis est quaerat adipisci est. Veniam sed nulla in et nihil nam qui. Necessitatibus voluptas harum.\n \rNon voluptatibus rerum iusto omnis quia possimus optio pariatur quia. Ut est atque. Eius porro accusamus officia tempore. Et sint maxime et recusandae libero natus. Recusandae voluptates in asperiores impedit officiis dolorem dolorem sed. Ipsam iste cum et officia.\n \rEst maxime modi qui voluptatem accusantium sed. Quia dolorem sint assumenda et aut ut. Mollitia maxime omnis optio. Et quo est enim.\n \rFugit aliquid id. Ut harum eveniet voluptatem incidunt vel architecto. Deserunt vel quasi expedita est quia sit quia reprehenderit.\n \rRepellendus consequuntur doloribus quod. Eius commodi vel sapiente et at officia veniam eius aut. Est beatae eum est iste harum. Aut qui officiis asperiores nobis ad quia sed est rerum.\n \rNobis cupiditate unde quo dignissimos maiores. Sed iure dicta pariatur dolores perferendis earum. Et vel perspiciatis qui omnis ut quam illum et. Voluptatem provident fugit non molestiae. Reiciendis consequatur reiciendis aut aut vel porro repellendus laboriosam.\n \rError tenetur illum atque. Quae et et neque aut. Tempora corporis odit sint ratione quam perferendis mollitia. Maxime velit deleniti accusamus nemo amet accusantium quos et accusamus.\n \rNecessitatibus non eos quod ut placeat. Iste culpa harum vel omnis occaecati ipsum ea voluptatem tempora. Quis aut ullam hic facere quos similique.',
  license: 'VT758875689283',
}];

const mock = fakedata[0];

describe('<App />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('renders one <Main /> components', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ host: fakedata });
    expect(wrapper.find(Main)).to.have.lengthOf(1);
  });

  it('renders <Rating /> correctly', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    expect(wrapper.find(Rating)).to.have.lengthOf(1);
  });

  it('renders <SuperHost /> correctly', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    expect(wrapper.find(SuperHost)).to.have.lengthOf(1);
  });

  it('renders <SelfCheckIn /> correctly', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    expect(wrapper.find(SelfCheckIn)).to.have.lengthOf(1);
  });

  xit('renders an `.title`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.title')).to.have.lengthOf(1);
  });

  xit('renders four `.housedetails`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.housedetails')).to.have.lengthOf(4);
  });

  xit('renders an `.city`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.city')).to.have.lengthOf(1);
  });

  xit('renders an `.avatar`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.avatar')).to.have.lengthOf(1);
  });

  xit('renders an `.host`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.host')).to.have.lengthOf(1);
  });

  xit('renders an `.highlights`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.highlights')).to.have.lengthOf(1);
  });

  it('should render the correct text if it is a great location', () => {
    const wrapper = shallow(<Rating info={fakedata[0]} />);
    expect(wrapper.text()).equal(`Great Location Experience${fakedata[0].rating} of recent guests gave the check-in process a 5-star rating.`);
  });

  it('should render the correct text if it is a great location', () => {
    const wrapper = shallow(<SuperHost info={fakedata[0]} />);
    expect(wrapper.text()).equal(`${fakedata[0].firstName} ${fakedata[0].lastName} is a SuperhostSuperhost are experienced, highly rated hosts who are committed to providing great stays for guests.`);
  });

  it('should render the correct text if it is a great location', () => {
    const wrapper = shallow(<SelfCheckIn info={fakedata[0]} />);
    expect(wrapper.text()).equal('Self check-inCheck yourself in with the keypad code.');
  });

  it('should NOT render <SelfCheckIn /> if selfcheckin is false', () => {
    const wrapper = shallow(<Main details={falseData[0]} />);
    expect(wrapper.find(SelfCheckIn)).to.have.lengthOf(0);
  });

  it('should NOT render <Rating /> if rating is below 90', () => {
    const wrapper = shallow(<Main details={falseData[0]} />);
    expect(wrapper.find(Rating)).to.have.lengthOf(0);
  });

  it('should NOT render <SuperHost /> if superhost is false', () => {
    const wrapper = shallow(<Main details={falseData[0]} />);
    expect(wrapper.find(SuperHost)).to.have.lengthOf(0);
  });

  it('Main has a default state of true', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    expect(wrapper.state('showAll')).to.equal(true);
  });

  it('Main has a state of true after clicking Read More', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    // expect(wrapper.find(TopLeft)).to.have.lengthOf(1);
    expect(wrapper.state('showAll')).to.equal(true);
    wrapper.find(Read).simulate('click');
    expect(wrapper.state('showAll')).to.equal(false);
    // expect(wrapper.text()).to.equal();
  });

  it('Main has TopLeft styled component', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    expect(wrapper.find(TopLeft)).to.have.lengthOf(1);
  });

  it('Title text in Main component is correct', () => {
    const wrapper = shallow(<Main details={fakedata[0]} />);
    expect(wrapper.find(Title).children().text()).equal(`${fakedata[0].title}`);
  });

  it('City text in Main component is correct', () => {
    const wrapper = shallow(<Main details={mock} />);
    expect(wrapper.find(City).children().text()).equal(`${mock.city}`);
  });

  xit('Host text in Main component is correct', () => {
    const wrapper = shallow(<Main details={mock} />);
    expect(wrapper.find(Host).at(0).children(1).text()).equal(`${mock.firstName} ${mock.lastName}`);
  });

  xit('HouseDetails text in Main component is correct', () => {
    const wrapper = shallow(<Main details={mock} />);
    expect(wrapper.find(HouseDetails).children().text()).equal(`${mock.title}`);
  });
});
