import { AngularRouterCoursePage } from './app.po';

describe('angular-router-course App', () => {
  let page: AngularRouterCoursePage;

  beforeEach(() => {
    page = new AngularRouterCoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
