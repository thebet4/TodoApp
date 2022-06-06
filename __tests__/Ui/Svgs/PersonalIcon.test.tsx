import renderer from 'react-test-renderer';

const PersonalIcon = require('../../../src/Ui/Sgvs/PersonalIcon').default

describe('<PersonalIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(PersonalIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
