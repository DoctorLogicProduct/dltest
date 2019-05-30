tl1 = new TimelineMax({ onUpdate: onUpdate });
      const controller1 = new ScrollMagic.Controller();

tl1.to('.home-products__item-img-step--1', 1, { y: -275, opacity: .9 });
tl1.to('.home-products__item-img-logo--1', 2, { y: -50 }, "-=1");

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--1',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl1)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller1);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}


tl2 = new TimelineMax({ onUpdate: onUpdate });
const controller2 = new ScrollMagic.Controller();

tl2.to('.home-products__item-img-step--2', 1, { y: -275, opacity: .9 });
tl2.to('.home-products__item-img-logo--2', 2, { y: -50 }, "-=1");

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--2',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl2)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller2);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

tl3 = new TimelineMax({ onUpdate: onUpdate });
const controller3 = new ScrollMagic.Controller();

tl3.to('.home-products__item-img-step--3', 1, { y: -275, opacity: .9 });
tl3.to('.home-products__item-img-logo--3', 2, { y: -50 }, "-=1");

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--3',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl3)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller3);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

tl4 = new TimelineMax({ onUpdate: onUpdate });
const controller4 = new ScrollMagic.Controller();

tl4.to('.home-products__item-img-step--4', 1, { y: -275, opacity: .9 });
tl4.to('.home-products__item-img-logo--4', 2, { y: -50 }, "-=1");

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--4',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl4)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller4);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

tl5 = new TimelineMax({ onUpdate: onUpdate });
const controller5 = new ScrollMagic.Controller();

tl5.to('.home-products__item-img-step--5', 1, { y: -275, opacity: .9 });
tl5.to('.home-products__item-img-logo--5', 2, { y: -50 }, "-=1");

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--5',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl5)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller5);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

tl6 = new TimelineMax({ onUpdate: onUpdate });
const controller6 = new ScrollMagic.Controller();

tl6.to('.home-products__item-img-step--6', 1, { y: -275, opacity: .9 });
tl6.to('.home-products__item-img-logo--6', 2, { y: -50 }, "-=1");

const scene6 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--6',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl6)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller6);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}


    


