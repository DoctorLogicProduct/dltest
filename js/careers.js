tl = new TimelineMax();
    const controller = new ScrollMagic.Controller();

tl.from('.careers-values__item--1', 1, {y: 50, opacity: 0, ease: Linear.easeOut});
tl.from('.careers-values__item--2', 1, {y: 50, opacity: 0, ease: Linear.easeOut});
tl.from('.careers-values__item--3', 1, {y: 50, opacity: 0, ease: Linear.easeOut});
tl.from('.careers-values__item--4', 1, {y: 50, opacity: 0, ease: Linear.easeOut});
tl.from('.careers-values__item--5', 1, {y: 50, opacity: 0, ease: Linear.easeOut});
tl.from('.careers-values__item--6', 1, {y: 50, opacity: 0, ease: Linear.easeOut});

    const scene = new ScrollMagic.Scene({
        triggerElement: '.careers-values__items',
        triggerHook: .8, //between 0 an 1
        duration: '50%'
    })
        // .setPin('.social-reputation__image-group--1')
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

