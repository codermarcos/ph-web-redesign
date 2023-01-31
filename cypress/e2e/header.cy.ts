/* eslint-disable max-lines-per-function */
import { selector } from 'cypress/support/selector';

describe(
  'Header',
  () => {

    describe(
      'when used not logged',
      () => {

        beforeEach(
          () => {

            cy.visit('/');

          }
        );

        it(
          'should show login button when not logged',
          () => {

            cy
              .get(selector`button-login`)
              .should('be.visible')
              .should('contain.text', 'Log in with Product Hunt');

          }
        );

      }
    );

    describe(
      'when used logged',
      () => {

        beforeEach(
          () => {

            cy.intercept(
              'POST',
              '/api/graphql',
              (req) => {

                req
                  .reply(
                    (res) => {

                      let query: string;

                      switch (true) {

                        case JSON.stringify(req.body).includes('viewer'):
                          query = 'USER';
                          break;

                        default:
                          query = 'POSTS';
                          break;

                      }

                      res.send({ fixture: `QUERY_${query}.json` });

                    }
                  );

              }
            );
            cy.visit('/');

          }
        );

        it(
          'should show profile photo and search',
          () => {

            cy
              .get(selector`button-login`)
              .should('be.visible')
              .should('contain.text', 'Log in with Product Hunt');

          }
        );

      }
    );

  }
);
