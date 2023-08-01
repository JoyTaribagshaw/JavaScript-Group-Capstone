import LikesApi from '../src/Likes.js';

export default class Movies {
  static url = 'https://api.tvmaze.com/search/shows?q=the';
  
    static counterMovies = async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      let count = 0;
      data.forEach((item) => {
        if (item.show.image !== null) {
          count += 1;
        }
        const title = document.querySelector('.title');
        if (title) title.textContent = `MovieHub (${count}) Movies `;
      });
  
      return count;
    };

    static displayMovies = async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      const movieContainer = document.querySelector('.movie-container');
  
      data.forEach((item) => {
        if (item.show.image !== null) {
          const div = document.createElement('div');
          div.classList.add('each-movie');
          div.innerHTML = `
          <img src="${item.show.image.medium}" alt="movie-image">
        <div class="each">
          <li>${item.show.name}</li>
          <div class="likes">
           <i class="fa-regular fa-thumbs-up" id="${item.show.id}"></i>
            <p>0 Likes</p>
          </div>
        </div>      
        <button id="${item.show.id}" class="button">Comments</button>`;
          movieContainer.appendChild(div);
        }
        this.likes();
        this.addLikes();
      });
    }
    static addLikes = () => {
      const icons = document.querySelectorAll(' .fa-thumbs-up');
      icons.forEach((icon) => {
        icon.addEventListener('click', () => {
          LikesApi.setLikes(parseInt(icon.id, 10)).then(() => {
            this.likes();
          });
        });
      });
    };
  
    static likes = () => {
      LikesApi.getLikes().then((data) => {
        data.forEach((item) => {
          const icon = document.getElementById(`${item.item_id}`);
          if (icon) {
            icon.nextElementSibling.innerHTML = `${item.likes} likes`;
          }
        });
      });
    };
  };