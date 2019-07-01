if ($(window).width() >= 568) {
tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

// tl.to('.image-group__image--1', 2, { y: -250, opacity: 1 });
tl.to('.image-group__image--1', 2, { delay: 6, y: -400, opacity: 0 });
tl.to('.image-group__image--2', 2, { y: -250, opacity: 1 }, '-=2');
tl.to('.image-group__image--2', 2, { delay: 6, y: -400, opacity: 0 });
tl.to('.image-group__image--3', 2, { y: -250, opacity: 1 }, '-=2');
tl.to('.image-group__image--3', 2, { delay: 6, y: -400, opacity: 0 });
tl.to('.image-group__image--4', 2, { y: -250, opacity: 1 }, '-=2');
tl.to('.image-group__image--4', 2, { delay: 6, y: -400, opacity: 0 });
tl.to('.image-group__image--5', 2, { y: -250, opacity: 1 }, '-=2');
tl.to('.image-group__image--5', 2, { delay: 6, y: -400, opacity: 0 });
tl.to('.image-group__image--6', 2, { y: -250, opacity: 1 }, '-=2');

    const scene = new ScrollMagic.Scene({
        triggerElement: '.growth-accelerators__image-group--1',
        offset: -100,
        triggerHook: 0, //between 0 an 1
        duration: '300%'
    })
        .setPin('.growth-accelerators__image-group--1', { pushFollowers: true })
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

    // tl.to('.image-group__image--1', 2, { y: -250, opacity: 1 });
    tl.to('.image-group__image--1', 2, { delay: 6, y: -400, opacity: 0 });
    tl.to('.image-group__image--2', 2, { y: -250, opacity: 1 }, '-=2');
    tl.to('.image-group__image--2', 2, { delay: 6, y: -400, opacity: 0 });
    tl.to('.image-group__image--3', 2, { y: -250, opacity: 1 }, '-=2');
    const scene = new ScrollMagic.Scene({
        triggerElement: '.growth-accelerators__image-group--1',
        offset: -100,
        triggerHook: .7, //between 0 an 1
        duration: '100%'
    })
        // .setPin('.growth-accelerators__image-group--1', { pushFollowers: true })
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }
}
