const countMovies = () => {
  const moviesLink = document.querySelector('#main-title');
  const moviesCount = document.querySelectorAll('.each-movie').length;
  moviesLink.textContent = `Top Movies (${moviesCount})`;
};

export default countMovies;