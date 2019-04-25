if ($(window).width() >= 568) {

tl = new TimelineMax({ onUpdate: onUpdate });
    const controller = new ScrollMagic.Controller();

tl.to('#box-1', 1, {scaleY: 3}, "1");
tl.to('#box-2', 1, { y: 370 }, "1");
tl.to('#box-2-name', 1, { y: 370 }, "1");
tl.to('#box-2-minus', 1, { y: 370 }, "1");
tl.to('#box-2-plus', 1, { y: 370 }, "1");
tl.to('#box-3', 1, { y: 370 }, "1");
tl.to('#box-3-name', 1, { y: 370 }, "1");
tl.to('#box-3-minus', 1, { y: 370 }, "1");
tl.to('#box-3-plus', 1, { y: 370 }, "1");
tl.to('#box-1-plus', 1, { opacity: 0 }, "1");
tl.to('#box-1-details', 1, { opacity: 1 }, "2");
tl.to('.image-group__image--2', 1, { opacity: 1 }, "2");
tl.to('#box-1-plus', 1, { opacity: 1 }, "3");
tl.to('#box-1-details', 1, { opacity: 0 }, "3");
tl.to('#box-1', 1, { scaleY: 1 }, "4");
tl.to('#box-2', 1, { y: 0 }, "4");
tl.to('#box-2-name', 1, { y: 0 }, "4");
tl.to('#box-2-minus', 1, { y: 0 }, "4");
tl.to('#box-2-plus', 1, { y: 0 }, "4");
tl.to('#box-3', 1, { y: 0 }, "4");
tl.to('#box-3-name', 1, { y: 0 }, "4");
tl.to('#box-3-minus', 1, { y: 0 }, "4");
tl.to('#box-3-plus', 1, { y: 0 }, "4");
tl.to('.image-group__image--2', 1, { opacity: 0 }, "4");
tl.to('#box-2', 1, { scaleY: 3 }, "5");
tl.to('#box-2-plus', 1, { opacity: 0 }, "5");
tl.to('#box-3', 1, { y: 370 }, "5");
tl.to('#box-3-name', 1, { y: 370 }, "5");
tl.to('#box-3-minus', 1, { y: 370 }, "5");
tl.to('#box-3-plus', 1, { y: 370 }, "5");
tl.to('#box-2-details', 1, { opacity: 1 }, "6");
tl.to('.image-group__image--3', 1, { opacity: 1 }, "6");
tl.to('#box-2-details', 1, { opacity: 0 }, "7");
tl.to('#box-2', 1, { scaleY: 1 }, "8");
tl.to('.image-group__image--3', 1, { opacity: 0 }, "8");
tl.to('#box-2-plus', 1, { opacity: 1 }, "8");
tl.to('#box-3', 1, { y: 0 }, "8");
tl.to('#box-3-name', 1, { y: 0 }, "8");
tl.to('#box-3-minus', 1, { y: 0 }, "8");
tl.to('#box-3-plus', 1, { y: 0 }, "8");
tl.to('#box-3', 1, { scaleY: 3 }, "9");
tl.to('#box-3-plus', 1, { opacity: 0 }, "9");
tl.to('#box-3-details', 1, { opacity: 1 }, "10");
tl.to('.image-group__image--4', 1, { opacity: 1 }, "10");
tl.to('#box-3-details', 1, { opacity: 0 }, "11");
tl.to('#box-3', 1, { scaleY: 1 }, "12");
tl.to('.image-group__image--4', 1, { opacity: 0 }, "12");
tl.to('#box-3-plus', 1, { opacity: 1 }, "12");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.lead-generator__image-group--1',
        triggerHook: 0, //between 0 an 1
        offset: 60,
        duration: '800%'
    })
    
        .setPin('.image-group__container', { pushFollowers: true })
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

    tl.to('.image-group__image--2', 1, { opacity: 1 }, "1");
    tl.to('.image-group__image--3', 1, { opacity: 1 }, "2");
    tl.to('.image-group__image--4', 1, { opacity: 1 }, "3");
 

    const scene = new ScrollMagic.Scene({
        triggerElement: '.lead-generator__image-group--1',
        triggerHook: .7, //between 0 an 1
        offset: 0,
        duration: '100%'
    })
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);

    function onUpdate() {
        //tl.progress();
        //console.log('bob');
    } 
}

