import { ExemplosAngular2Page } from './app.po';

describe('exemplos-angular2 App', () => {
  let page: ExemplosAngular2Page;

  beforeEach(() => {
    page = new ExemplosAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
