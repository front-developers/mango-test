import { MangoTestPage } from './app.po';

describe('mango-test App', function() {
  let page: MangoTestPage;

  beforeEach(() => {
    page = new MangoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
