import instance from '../../../shared/services/basic-html-services'

const API_KEY = "923c2cf88ec4338da74c768a045101f0"

export const trendingMovies = () => {
    return instance.get(`/trending/all/day?api_key=${API_KEY}`)
}

export const movieSearch = (query) => {
    return instance.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`)
}

export const movieDetails = (id) => {
    return instance.get(`/movie/${id}?api_key=${API_KEY}`)
}
export const getMovieCast = (movieId) => {
  return instance.get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
}

export const getMovieReviews = (movieId) => {
  return instance.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
}