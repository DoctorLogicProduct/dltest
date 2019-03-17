
if ($(window).width() >= 568) {
    tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

    tl.to('.image-group__image--1', 1, { y: -350 });
    tl.to('.image-group__image--2', 1, { y: 250 }, "-=1");
    tl.to('.image-group__image--3', 1, { x: -400 }, "-=1");
    tl.to('.image-group__image--4', 1, { x: 300 }, "-=1");
    tl.to('.image-group__image--5', 1, { x: -350, y: -300 }, "-=1");
    tl.to('.image-group__image--6', 1, { x: 250, y: 200 }, "-=1");
    tl.to('.image-group__image--7', 1, { x: -350, y: 200 }, "-=1");
    tl.to('.image-group__image--8', 1, { x: 250, y: -300 }, "-=1");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.social-reputation__image-group--1',
        triggerHook: .8, //between 0 an 1
        duration: '100%'
    })
        // .setPin('.social-reputation__image-group--1')
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "yellow" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }
} else {
    tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

    tl.to('.image-group__image--1', 1, { y: -175 });
    tl.to('.image-group__image--2', 1, { y: 125 }, "-=1");
    tl.to('.image-group__image--3', 1, { x: -200 }, "-=1");
    tl.to('.image-group__image--4', 1, { x: 150 }, "-=1");
    tl.to('.image-group__image--5', 1, { x: -175, y: -160 }, "-=1");
    tl.to('.image-group__image--6', 1, { x: 135, y: 100 }, "-=1");
    tl.to('.image-group__image--7', 1, { x: -175, y: 100 }, "-=1");
    tl.to('.image-group__image--8', 1, { x: 125, y: -160 }, "-=1");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.social-reputation__image-group--1',
        triggerHook: .5, //between 0 an 1
        duration: '50%'
    })
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "yellow" })
        .addTo(controller);

    function onUpdate() {
        // tl.progress();
        // console.log('bob');
    }
}

