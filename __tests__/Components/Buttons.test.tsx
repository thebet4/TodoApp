import renderer from 'react-test-renderer';
import React from 'react';

import { Button } from '../../src/Ui/Buttons';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
