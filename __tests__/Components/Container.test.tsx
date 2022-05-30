import renderer from 'react-test-renderer';

const Contianer = require('@app/Ui').default;

describe('<Container />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(Contianer).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
