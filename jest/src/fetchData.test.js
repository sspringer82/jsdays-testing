const fetchData = require('./fetchData');

describe('fetchData', () => {
  it('should fetch the data async', (done) => {
    fetchData().then((data) => {
      expect(data.length).toBe(2);
      done();
    });
  });

  it('should fetch the data async (2)', async () => {
    const data = await fetchData();
    expect(data.length).toBe(2);
  });
});
