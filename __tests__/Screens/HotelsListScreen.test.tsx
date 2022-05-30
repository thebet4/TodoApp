import renderer from 'react-test-renderer';
import React from 'react';

import { HotelsListScreen } from '../../src/Screens';

jest.useFakeTimers();
describe('<HotelsListScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HotelsListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
