import {Test} from '../../src/app/test';

describe('Cypress', () => {
  it('Test', () => {
    const x = new Test();

    cy.get('body');
  });

});
