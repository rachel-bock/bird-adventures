describe('empty spec', () => {

  beforeEach(() => {
    cy.intercept('GET','https://api.ebird.org/v2/data/obs/US-CO/recent', {fixture: `recentData.json`});
    cy.intercept('GET', `https://api.ebird.org/v2/product/top100/US-CO/2022/8/8`, {fixture: `top100.json`});  //This link is dynamic and will change tomorrow.
    cy.visit('http://localhost:3000');
  });

  it('visits the application', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('img').should('be.visible');    
  });

  it('should click the Recent Sightings List and see 5 sightings', () => {
    cy.get('[href="/sightings"]').click();
    cy.get(':nth-child(1) > .sighting-card').contains(`Blue-gray Gnatcatcher`);
    cy.get('.sightings-wrapper').should('be.visible');
    cy.get('.sightings-wrapper > :nth-child(3)').contains('Goldfinch');
    cy.get('.sighting-card').should('have.length', 5);
  });

  it('should click on the Top 100 Contributors and see 3 contributor cards', () => {
    cy.get('[href="/contributors"]').click();
    cy.url().should('eq', 'http://localhost:3000/contributors');
    cy.get('.contributor').should('have.length', 3);
    cy.get('.contributor').should('be.visible');
  });

  it('should be able to search for a bird sighting', () => {
    cy.get('[href="/sightings"]').click();
    cy.url().should('eq', 'http://localhost:3000/sightings');
    cy.get('input').type('chickadee');
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:3000/search/chickadee');
    cy.get('.checklist-card').should('have.length', 1);
  })

  it('returns to the home page of the application', () => {
    cy.get('[href="/sightings"]').click();
    cy.url().should('eq', 'http://localhost:3000/sightings');
    cy.get('[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should be able to navigate using the window back and forward buttons', () => {
    cy.get('[href="/sightings"]').click();
    cy.url().should('eq', 'http://localhost:3000/sightings');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:3000/');
    cy.go('forward');
    cy.url().should('eq', 'http://localhost:3000/sightings');
  });

  it('Should show an error message when going to a page that does not exist', () => {
    cy.visit('http://localhost:3000/banana');
    cy.get('h3').contains('Sorry');
  });

})