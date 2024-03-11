function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveanimation();
function navbarAnimation() {
    gsap.to(".part1 svg", {
      transform: "translateY(-135%)",
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to(".part2 .links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
function animationplay(){
    var videom = document.querySelector(".video_container");
    var playbtn = document.querySelector(".play");
    
    videom.addEventListener("mouseenter",function(){
     gsap.to(playbtn,{
        scale:1,
        opacity:1,
     });
    });
    videom.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
           scale:0,
           opacity:0,
        });
       });
    
    videom.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left: dets.x - 70,
            top: dets.y - 80,
        });
    });
}
animationplay()
function loading_animation(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        stagger:0.3,
        duration:0.8,
    });
    gsap.from(".page1 .video_container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
      });

}
loading_animation();
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".animationball", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".img").forEach(function (ele) {
      ele.addEventListener("mouseenter", function () {
        gsap.to(".animationball", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      ele.addEventListener("mouseleave", function () {
        gsap.to(".animationball", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();

  function loading_animation2nd(){
    var value= document.querySelector(".page6");
    value.addEventListener("mouseenter",function(){
      gsap.from(".page6svg",{
        y:100,
        opacity:0,
        delay:0.1,
        stagger:0.3,
        duration:0.8,
    });
    })  
}
  loading_animation2nd();

