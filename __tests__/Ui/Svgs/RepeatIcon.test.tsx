import renderer from 'react-test-renderer';

const RepeatIcon = require('../../../src/Ui/Sgvs/RepeatIcon').default

describe('<RepeatIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(RepeatIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
