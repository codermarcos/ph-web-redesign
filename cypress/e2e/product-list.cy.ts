import { selector } from 'cypress/support/selector';

describe(
  'Product List',
  () => {

    beforeEach(
      () => {

        cy.visit('/');

      }
    );

    it(
      'should show products when not logged',
      () => {

        cy
          .get(selector`post-list`)
          .should('be.visible')
          .children()
          .should('have.length', 11);

      }
    );

    it(
      'should get more products when scroll',
      () => {

        cy.scrollTo('bottom');

        cy.wait(5000);

        cy
          .get(selector`post-list`)
          .should('be.visible')
          .children()
          .should('have.length', 31);

      }
    );

  }
);
