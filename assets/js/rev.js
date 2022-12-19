let video = document.querySelector('iframe');
let vignette = [...document.querySelector('a')];
const lien ="https://www.youtube.com/embed/"

for (let value of vignette) {
   
value.addEventListener('click', event => {
event.preventDefault();
let url = value.dataset.url;
video.setAttribute('src', lien+url);

})

}
