import countMovies from '../module/counter.js';

describe('countMovies', () => {
  test('updates the movies count in the link', () => {
    // Mock the DOM structure
    document.body.innerHTML = `
      <h1 id="main-title"></h1>
      <div class="each-movie"></div>
      <div class="each-movie"></div>
      <div class="each-movie"></div>
    `;

    // Call the function
    const result = countMovies();

    // Check the updated movies count
    const moviesLink = document.querySelector('#main-title');
    expect(result).toBe(3);
    expect(moviesLink.textContent).toBe('Top Movies (3)');
  });
});