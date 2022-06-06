import renderer from 'react-test-renderer';

const PriorityIcon = require('../../../src/Ui/Sgvs/PriorityIcon').default

describe('<PriorityIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(PriorityIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
