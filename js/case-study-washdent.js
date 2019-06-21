tl = new TimelineMax({ onUpdate: onUpdate });
const controller = new ScrollMagic.Controller();

tl.from('#graph-line_1_', 1, { drawSVG: 0 });
tl.from('#graph-value', 1, { opacity: 0 });

const scene = new ScrollMagic.Scene({
    triggerElement: '.case-study__results-chart',
    triggerHook: .7, //between 0 an 1
    duration: '50%'
})
    // .setPin('.image-group__container')
    .setTween(tl)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}

// Results

const results = document.querySelectorAll('[data-number-spinner]');

for (let i = 0; i < results.length; i += 1) {
    const result = results[i];
    const newVal = parseFloat(result.dataset.numberSpinner);
    const currentVal = {val:0};
    console.log(newVal);
    const tl2 = new TimelineMax();

    tl2.to(currentVal, 1, {
        val: newVal, roundProps: "val", onUpdate: function () {
            result.innerHTML = currentVal.val.toString();
        }
    });

    if(result.hasAttribute('data-number-spinner-scroll')) {

    const controller2 = new ScrollMagic.Controller();
    const scene1 = new ScrollMagic.Scene({
        triggerElement: result,
        triggerHook: 1, //between 0 an 1
        duration: '35%'
    })
        // .setPin('.image-group__container')
        .setTween(tl2)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller2);
    } else {
        tl2.play();
    }
    
}







    


