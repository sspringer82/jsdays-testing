describe('fetchData', () => {
  it('should call the callback after 1 second with data', (done) => {
    function callback(data) {
      expect(data.length).toBe(2);
      done();
    }
    const result = fetchData(callback);
  });

  it('should call the back with klaus as first dataset', (done) => {
    fetchData(function (data) {
      expect(data[0].name).toBe('Klaus');
      done();
    });
  });
});
