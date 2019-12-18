if ($(window).width() >= 990) {
tl = new TimelineMax({ onUpdate: onUpdate });
const controller = new ScrollMagic.Controller();

tl.to('.item-grid__image--1', 1, { rotationX: -65, rotationY: -40, rotationZ: -17, delay: 1.5 }), "1";
tl.to('.item-grid__item--2', 1, { opacity: 1 }), "4";
tl.to('.item-grid__item--3', 1, { opacity: 1 }), "5";
tl.to('.item-grid__item--4', 1, { opacity: 1 }), "6";
tl.to('.btn', 1, {opacity: 1 }), "6";

const scene = new ScrollMagic.Scene({
    triggerElement: '.item-grid__container',
    offset: 0,
    triggerHook: .3, //between 0 an 1
    duration: '60%'
})  
    // .setPin('.item-grid__container', { pushFollowers: true })
    .setTween(tl)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}
} else {
    tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();
    tl.to('.item-grid__item--2', 1, { opacity: 1 });
    tl.to('.item-grid__item--3', 1, { opacity: 1 });
    tl.to('.item-grid__item--4', 1, { opacity: 1 });
    tl.to('.btn', 1, { opacity: 1 });

    const scene = new ScrollMagic.Scene({
        triggerElement: '.item-grid__items',
        triggerHook: .5, //between 0 an 1
        duration: '100%'
    })
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }
}

