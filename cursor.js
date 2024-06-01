document.addEventListener('mousemove',(element)=>{
  gsap.to("#circle", {
        x: element.x,
        y: element.y,
        duration: 1, 
  }) 
})
