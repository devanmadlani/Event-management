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

    it('should fill all the form details', function () {
        cy.get('#name').clear().type('Devan');
        cy.get('#email').clear().type('madlanidevan@gmail.com');
        cy.get('#date-picker').clear().type('1993-02-24');
        cy.get('[type="radio"]').first().check({ force: true })
        cy.get('select').select('Amsterdam').should('have.value', '3: Amsterdam')
    });

    it('should successfully submit the form ', function () {
        cy.get('#submit-form').click();
    });

    it('should click on view events subscribed', function () {
        cy.get('#event-subscribed-btn').click();
    });

    it('should unsubscribe event on click of delete button', function () {
        cy.get('#delete-event').click();
    });
});
