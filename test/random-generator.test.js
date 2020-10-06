fdescribe('Math.random', () => {
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
});
