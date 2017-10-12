import { AngularJS2BasicsPage } from './app.po';

describe('angular-js2-basics App', function() {
  let page: AngularJS2BasicsPage;

  beforeEach(() => {
    page = new AngularJS2BasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
