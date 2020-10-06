const axios = require('axios');

async function fetchUsers() {
  const response = await axios('http://localhost:1234/users');
  return response.data;
}

module.exports = fetchUsers;
