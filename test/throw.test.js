function thatThrows(reallyThrow = true) {
  if (reallyThrow) {
    throw new Error();
  }
}

describe('Error testing', () => {
  it('should throw', () => {
    try {
      const result = thatThrows();
    } catch (e) {
      expect(e).toEqual(new Error());
    }
  });

  it('should thow #2', () => {
    expect(thatThrows.bind(null, true)).toThrow();
    expect(() => thatThrows(true)).toThrow();
  });

  it('should thow', () => {
    expect(thatThrows).toThrow();
    expect(thatThrows).toThrowError();
  });

  it('should not thow', () => {
    expect(() => thatThrows(false)).not.toThrow();
  });
});
