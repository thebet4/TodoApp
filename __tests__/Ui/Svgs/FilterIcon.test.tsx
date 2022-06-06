import renderer from 'react-test-renderer';

const FilterIcon = require('../../../src/Ui/Sgvs/FilterIcon').default

describe('<FilterIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(FilterIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
