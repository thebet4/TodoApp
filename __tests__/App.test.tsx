import renderer from 'react-test-renderer';

const App = require('../App').default;

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(App).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
