// Steps

for(let i = 1; i <= 6; i++)
{
let tl1 = new TimelineMax({ onUpdate: onUpdate });
      const controller1 = new ScrollMagic.Controller();

tl1.to('.home-products__item-img-step--' + i, 1, { y: -275, opacity: .9 });
tl1.to('.home-products__item-img-logo--' + i, 2, { y: -50 }, "-=1");

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.home-products__item--' + i,
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    // .setPin('.image-group__container')
    .setTween(tl1)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller1);

}

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

// Designs

for (let i = 1; i <= 3; i++) {
    let tl2 = new TimelineMax({ onUpdate: onUpdate });
    const controller2 = new ScrollMagic.Controller();

    tl2.from('.image-group__image--' + i, 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    const scene1 = new ScrollMagic.Scene({
        triggerElement: '.image-group__image--' + i,
        triggerHook: 1, //between 0 an 1
        duration: '35%'
    })
        // .setPin('.image-group__container')
        .setTween(tl2)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller2);

}

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}






    


