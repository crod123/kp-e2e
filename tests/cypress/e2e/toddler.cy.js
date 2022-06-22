/// <reference types="cypress" />

describe('Toddler Survey', () => {
    const uid = '408de641-5a7f-4ffc-b3c6-0b6aa69e220c&consent=toddler&phase=2';
    const type = 'toddler';
    const survey = '.vacmonitorContainer';
    let phase = '2';

    describe('(Phase 2) -', () => {
        cy.visit(`${Cypress.env('host')}?uuid=${uid}&consent=${type}&phase=${phase}`);

        it('Q1 - Since you last reported, has your child/dependent experienced any of the following side effects at or near where they got the shot? Please select all that apply.', () => {
            // PAGE 1
            cy.get(`${survey} [type="checkbox"]`).check('checkbox1').uncheck('checkbox1').should('not.be.checked')
            cy.get(`${survey} [type="checkbox"]`).check('checkbox2').should('be.checked')
            cy.get(`${survey} [type="submit"]`).click();

            // PAGE 2
            cy.get(survey).check('checkbox1').should('be.checked');
            cy.get(`${survey} [type="submit"]`).click();
        });

        it('Q2 - Did any of these symptoms cause you to seek medical care for your child or dependent?', () => {
            cy.get(`${survey} [type="checkbox"]`).check('checkbox1').uncheck('checkbox1').should('not.be.checked')
            cy.get(`${survey} [type="checkbox"]`).check('checkbox2').should('be.checked')

            cy.get(`${survey} [type="submit"]`).click();
        });
    });

    describe('(Phase 3) -', () => {
        phase = 3;

        cy.visit(`${Cypress.env('host')}?uuid=${uid}&consent=${type}&phase=${phase}`);

        it('Q1 - Since you last reported, has your child/dependent experienced any of the following side effects? Please select all that apply.', () => {
            // PAGE 1
            cy.get(`${survey} [type="checkbox"]`).check('checkbox1').uncheck('checkbox1').should('not.be.checked')
            cy.get(`${survey} [type="checkbox"]`).check('checkbox2').should('be.checked')

            cy.get(`${survey} [type="submit"]`).click();
        });

        it('Q2 - Did any of these symptoms cause you to seek medical care for your child or dependent?', () => {
            cy.get(`${survey} [type="checkbox"]`).check('checkbox1').uncheck('checkbox1').should('not.be.checked')
            cy.get(`${survey} [type="checkbox"]`).check('checkbox2').should('be.checked')

            cy.get(`${survey} [type="submit"]`).click();
        });
    });

    describe('Error -', () => {
        cy.visit(`${Cypress.env('host')}?uuid=${uid}&consent=${type}&phase=${phase}`);

        it('Can I click continue without selecting anything', () => {
            cy.get(`${survey} [type="submit"]`).click()

            cy.get('.ErrorInputMsg_ErrorInputMsg__2mZMb').should('be.visible');
        });
    });
});