let menu = document.querySelector(".menu-icon");
let menuCross = document.querySelector(".menu-cross");
let tl = gsap.timeline();
tl.to('.main-menu', {
    x: "0%",
})
tl.from('.main-menu h2', {
    x: "100px",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
})
tl.from(menuCross, {
    x: "20px",
    duration: 0.5,
    opacity: 0,
});

tl.pause();
menu.addEventListener('click', () => {
    tl.play();
});
menuCross.addEventListener('click', () => {
    tl.reverse();
});

