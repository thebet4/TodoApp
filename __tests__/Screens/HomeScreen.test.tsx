import renderer from 'react-test-renderer';
import React from 'react';

import { HomeScreen } from '../../src/Screens';

jest.useFakeTimers();
describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const props: any = undefined;
    const tree = renderer.create(<HomeScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
