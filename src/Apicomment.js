export default class commentApi {
    static commentId =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcfL4bzfqSk0ihg1PeIe/comments';

    static getComments = async (id) => {
        const response = await fetch (`${this.commentId}?item_id=${id}`);

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
    
      static counterComments = (data) => {
        let count = 0;
        for (let i = 0; i < data.length; i += 1) {
          count += 1;
        }
        return count;
      };  
}