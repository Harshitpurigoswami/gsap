gsap.from('#box',{
    duration: 1,
    delay: 1,
    scale: 0,
    backgroundColor: 'blue',
    borderRadius: '50%',
    // stagger:1,
    repeat:-1,
    yoyo:true,
});


let tl = gsap.timeline();

tl.from('nav h1',{
    delay: 0.5,
    duration : 0.8,
    y:-20,
    opacity: 0,
});

tl.from('nav li',{
    delay: 0.5,
    duration : 0.8,
    y:-20,
    stagger: 0.3,
    opacity: 0,
    ease: "bounce.inOut",
    ease: "bounce.out",
});

gsap.from(".page-1 h1",{
    scale:0,
    duration:1,
    delay: 0.5,
    scrollTrigger: ".page-1 h1",
})
gsap.to(".page-2  h1",{ 
    transform: "translateX(-57%)", 
    scrollTrigger : {
        trigger: '.page-2',  // This is name where we trigger the scroller
        scroller: 'body',  // don't no wet 
        markers: true, // This is markers for get the loaction of scroller trigger
        start: "top 0%", // Start point of trigger the animation 
        end: "top -100%",  // Ent point of trigger 
        scrub: 0.3, // This animation depend on scroll movement 
        // scrub: 5, // when give number value we can smooth 
        pin: true, // this is stop a scroll and  complete a animation then continue 
    }
})
gsap.from(".page-3 h1",{
    scale:0,
    duration:1,
    delay: 0.5,
    scrollTrigger: ".page-3 h1",
})



let hair = document.querySelector("#hairSvg");
hair.addEventListener('mousemove',(element)=>{
    let valueX = element.offsetX;
    let valueY = element.offsetY;
    console.log(element)
    hair.children[0].setAttribute('d',"M 0 200 Q " + valueX + " " + valueY +  " 590 200")
 
})

hair.addEventListener('mouseleave',(element)=>{ 
  
    gsap.to("#hairSvg path", {  
        ease: "elastic.out(1.2,0.1)",
        attr: { d:"M 0 200 Q 295 200 590 200"}
        });
})