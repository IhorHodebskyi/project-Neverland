import {fetchAllGet} from './fetchAllGet';
import {refs} from './refs'
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '5bf13f442a6612ea903461e28536fdca' 
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/w500/';

// fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
// .then(markUp);

if (localStorage.getItem("theme")){
    const root = document.querySelector(':root');
    root.style.setProperty('--primary-title-color', '#111111');
    root.style.setProperty('--primary-vote-color', '#111111');
    root.style.setProperty('--primary-vote-color-text', '#282828');
    root.style.setProperty('--primary-about-text', '#282828');
    root.style.setProperty('--modal-film-bgrcol', '#FFFFFF');
    root.style.setProperty('--modal-film-shadow', '1px 1px 14px 4px rgba(0, 0, 0, 0.22)');
} 

function markUp(data){
    
    const {backdrop_path, poster_path, title, original_title, id, release_date, vote_average, vote_count, popularity, overview, genres} = data.data;
    // <img src="${BASE_IMG_URL_w500}${poster_path}" alt="${original_title}" />
    console.log(`${BASE_IMG_URL_w500}${poster_path}`);
    const str = `<div class="modal-film-item" id="${id}" >
                            <div class="modal-film-item-img" style="background-image: url(${BASE_IMG_URL_w500}${poster_path}" alt="${original_title});background-repeat: no-repeat;background-size: contain;background-position: left;">
                            </div>
                            <div class="modal-film-item-title">
                                <h3>${title}</h3>
                                        <h3>Vote / Votes<span class="modal-film-vote">${vote_average}</span> / <span class="modal-film-votes">${vote_count }</span></h3>
                                        <h3>Popularity<span class="modal-film-popular">${parseFloat(popularity).toFixed(1)}</span></h3>
                                        <h3>Genre<span class="modal-film-genre">${genres.map(({name})=>name).join(', ')}</span></h3>
                                <p>About</p><span class="modal-film-text">${overview}</span>
                                <button type="submit" class="modal-film-btn">${textBtn(id)}</button>
                            </div>
                         </div>              
                         `;
            refs.modalTrailerWwindow.insertAdjacentHTML('beforeend', str);
            refs.monthBtn = document.querySelector('.modal-film-btn');
            refs.monthItem = document.querySelector('.modal-film-item');
            refs.monthBtn.addEventListener('click', handlerBtn);
            refs.modalFilmBtnClose.addEventListener('click', handlerBtnClose);
            
}
refs.modalFilmBtnClose = document.querySelector('.modal-film-btn-close');
function textBtn(id){
    const idFilm ={
        id: []
    }
    if (localStorage.getItem("favoriteFilm")){
        idFilm.id = [...JSON.parse(localStorage.getItem("favoriteFilm")).id];
               
    }
    return !idFilm.id.includes(id.toString()) ? 'Add to my library' : 'Remove from my library';
}

function handlerBtn(e){
    e.preventDefault();
    const id = refs.monthItem.getAttribute('id');
    const idFilm ={
        id: []
    }
    if (localStorage.getItem("favoriteFilm")){
        idFilm.id = [...JSON.parse(localStorage.getItem("favoriteFilm")).id];
               
    }
    if(!idFilm.id.includes(id)){
        if(e.currentTarget.textContent === 'Add to my library'){e.currentTarget.textContent = 'Remove from  my library';}
        idFilm.id.push(id);
        localStorage.setItem("favoriteFilm", JSON.stringify(idFilm));
    }else {
        idFilm.id.splice(idFilm.id.indexOf(id),1);
        localStorage.setItem("favoriteFilm", JSON.stringify(idFilm));
        e.currentTarget.textContent = 'Add to my library';
    }
    
    
}


document.addEventListener('keydown',(evt)=>{
    
    if (evt.key==="Escape"){
        refs.modalTrailerWwindow.textContent = '';
        refs.modalFilmBtnClose = document.querySelector('.modal-film-btn-close');
        refs.modalTrailerBackdrop.classList.add('visually-hidden');
    }
});

function handlerBtnClose(e){
    e.preventDefault();
    
    refs.modalTrailerWwindow.textContent = '';
    refs.modalTrailerWwindow.insertAdjacentHTML('beforeend',`<button class="modal-film-btn-close"><svg class="modal-film-icon-close">
        <use href="./images/symbol-defs.svg#icon-x"></use></svg></button>`);
        refs.modalFilmBtnClose = document.querySelector('.modal-film-btn-close');
    refs.modalTrailerBackdrop.classList.toggle('visually-hidden');
    
}

function handlerClickcardsSectionBackphoto(e){
    
    const ENDPOINT = `/3/movie/${e.currentTarget.getAttribute('id')}`;
    fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
    .then(markUp)
    .catch(console.log);
    refs.modalTrailerBackdrop.classList.toggle('visually-hidden')  
}

export {handlerClickcardsSectionBackphoto}