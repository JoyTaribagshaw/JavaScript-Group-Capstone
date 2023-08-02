// import CommentApi from '../src/Apicomment.js';

// describe('Api testing', () => {
//   const testAray = [
//     {
//       comment: 'Great movie!',
//       creation_date: '2023-08-02',
//       username: 'Maris',
//     },
//     {
//       comment: 'Nice!',
//       creation_date: '2023-08-02',
//       username: 'Jasmine',
//     },
//   ];
//   test('Comment Counter', () => {
//     const comment = CommentApi.counterComments(testAray);
//     expect(comment).toBe(2);
//   });
// });

const CommentApi = require('../src/Apicomment.js');

describe('Api testing', () => {
  const testArray = [
    {
      comment: 'Great movie!',
      creation_date: '2023-08-02',
      username: 'Maris',
    },
    {
      comment: 'Nice!',
      creation_date: '2023-08-02',
      username: 'Jasmine',
    },
  ];
  test('Comment Counter', () => {
    const comment = CommentApi.counterComments(testArray);
    expect(comment).toBe(2);
  });
});
