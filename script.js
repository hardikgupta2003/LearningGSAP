// gsap.from('.header',{duration: 1,y:'-100%',ease:'bounce'})
// gsap.from('.link',{duration: 1,opacity:0,delay:1,stagger:.5})
// gsap.from('.right',{duration:2,x:'-100vw'})
// gsap.from('.left',{duration:2,delay:2,x:'100vw'})
// gsap.to('.footer', { duration: 2, ease: "elastic",y:0,delay:3 });
// gsap.fromTo(".button", {rotation: 720,opacity:0,scale:0}, {rotation: 0, duration: 3,delay:3.5,opacity:1,scale:1});

const timeline=gsap.timeline()
timeline
.from('.header',{duration: 1,y:'-100%',ease:'bounce'})
.from('.link',{duration: 1,opacity:0,stagger:.5})
.from('.right',{duration:2,x:'-100vw'})
.from('.left',{duration:2,x:'100vw'})
.to('.footer', { duration: 2, ease: "power2.in",y:0})
.fromTo(".button", {rotation: 720,opacity:0,scale:0}, {rotation: 0, duration: 1.5,opacity:1,scale:1});