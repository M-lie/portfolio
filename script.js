gsap.from('.bi-mouse', { 
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    y: '50%',
});

const swiper1 = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

const upper = document.getElementsByClassName('upper');
const middle = document.getElementsByClassName('middle');
const lower = document.getElementsByClassName('lower');

const tl = new TimelineLite({paused: true, reversed: true});

tl
  .to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
  .to(middle, 0.5, {autoAlpha: 0}, 'start')
  .to(lower, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start');

document.querySelector('.hamburger').addEventListener('click', function(){
  tl.reversed() ? tl.play() : tl.reverse();
})

const swiper2 = new Swiper(".mySceneSwiper", {
  direction: "horizontal",
});