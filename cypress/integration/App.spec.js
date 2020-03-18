describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with Thrift Shift Title', () => {
    cy.visit ('/');
    cy.get('[data-cy=title]').should('contain', 'Thrift Shift');
  });

  it ('opens itemForm after click on addItem btn', () => {
    cy.visit ('/');
    cy.get('[data-cy=button]').click();
    cy.get('[data-cy=dialog]').should('contain', 'Add an Item to Sell');
  });
});
