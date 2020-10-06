function doSomething(window) {
  window.location.href = '/foo';
}

it('should change the location', () => {
  const fakeWindow = {
    location: {
      href: 'xyz',
    },
  };
  doSomething(fakeWindow);
  expect(fakeWindow.location.href).toBe('/foo');
});
