function fetchData(callback) {
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

  setTimeout(() => {
    callback(data);
  }, 1000);
}
