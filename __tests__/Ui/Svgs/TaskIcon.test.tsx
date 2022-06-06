import renderer from 'react-test-renderer';

const TaskIcon = require('../../../src/Ui/Sgvs/TaskIcon').default

describe('<TaskIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(TaskIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
