import { NgrxCounterExamplePage } from './app.po';

describe('ngrx-counter-example App', function() {
  let page: NgrxCounterExamplePage;

  beforeEach(() => {
    page = new NgrxCounterExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
