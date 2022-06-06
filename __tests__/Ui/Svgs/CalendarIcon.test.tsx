import renderer from 'react-test-renderer';

const CalendarIcon = require('../../../src/Ui/Sgvs/CalendarIcon').default

describe('<CalendarIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(CalendarIcon).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
