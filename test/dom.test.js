describe('dom testing', () => {
  it('it should add a div', () => {
    const div = document.createElement('div');
    div.innerText = 'Foo';

    document.querySelector('body').appendChild(div);

    const d = document.querySelector('div');

    expect(d.innerText).toBe('Foo');
  });

  it('should work', () => {
    const d = document.querySelector('div');

    expect(d.innerText).toBe('Foo');
  });
});
