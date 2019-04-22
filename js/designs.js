
    $(document).ready(function() {
        $('.designs__item').magnificPopup({
            type: 'image',
            image: {
                verticalFit: false,
                markup: '<div class="mfp-figure">' +
                    '<div class="mfp-close"></div>' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-img"></div>' +
                    '<div class="mfp-bottom-bar">' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</div>',
                titleSrc: 'data-title'
            }
        });
    });



// tl = new TimelineMax({ onUpdate: onUpdate });
// tl.set('#phone-hero', { scaleX: 0, scaleY: 0 });
// tl.set('#phone-profile', { scaleX: 0, scaleY: 0 });
// tl.set('#phone-text', { scaleX: 0, scaleY: 0 });
// tl.set('#phone_1_', { scaleX: 0, scaleY: 0 });


// tl = new TimelineMax({ onUpdate: onUpdate });
// const controller = new ScrollMagic.Controller();
// tl.to('#hero', 1, {  scaleX:0, scaleY:0 }), "1";
// tl.to('#profile', 1, {  scaleX:0, scaleY:0 }), "-=1";
// tl.to('#text', 1, {  scaleX:0, scaleY:0 }), "-=1";
// tl.to('#device', 1, {  scaleX:0, scaleY:0 }), "-=1";
// tl.to('#phone-hero', 1, {  scaleX: 1, scaleY: 1 }), "1";
// tl.to('#phone-profile', 1, {  scaleX: 1, scaleY: 1 }), "-=1";
// tl.to('#phone-text', 1, {  scaleX: 1, scaleY: 1 }), "-=1";
// tl.to('#phone_1_', 1, {  scaleX: 1, scaleY: 1 }), "-=1";

// const scene = new ScrollMagic.Scene({
//     triggerElement: '.designs__intro',
//     triggerHook: .3, //between 0 an 1
//     duration: '25%'
// })
//     .setTween(tl)
//     .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
//     .addTo(controller);

// function onUpdate() {
//     tl.progress();
//     console.log('bob');
// }
