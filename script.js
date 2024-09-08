

let t1=gsap.timeline();
let t2=gsap.timeline();

t1.from('header .container-tagline',{
    y:-50,
    opacity:0,
    duration:'0.35'
})

t1.from('header nav li',{
    y:-50,
    opacity:0,
    duration:'0.3',
    stagger:'0.1'
})

t2.from('.section1 .main-title',{
  
    opacity:0,
    duration:'1.5'
})

t2.from('.section1 .cta',{
    x:-50,
    opacity:0,
   
})

t2.from('.section1 img',{
   
    opacity:0,
   
})


gsap.from('.section2',{
    y:160,
    opacity:0,
    ease: "power4.out",
    scrollTrigger:{
        trigger:'.section2',
        scroller:'body',
        scrub:'0.5',
        //markers:true,
        start:'top 70%',
        end:'top 30%',

    }
})


gsap.from('.section4  .left',{
    x:-160,
    opacity:0,
    ease: "power4.out",
    stagger:'0.3',
    scrollTrigger:{
        trigger:'.section4',
        scroller:'body',
        scrub:'0.5',
       // markers:true,
        start:'top 70%',
        end:'top -30%',

    }
})


gsap.from('.section4  .right',{
    x:160,
    opacity:0,
    ease: "power4.out",
    stagger:'0.3',
    scrollTrigger:{
        trigger:'.section4',
        scroller:'body',
        scrub:'0.5',
        // markers:true,
        start:'top 70%',
        end:'top -30%',

    }
})
