import renderer from 'react-test-renderer';

const ClockIcon = require('../../../src/Ui/Sgvs/ClockIcon').default

describe('<ClockIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(ClockIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
