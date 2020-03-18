describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with Thrift Shift Title', () => {
    cy.visit ('/');
    cy.get('[data-cy=title]').should('contain', 'Thrift Shift');
  });
});
