const FontConfig = require('../../../src/Ui/Typography/Fonts').default

describe('Return font configuration correctly', () => {
  it('renders correctly', () => {
    const type = typeof FontConfig
    expect(type).toBe(typeof {})
  });
});
