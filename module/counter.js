const countMovies = () => {
  const moviesLink = document.querySelector('#main-title');
  const moviesCount = document.querySelectorAll('.each-movie').length;
  moviesLink.textContent = `Top Movies (${moviesCount})`;
  return moviesCount;
};

export default countMovies;