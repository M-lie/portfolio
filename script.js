gsap.from('.bi-caret-down-fill', { 
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    y: '50%',
});

const swiper1 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

const sentencesArr = ["M-LIE", "Camélie"];

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

gsap.from(".contenu svg", {x: "15%", yoyo: true, ease: "power1.inOut", repeat: -1});

let animation = gsap.timeline({repeat: -1});

sentencesArr.forEach(sentence => {
  let timeLine = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
  timeLine.to(".text", {duration: 1.5, text: sentence});
  animation.add(timeLine);
});


gsap.from(".bi-arrow-right", {x: "20%", yoyo: true, ease: "power1.inOut", repeat: -1});