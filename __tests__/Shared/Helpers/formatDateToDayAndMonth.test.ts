const formatDateToDayAndMonth = require('../../../src/Shared/Helpers/formatDateToDayAndMonth').default

describe('FormatDateToDayAndMonth Helper', () => {
  it('renders correctly', () => {
    const formatedDate = formatDateToDayAndMonth('2022-06-06')
    expect(typeof formatedDate).toBe(typeof '')
  });
});
