import renderer from 'react-test-renderer';

const SunIcon = require('../../../src/Ui/Sgvs/SunIcon').default

describe('<SunIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(SunIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
