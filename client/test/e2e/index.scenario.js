describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('publicly accessible and default route to be /projectsinfo', function() {
    expect(browser().location().path()).toBe("/projectsinfo");
  });
});