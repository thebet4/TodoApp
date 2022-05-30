import renderer from 'react-test-renderer';
import React from 'react';

import { Container, ContentContainer } from '../../src/Ui/Containers';

describe('<Container />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<ContentContainer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ContentContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
