describe('Calculator', () => {
  it('should add 1 and 1 and return 2', () => {
    // Tripple A
    // Arrange
    const calc = new Calc();
    // Act
    const result = calc.add(1, 1);
    // Assert
    expect(result).toBe(2);

    // Blöde Idee:
    // expect((new Calc).add(1,1)).toBe(2);
  });

  describe('add', () => {
    let calc;
    beforeEach(() => {
      calc = new Calc();
    });

    // beforeAll(() => {});
    // afterEach(() => {});
    // afterAll(() => {});

    it('should return a number', () => {
      const result = calc.add(1, 1);
      expect(result).toEqual(jasmine.any(Number));
    });

    // Triangulation - ein Problem von 2 Seiten angehen
    it('should add 2 and 2 and return 4', () => {
      const result = calc.add(2, 2);
      expect(result).toBe(4);
    });

    it('should add 3 and 2 and return 5', () => {
      const result = calc.add(3, 2);
      expect(result).toBe(5);
    });
  });
});
