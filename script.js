let crsr=document.querySelector("#cursor");
let blur=document.querySelector("#cursor-blur");
let h4all=document.querySelectorAll(" #nav h1");

h4all.forEach(elem => {
    elem.addEventListener("mouseenter",function () {
        crsr.style.scale=3
        crsr.style.backgroundColor="transparent"
        crsr.style.border="0.4px solid #fff"
    })
    elem.addEventListener("mouseleave",function () {
        crsr.style.scale=1
        crsr.style.backgroundColor="rgb(240, 240, 19)"
        crsr.style.border="0px solid rgb(240, 240, 19)"
    })
    
});

document.addEventListener("mousemove",function(d){
    //console.log(d.x);
    //console.log(d.x);
    crsr.style.left=d.x+"px";
    crsr.style.top=d.y+"px";
    blur.style.left=d.x - 150 + "px";
    blur.style.top=d.y - 150 + "px";
})



gsap.to("#nav",{
    backgroundColor:'#000',
  height:"90px",
    duration:0.5,
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.to("#main",{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -35%",
        end:"top -95%",
        scrub:1
       
    }


})

gsap.from("#about-us img ,#about-txt",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 57%",
        scrub:3
    }

})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 67%",
        scrub:2
    }

})
gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scrller:"body",
        markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scrller:"body",
        markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
})