describe('Main Display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', ({
      movies: [
        {
          average_rating: 9,
          backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          id: 436270,
          poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          release_date: "2022-10-19",
          title: "Black Adam"
        }, {
          average_rating: 10,
          backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
          id: 724495,
          poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
          release_date: "2022-09-15",
          title: "The Woman King"
        }, {
          average_rating: 10,
          backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
          id: 1013860,
          poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
          release_date: "2022-11-15",
          title: "R.I.P.D. 2: Rise of the Damned"
        }
      ]
    }))
    cy.visit('http://localhost:3001/');
  })
   
    it('should display logo', () => {
      cy.get(".App-logo").should('be.visible')
    });
    
    it('should display all movies', () => {
      cy.get("#436270").should("have.attr", 'src').should('include', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      cy.get("#724495").should("have.attr", 'src').should('include', "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg")
      cy.get("#1013860").should("have.attr", 'src').should('include', "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg")
    });

    it('should display featured movies on top', () => {
      cy.get('#root > main > div.top-display').should("have.attr", 'style')
    });

  });
