// Results

const results = document.querySelectorAll('[data-number-spinner]');
const resultsItems = document.querySelectorAll('.company-results__item');

for (let i = 0; i < results.length; i += 1) {
    const result = results[i];
    const newVal = parseFloat(result.dataset.numberSpinner);
    const currentVal = { val: 0 };
    const tl = new TimelineMax();

    tl.to(currentVal, 1, {
        val: newVal, roundProps: "val", onUpdate: function () {
            result.innerHTML = currentVal.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });

    const controller = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
        triggerElement: result,
        triggerHook: .8, //between 0 an 1
        duration: '20%'
    })
        // .setPin('.image-group__container')
        .setTween(tl)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller);
    
}

for (let i = 0; i < resultsItems.length; i += 1) {
    let item = resultsItems[i];
    let tl2 = new TimelineMax();
    const controller2 = new ScrollMagic.Controller();

    tl2.from(item, 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    const scene1 = new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: .8, //between 0 an 1
        duration: '20%'
    })
        // .setPin('.image-group__container')
        .setTween(tl2)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller2);
}

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
        triggerElement: '.company-history__image-group',
        triggerHook: .7, //between 0 an 1
        duration: '50%'
    })
        // .setPin('.social-reputation__image-group--1')
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

    tl.to('.image-group__image--1', 1, { x: -110, y: -180, opacity: 1 });
    tl.to('.image-group__image--2', 1, { x: 10, y: -180, opacity: 1 }, "-=1");
    tl.to('.image-group__image--3', 1, { x: -180, y: -40, opacity: 1 }, "-=1");
    tl.to('.image-group__image--4', 1, { x: 80, y: -40, opacity: 1 }, "-=1");
    tl.to('.image-group__image--5', 1, { x: -110, y: 80, opacity: 1 }, "-=1");
    tl.to('.image-group__image--6', 1, { x: 10, y: 80, opacity: 1 }, "-=1");

    const scene = new ScrollMagic.Scene({
        triggerElement: '.company-history__image-group',
        triggerHook: .7, //between 0 an 1
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











    


