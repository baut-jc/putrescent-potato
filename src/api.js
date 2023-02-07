const fetchData = (movieId = '') => { //
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
      .then((response) => {
        console.log(response)
        if(!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
        return response.json()
      })
}

export default fetchData