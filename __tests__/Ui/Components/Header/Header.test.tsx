import renderer from 'react-test-renderer';

const Header = require('../../../../src/Ui/Components/Header').default

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(Header).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
