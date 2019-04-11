tl = new TimelineMax({ onUpdate: onUpdate });
const controller = new ScrollMagic.Controller();

tl.to('.image-group__image--1', 1, { rotationX: -65, rotationY: -40, rotationZ: -17, delay: 1.5 }), "3";
tl.to('.image-group__image--2', 1, { opacity: 1 }), "4";
tl.to('.image-group__image--3', 1, { opacity: 1 }), "5";
tl.to('.image-group__image--4', 1, { opacity: 1 }), "6";

const scene = new ScrollMagic.Scene({
    triggerElement: '.image-group__container',
    offset: -200,
    triggerHook: 0, //between 0 an 1
    duration: '500%'
})  
    .setPin('.image-group__container', { pushFollowers: true })
    .setTween(tl)
    .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

