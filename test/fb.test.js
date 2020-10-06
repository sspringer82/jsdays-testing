describe('fizzbuzz', () => {
  it('should return 1 if 1 is provided', () => {
    const result = fb(1);
    expect(result).toBe(1);
  });

  it('should return 2 if 2 is provided', () => {
    const result = fb(2);
    expect(result).toBe(2);
  });

  it('should return fizz if 3 is provided', () => {
    const result = fb(3);
    expect(result).toBe('fizz');
  });

  it('should return fizz if 6 is provided', () => {
    const result = fb(6);
    expect(result).toBe('fizz');
  });

  it('should return buzz if 5 is provided', () => {
    const result = fb(5);
    expect(result).toBe('buzz');
  });

  it('should return buzz if 10 is provided', () => {
    const result = fb(10);
    expect(result).toBe('buzz');
  });

  it('should return fizzbuzz if 15 is provided', () => {
    const result = fb(15);
    expect(result).toBe('fizzbuzz');
  });

  it('should return fizzbuzz if 30 is provided', () => {
    const result = fb(30);
    expect(result).toBe('fizzbuzz');
  });
});
