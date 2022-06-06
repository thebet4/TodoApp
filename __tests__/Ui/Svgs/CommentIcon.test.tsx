import renderer from 'react-test-renderer';

const CommentIcon = require('../../../src/Ui/Sgvs/CommentIcon').default

describe('<CommentIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(CommentIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
