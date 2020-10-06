describe.skip('DB Test', () => {
  it('should read from database', () => {
    const dbConnection = {
      query: jest.fn().mockReturnValue(Promise.resolve([{ id: 1 }])),
    };

    const userModel = new UserModel(dbConnection);

    const users = userModel.getAll();

    expect(users.length).toBe(2);
  });
});
