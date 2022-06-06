import renderer from 'react-test-renderer';

const TodoList = require('../../../../src/Ui/Components/TodoList').default;

describe('<TodoList />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(TodoList).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
