import renderer from 'react-test-renderer';

const ListIcon = require('../../../src/Ui/Sgvs/ListIcon').default

describe('<AddIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(ListIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
