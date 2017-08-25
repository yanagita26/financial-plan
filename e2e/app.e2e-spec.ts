import { FinancialPage } from './app.po';

describe('financial App', () => {
  let page: FinancialPage;

  beforeEach(() => {
    page = new FinancialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
