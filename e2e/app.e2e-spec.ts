import { MrHandPage } from './app.po';

describe('mr-hand App', function() {
  let page: MrHandPage;

  beforeEach(() => {
    page = new MrHandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
