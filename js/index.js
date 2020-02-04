


// Case Studies

let studies = document.querySelectorAll('.case-studies__item');

for (let i = 0; i < studies.length; i += 1) {
    let study = studies[i];
    let tl3 = new TimelineMax();
    const controller3 = new ScrollMagic.Controller();

    tl3.from(study, 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    const scene3 = new ScrollMagic.Scene({
        triggerElement: study,
        triggerHook: 1, //between 0 an 1
        duration: '35%'
    })
        // .setPin('.image-group__container')
        .setTween(tl3)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller3);
}

// Industries

tl4 = new TimelineMax();
const controller4 = new ScrollMagic.Controller();

tl4.from('.home-industries__item--1', 1, { y: 50, opacity: 0 });
tl4.from('.home-industries__item--2', 1, { y: 50, opacity: 0 });
tl4.from('.home-industries__item--3', 1, { y: 50, opacity: 0 });
tl4.from('.home-industries__item--4', 1, { y: 50, opacity: 0 });


const scene4 = new ScrollMagic.Scene({
    triggerElement: '.home-industries__items',
    triggerHook: .85, //between 0 an 1
    duration: '30%'
})
    // .setPin('.image-group__container')
    .setTween(tl4)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller4);


// // Growth Accelerators

if ($(window).width() >= 568) {
tl5 = new TimelineMax({ onUpdate: onUpdate });
const controller = new ScrollMagic.Controller();

tl5.to('.home-growth-image-group__image--5', 1, { rotationY: 360, y: -110 });
tl5.to('.home-growth-image-group__image--1', 1, { x: -260, y: -170, opacity: 1 });
tl5.to('.home-growth-image-group__image--2', 1, { x: 50, y: -170, opacity: 1 }, "-=1");
tl5.to('.home-growth-image-group__image--3', 1, { x: -260, y: 90, opacity: 1 }, "-=1");
tl5.to('.home-growth-image-group__image--4', 1, { x: 50, y: 90, opacity: 1 }, "-=1");

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.home-growth-image-group',
    triggerHook: .7, //between 0 an 1
    duration: '30%'
})
    // .setPin('.social-reputation__image-group--1')
    .setTween(tl5)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}
}
else {
        tl5 = new TimelineMax({ onUpdate: onUpdate });
        const controller = new ScrollMagic.Controller();

        tl5.to('.home-growth-image-group__image--5', 1, { rotationY: 360, y: -80 });
        tl5.to('.home-growth-image-group__image--1', 1, { x: -150, y: -130, opacity: 1 });
        tl5.to('.home-growth-image-group__image--2', 1, { x: 50, y: -130, opacity: 1 }, "-=1");
        tl5.to('.home-growth-image-group__image--3', 1, { x: -150, y: 90, opacity: 1 }, "-=1");
        tl5.to('.home-growth-image-group__image--4', 1, { x: 50, y: 90, opacity: 1 }, "-=1");

        const scene5 = new ScrollMagic.Scene({
            triggerElement: '.home-growth-image-group',
            triggerHook: .7, //between 0 an 1
            duration: '50%'
        })
            // .setPin('.social-reputation__image-group--1')
            .setTween(tl5)
            // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
            .addTo(controller);

        function onUpdate() {
    //tl.progress();
    //console.log('bob');
}
}



    


