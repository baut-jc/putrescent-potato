describe('Movie Details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', ({
          "movie": {
              "id": 436270,
              "title": "Black Adam",
              "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
              "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
              "release_date": "2022-10-19",
              "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
              "genres": [
                  "Action",
                  "Fantasy",
                  "Science Fiction"
              ],
              "budget": 200000000,
              "revenue": 384571691,
              "runtime": 125,
              "tagline": "The world needed a hero. It got Black Adam.",
              "average_rating": 4
          }
    }))
    cy.visit('http://localhost:3000/436270');
  })

  it('should display logo', () => {
    cy.get(".App-logo").should('be.visible')
  });

  it('should have an id on the web address ', () => {
    cy.url().should('include', '436270')
  });

  it('should show the title', () => {
    cy.contains('Black Adam')
  });

  it('should have a poster', () => {
    cy.get('.poster').should('be.visible')
  });

  it('should have the movie information', () => {
    cy.contains('2022-10-19')
    cy.contains('The world needed a hero. It got Black Adam.')
    cy.contains('125')
    cy.contains("Action, Fantasy, Science Fiction")
    cy.contains('200,000,000')
    cy.contains('384,571,691')
    cy.contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  });
  
  it('should have a background', () => {
    cy.get('.movie-detail').should('have.css', 'background-image').and('include', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
  });

  it('should have a home button', () => {
    cy.get('button').should('be.visible')
  });
 
  it('should return to the home page on click', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should display an error with incorrect url', () => {
    cy.visit('http://localhost:3000/5terriblyBadURL')
    cy.contains('404 Movie Not Found')
  });
})