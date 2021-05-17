describe('Event overview component', ()=> {
    it('should visit event overview page', function () {
        cy.visit('/')
    });
    it('should search events by text', function () {
        cy.get('#searchEvent').clear().type('marco');
    });
    it('should click on event subscription button', function () {
        cy.get('#MAR2021032510').click();
    });
    it('should navigate to form subscription page', function () {
        cy.url().should('include', 'subscription-form/MAR2021032510');
    });
});
