//to cleanData 
const cleanData (data) => {
  return {
    average_rating: data.average_rating || 'No Rating Available',
    backdrop_path: data.backdrop_path,
    budget: data.budget ? data.budget.toLocalString() : 'No Budget Available',
    genres: data.genres.join(', ') || 'No Genres',
    overview: data.overview || 'No Overview Available',
    poster_path: data.poster_path,
    release_date: data.release_date || 'No Release Date Available',
    revenue: data.revenue ? data.revenue.toLocalString() : 'No Revenue Available',
    runtime: data.runtime ? `${data.runtime} minutes` : 'No Runtime Available',
    tagline: data.tagline || 'No Tagline Available',
    title: data.title || 'No Title Available',
  }
}

export default cleanData