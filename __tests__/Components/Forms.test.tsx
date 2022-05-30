import renderer from 'react-test-renderer';
import React from 'react';

import { SearchForm } from '../../src/Ui/Forms';

describe('<SearchForm />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
