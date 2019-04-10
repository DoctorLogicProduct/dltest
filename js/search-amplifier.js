tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

tl.to('.image-group__image--1', 1, {rotationX: -65, rotationY: -40, rotationZ: -17}), "1";
tl.to('.image-group__image--2', 1, { opacity: 1 }), "4";
tl.to('.image-group__image--3', 1, { opacity: 1 }), "5";
tl.to('.image-group__image--4', 1, { opacity: 1 }), "6";

    const scene = new ScrollMagic.Scene({
        triggerElement: '.search-amplifier__image-group--1',
        triggerHook: .4, //between 0 an 1
        duration: '60%'
    })
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    }

