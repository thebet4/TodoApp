import renderer from 'react-test-renderer';
import React from 'react';

import { HotelCard, TeamCard } from '../../src/Ui/Cards';

describe('<HotelCard />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HotelCard imageUrl="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<TeamCard />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TeamCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
