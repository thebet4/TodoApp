import renderer from 'react-test-renderer';

const SearchIcon = require('../../../src/Ui/Sgvs/SearchIcon').default

describe('<SearchIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(SearchIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
