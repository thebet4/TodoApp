import renderer from 'react-test-renderer';

const TaskScreen = require('../../src/Screens/TasksScreen').default

describe('<TaskScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(TaskScreen).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
