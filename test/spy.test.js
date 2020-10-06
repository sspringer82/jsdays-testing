describe('Spy', () => {
  it('the callback should have been called', () => {
    const callback = jasmine.createSpy('callback');

    jasmine.clock().install();
    fetchData(callback);
    jasmine.clock().tick(1000);
    // wurde der callback aufgerufen?

    const expected = [
      { id: 1, name: 'Klaus', email: 'klaus@home.de' },
      { id: 2, name: 'Lisa', email: 'lisa@work.de' },
    ];

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(expected);

    // callback.calls mit allen Informationen

    jasmine.clock().uninstall();
  });
});
