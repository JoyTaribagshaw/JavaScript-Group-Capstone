export default class LikesApi {
  static url =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/G3wMcM1VrPFaglNGy9ya/likes';

  static getLikes = async () => {
    try {
      const res = await fetch(this.url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  };

  static setLikes = async (id) => {
    try {
      const res = await fetch(this.url, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ item_id: id }),
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.text();
      return data;
    } catch (error) {
      return null;
    }
  };
}
