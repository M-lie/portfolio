gsap.from('.bi-mouse', { 
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    y: '50%',
});

const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});