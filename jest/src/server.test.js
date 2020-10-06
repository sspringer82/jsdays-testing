const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const fetchUsers = require('./server');

describe('server', () => {
  it('should fetch the user list from the server', async () => {
    mock.onGet('http://localhost:1234/users').reply(200, [
      {
        id: 1,
        name: 'Klaus',
        email: 'klaus@home.de',
      },
      {
        id: 2,
        name: 'Lisa',
        email: 'lisa@work.de',
      },
    ]);
    const userData = await fetchUsers();
    expect(userData.length).toBe(2);
  });

  it('fail', async () => {
    mock.onGet('http://localhost:1234/users').reply(404, 'Not found');

    expect(fetchUsers()).rejects.toMatch('Foo');
  });
});
