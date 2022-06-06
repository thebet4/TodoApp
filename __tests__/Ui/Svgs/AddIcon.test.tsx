import renderer from 'react-test-renderer';

const AddIcon = require('../../../src/Ui/Sgvs/AddIcon').default

describe('<AddIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(AddIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
