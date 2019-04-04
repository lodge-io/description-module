import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';
import sinon from 'sinon';
import { expect } from 'chai';
import App from './client/src/components/app';
import Main from './client/src/components/main';
import SuperHost from './client/src/components/superhost';
import Rating from './client/src/components/rating';
import SelfCheckIn from './client/src/components/selfcheckin';

// Enzyme.configure({ adapter: new Adapter() });

// const {shallow} = require('enzyme');

const generate = require('./fake/names');
const fakedata = require('./data.js').fakedata;

// test('Fake data structure is correct', () => {
//   const data = generate()
//   const structure = {
//     firstName: expect.any(String),
//     lastName: expect.any(String),
//     pic: expect.any(String),
//     title: expect.any(String),
//     city: expect.any(String),
//     country: expect.any(String),
//     guests: expect.any(Number),
//     beds: expect.any(Number),
//     bedrooms: expect.any(Number),
//     baths: expect.any(Number),
//     superHost: expect.any(Boolean),
//     selfCheckIn: expect.any(Boolean),
//     rating: expect.any(Number),
//     description: expect.any(String),
//     license: expect.any(String),
//   }
//   expect(data[0]).toEqual((expect.objectContaining(structure)));
// });
const falseData = [{
  'hostid': 1,
  'firstName': 'Aria',
  'lastName': 'Willow',
  'pic': 'https://source.unsplash.com/random',
  'title': 'Ut molestias ipsam eius tenetur enim',
  'city': 'South Montana',
  'country': 'Uganda',
  'guests': 7,
  'beds': 2,
  'bedrooms': 2,
  'baths': 1.5,
  'superHost': false,
  'selfCheckIn': false,
  'rating': 85,
  'description': 'Illo aliquid ea qui est exercitationem. Et quibusdam animi laudantium distinctio. Expedita et sequi. Consequuntur enim ullam dolore aut impedit labore. Minus quidem id nostrum omnis veniam iusto voluptates aut. Perspiciatis veritatis unde voluptatum officiis.\n \rSunt excepturi voluptatem sapiente. Corrupti vel quis eligendi error aut dolorum voluptatem. Nihil explicabo harum quia rem velit illum quia. Consequatur explicabo commodi ut cumque et ullam possimus et.\n \rQuisquam iusto culpa. Eum exercitationem distinctio neque quo quaerat. Nisi neque occaecati non debitis est quaerat adipisci est. Veniam sed nulla in et nihil nam qui. Necessitatibus voluptas harum.\n \rNon voluptatibus rerum iusto omnis quia possimus optio pariatur quia. Ut est atque. Eius porro accusamus officia tempore. Et sint maxime et recusandae libero natus. Recusandae voluptates in asperiores impedit officiis dolorem dolorem sed. Ipsam iste cum et officia.\n \rEst maxime modi qui voluptatem accusantium sed. Quia dolorem sint assumenda et aut ut. Mollitia maxime omnis optio. Et quo est enim.\n \rFugit aliquid id. Ut harum eveniet voluptatem incidunt vel architecto. Deserunt vel quasi expedita est quia sit quia reprehenderit.\n \rRepellendus consequuntur doloribus quod. Eius commodi vel sapiente et at officia veniam eius aut. Est beatae eum est iste harum. Aut qui officiis asperiores nobis ad quia sed est rerum.\n \rNobis cupiditate unde quo dignissimos maiores. Sed iure dicta pariatur dolores perferendis earum. Et vel perspiciatis qui omnis ut quam illum et. Voluptatem provident fugit non molestiae. Reiciendis consequatur reiciendis aut aut vel porro repellendus laboriosam.\n \rError tenetur illum atque. Quae et et neque aut. Tempora corporis odit sint ratione quam perferendis mollitia. Maxime velit deleniti accusamus nemo amet accusantium quos et accusamus.\n \rNecessitatibus non eos quod ut placeat. Iste culpa harum vel omnis occaecati ipsum ea voluptatem tempora. Quis aut ullam hic facere quos similique.',
  'license': 'VT758875689283'
}];

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
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find(Rating)).to.have.lengthOf(1);
  });

  it('renders <SuperHost /> correctly', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find(SuperHost)).to.have.lengthOf(1);
  });

  it('renders <SelfCheckIn /> correctly', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find(SelfCheckIn)).to.have.lengthOf(1);
  });

  it('renders an `.title`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.title')).to.have.lengthOf(1);
  });

  it('renders four `.housedetails`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.housedetails')).to.have.lengthOf(4);
  });

  it('renders an `.city`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.city')).to.have.lengthOf(1);
  });

  it('renders an `.avatar`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.avatar')).to.have.lengthOf(1);
  });

  it('renders an `.host`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.host')).to.have.lengthOf(1);
  });

  it('renders an `.highlights`', () => {
    const wrapper = shallow(<Main details={fakedata} />);
    expect(wrapper.find('.highlights')).to.have.lengthOf(1);
  });

  it('should render the correct text if it is a great location', () => {
    const wrapper = shallow(<Rating info={fakedata[0]} />);
    // expect(wrapper.find('.title')).to.have.lengthOf(1);
    expect(wrapper.text()).equal(` Great Location Experience ${fakedata[0].rating} of recent guests gave the check-in process a 5-star rating.`);
  });

  it('should render the correct text if it is a great location', () => {
    const wrapper = shallow(<SuperHost info={fakedata[0]} />);
    // expect(wrapper.find('.title')).to.have.lengthOf(1);
    expect(wrapper.text()).equal(` ${fakedata[0].firstName} ${fakedata[0].lastName} is a Superhost Superhost are experienced, highly rated hosts who are committed to providing great stays for guests.`);
  });

  it('should render the correct text if it is a great location', () => {
    const wrapper = shallow(<SelfCheckIn info={fakedata[0]} />);
    // expect(wrapper.find('.title')).to.have.lengthOf(1);
    expect(wrapper.text()).equal(' Self check-in Check yourself in with the keypad code.');
  });

  it('should NOT render <SelfCheckIn /> if selfcheckin is false', () => {
    const wrapper = shallow(<Main details={falseData} />);
    expect(wrapper.find(SelfCheckIn)).to.have.lengthOf(0);
  });

  it('should NOT render <Rating /> if rating is below 90', () => {
    const wrapper = shallow(<Main details={falseData} />);
    expect(wrapper.find(Rating)).to.have.lengthOf(0);
  });

  it('should NOT render <SuperHost /> if superhost is false', () => {
    const wrapper = shallow(<Main details={falseData} />);
    expect(wrapper.find(SuperHost)).to.have.lengthOf(0);
  });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
