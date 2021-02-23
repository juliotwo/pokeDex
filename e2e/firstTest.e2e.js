describe('Example', () => {
  it('go to pokedex ', async () => {
    await expect(element(by.id('list_pokedex'))).toBeVisible();
  });
  it('go to detail ', async () => {
    await expect(element(by.id('list_1'))).toBeVisible();
    await element(by.id('list_1')).tap();
  });
  it('go to back  ', async () => {
    await expect(element(by.id('bt_back'))).toBeVisible();
    await element(by.id('bt_back')).tap();
  });
  it('scroll and load more  ', async () => {
    await element(by.id('list_pokedex')).scroll(2000, 'down');
  });
});
