import TestRenderer from 'react-test-renderer';

const App = require('../App').default;

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(App).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
