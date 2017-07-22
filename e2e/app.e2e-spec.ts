import { CartolaPgeFePage } from './app.po';

describe('cartola-pge-fe App', () => {
  let page: CartolaPgeFePage;

  beforeEach(() => {
    page = new CartolaPgeFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
