// import Movies from '../module/Api.js';

// test('MoviesCounter test', async () => {
//   const counter = await Movies.counterMovies();
//   expect(counter).toBe(10);
// });

const Movies = require('../module/Api.js');

test('MoviesCounter test', async () => {
  const counter = await Movies.counterMovies();
  expect(counter).toBe(10);
});
