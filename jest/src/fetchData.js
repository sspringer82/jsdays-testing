function fetchData() {
  const data = [
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
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

module.exports = fetchData;
