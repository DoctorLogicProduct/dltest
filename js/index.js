let steps = document.querySelectorAll('.home-products__item');

for(let i = 0; i < steps.length; i+=1) {
    let step = steps[i];
    let number = step.querySelector('.home-products__item-img-step');
    let logo = step.querySelector('.home-products__item-img-logo');

    let tl1 = new TimelineMax();
    const controller1 = new ScrollMagic.Controller();

    tl1.to(number, 1, { y: -275, opacity: .9 });
    tl1.to(logo, 2, { y: -50 }, "-=1");

    const scene1 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: .7, //between 0 an 1
        duration: '100%'
    })
        // .setPin('.image-group__container')
        .setTween(tl1)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller1);

}

// Designs

let screens = document.querySelectorAll('.image-group__image');

for(let i = 0; i < screens.length; i+=1) {
    let screen = screens[i];
    let tl2 = new TimelineMax();
    const controller2 = new ScrollMagic.Controller();

    tl2.from(screen, 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    const scene1 = new ScrollMagic.Scene({
        triggerElement: screen,
        triggerHook: 1, //between 0 an 1
        duration: '35%'
    })
        // .setPin('.image-group__container')
        .setTween(tl2)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller2);
}







    


