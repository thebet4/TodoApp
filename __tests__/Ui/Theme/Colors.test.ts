const Colors = require('../../../src/Ui/Theme/Colors').default

describe('Return color scheme correctly', () => {
  it('renders correctly', () => {
    const type = typeof Colors
    expect(type).toBe(typeof {})
  });
});
