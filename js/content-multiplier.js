if ($(window).width() >= 568) {
tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

tl.from('#title', 1, {opacity: 0});
tl.from('#before', 1, {opacity: 0}, "1");
tl.from('#after', 1, {opacity: 0}, "2");
tl.from('#before-label', 1, {opacity: 0}, "3");
tl.from('#after-label', 1, { opacity: 0 }, "4");
tl.from('#description', 1, { opacity: 0 }, "5");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.content-multiplier__image-group--1',
        triggerHook: .5, //between 0 an 1
        duration: '100%'
    })
        // .setPin('.image-group__container')
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

    tl.from('#title', 1, { opacity: 0 });
    tl.from('#before', 1, { opacity: 0 }, "1");
    tl.from('#after', 1, { opacity: 0 }, "2");
    tl.from('#before-label', 1, { opacity: 0 }, "3");
    tl.from('#after-label', 1, { opacity: 0 }, "4");
    tl.from('#description', 1, { opacity: 0 }, "5");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.content-multiplier__image-group--1',
        triggerHook: .5, //between 0 an 1
        duration: '100%'
    })
        // .setPin('.image-group__container')
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }
}

