class CommentApi {
  static commentId =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/G3wMcM1VrPFaglNGy9ya/comments';

  static getComments = async (id) => {
    const response = await fetch(`${this.commentId}?item_id=${id}`);
    const data = await response.json();
    return data;
  };

  static setComments = async (id, username, comment) => {
    const response = await fetch(this.commentId, {
      method: 'post',
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });

    const data = await response.text();
    return data;
  };

  static counterComments = (data) => data.length;
}

module.exports = CommentApi;
