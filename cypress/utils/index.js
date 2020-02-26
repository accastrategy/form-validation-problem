export const visit = (qs = '') => cy.visit(`/?${qs}`);

export const waitForStore = () => {
    return cy.window()
        .its('__store')
        .should('exist');
};
