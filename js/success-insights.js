
tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

tl.from('#graph-line', 1, {drawSVG: 0});
tl.from('#donut-1-line', 1, { drawSVG: 0 }, "1");
tl.from('#donut-2-line', 1, { drawSVG: 0 }, "1.25");
tl.from('#email-opportunity', 1, { opacity: 0 }, "-=1");
tl.from('#phone-opportunity', 1, { opacity: 0 }, "1.25");
tl.from('#text-opportunity', 1, { opacity: 0 }, "1.5");
tl.from('#graph-stat', 1, { opacity: 0 }, "-=2");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.image-group__text',
        triggerHook: .7, //between 0 an 1
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


