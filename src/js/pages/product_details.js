import 'bootstrap/dist/css/bootstrap.css'

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
/* import 'videojs-playlist/dist/videojs-playlist'
import 'videojs-playlist-ui/dist/videojs-playlist-ui'
import 'videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css'
import 'videojs-youtube/dist/Youtube' */

import "./../../scss/details.css";

const modalButton = document.querySelectorAll('.card-modal');
const modalButtonClose = document.querySelector('.btn-close');
const swipperGallery = document.querySelector('.swipper_modal_full');

modalButtonClose.addEventListener('click', ()=>{
    swipperGallery.classList.toggle('show')
})
modalButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        swipperGallery.classList.toggle('show')
        window.scrollTo( 0, 0 );
    })
})

const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    direction: 'horizontal',
    preloadImages: true,
    lazy:true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
  });



  
  


