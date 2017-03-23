import { HeroListPage } from './app.po';

describe('hero-list App', function() {
  let page: HeroListPage;

  beforeEach(() => {
    page = new HeroListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
