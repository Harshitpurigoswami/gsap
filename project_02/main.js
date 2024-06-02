function textAnimation() {
    let text = document.querySelector('h1');
    let textSplit = text.textContent.split("");
    text.innerText = "";
    let modifyText = "";
    textSplit.forEach((element) => {
        modifyText += `<span>${element}</span>`;
        console.log(modifyText);
    })
    text.innerHTML = modifyText;
}


textAnimation();

// let text = document.querySelector('h1');
// let textSplit = text.textContent.split("");
// text.innerText = ""; 
// textSplit.forEach((element)=>{
//      let spanTag = document.createElement('span');
//      let spanText = document.createTextNode(element);
//      spanTag.appendChild(spanText); 
//     text.appendChild(spanTag);
//     console.log(spanTag)
// }) 

let tl = gsap.timeline()

tl.from('h1 span', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3, 
    // ease: "circ.in",
    ease: "bounce.out",
    filter: "blur(9px)",
});
 