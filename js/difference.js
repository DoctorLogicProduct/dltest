tl = new TimelineMax({ onUpdate: onUpdate });
const controller = new ScrollMagic.Controller();

tl.from('#graph-line', 1, { drawSVG: 0 });
tl.from('#donut-1-line', 1, { drawSVG: 0 }, "-=1");
tl.from('#donut-2-line', 1, { drawSVG: 0 }, "-=1");
tl.from('#graph-stat', 1, { opacity: 0 }, "-=.5");

const scene = new ScrollMagic.Scene({
    triggerElement: '.difference-analytics',
    triggerHook: .7, //between 0 an 1
    duration: '100%'
})
    .setTween(tl)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

