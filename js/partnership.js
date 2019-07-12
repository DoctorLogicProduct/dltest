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











    


