if ($(window).width() >= 568) {
    tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

    tl.to('.image-group__image--1', 1, { x: -250, y: -300, opacity: 1 });
    tl.to('.image-group__image--2', 1, { x: 50, y: -300, opacity: 1 }, "-=1");
    tl.to('.image-group__image--3', 1, { x: -360, y: -75, opacity: 1 }, "-=1");
    tl.to('.image-group__image--4', 1, { x: 160, y: -75, opacity: 1 }, "-=1");
    tl.to('.image-group__image--5', 1, { x: -250, y: 140, opacity: 1 }, "-=1");
    tl.to('.image-group__image--6', 1, { x: 50, y: 140, opacity: 1 }, "-=1");
    
    const scene = new ScrollMagic.Scene({
        triggerElement: '.email-blast__image-group',
        triggerHook: .7, //between 0 an 1
        duration: '50%'
    })
        // .setPin('.social-reputation__image-group--1')
        .setTween(tl)
        .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }
} else {
    tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

    tl.to('.image-group__image--1', 1, { x: -110, y: -180, opacity: 1 });
    tl.to('.image-group__image--2', 1, { x: 10, y: -180, opacity: 1 }, "-=1");
    tl.to('.image-group__image--3', 1, { x: -180, y: -40, opacity: 1 }, "-=1");
    tl.to('.image-group__image--4', 1, { x: 80, y: -40, opacity: 1 }, "-=1");
    tl.to('.image-group__image--5', 1, { x: -110, y: 80, opacity: 1 }, "-=1");
    tl.to('.image-group__image--6', 1, { x: 10, y: 80, opacity: 1 }, "-=1");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.email-blast__image-group',
        triggerHook: .7, //between 0 an 1
        duration: '50%'
    })
        .setTween(tl)
        .addIndicators({ name: "2 (duration: 300)", colorTrigger: "yellow" })
        .addTo(controller);

    function onUpdate() {
        // tl.progress();
        // console.log('bob');
    }
}











    


