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
});
