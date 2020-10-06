describe('Math.random', () => {
  it('should return a number', () => {
    const result = Math.random();
    expect(result).toEqual(jasmine.any(Number));
  });

  it('should return 0.37198783414099745', () => {
    const obj = {
      getName() {
        return 'Klaus';
      },
    };

    spyOn(obj, 'getName');

    obj.getName.and.returnValue('Lisa'); // - statischen Wert zurückgeben
    // obj.getName.and.callFake(() => { - fake call auf eine Funktion
    //   return 'Hans-Peter';
    // });
    // obj.getName.and.callThrough(); - original funktion aufrufen

    expect(obj.getName()).toBe('Lisa');
    expect(obj.getName).toHaveBeenCalledTimes(1);
  });

  it('should return 7', () => {
    spyOn(Math, 'random').and.returnValue(0.7003614550711916);
    // Act
    const result = randomGenerator();
    // Assert
    expect(result).toBe(7);
  });

  it('should return 5', () => {
    spyOn(Math, 'random').and.returnValue(0.5003614550711916);
    const result = randomGenerator();
    expect(result).toBe(5);
  });

  it('should return 9', () => {
    spyOn(Math, 'random').and.returnValue(0.9993614550711916);
    const result = randomGenerator();
    expect(result).toBe(9);
  });

  it('should return 1', () => {
    spyOn(Math, 'random').and.returnValue(0.0093614550711916);
    const result = randomGenerator();
    expect(result).toBe(1);
  });
});
