tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

tl.from('.image-group__image--4', 1, {opacity: 0});
tl.from('.image-group__image--3', 1, {opacity: 0}, "1");
tl.from('.image-group__image--2', 1, {opacity: 0}, "2");
tl.from('.image-group__image--1', 1, {opacity: 0}, "3");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.website-management__image-group--1',
        triggerHook: .7, //between 0 an 1
        duration: '95%'
    })
        // .setPin('.social-reputation__image-group--1')
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }

