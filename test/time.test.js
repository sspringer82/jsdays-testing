describe('fetchData', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });
  it('should call the back with klaus as first dataset', () => {
    fetchData(function (data) {
      expect(data[0].name).toBe('Klaus');
    });
    jasmine.clock().tick(1000);
  });
});
