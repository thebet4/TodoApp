import renderer from 'react-test-renderer';

const TabBarItem = require('../../../../src/Ui/Components/TabBarItem').default;

describe('<TabBarItem />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(TabBarItem).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
