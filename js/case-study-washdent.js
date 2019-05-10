const Value1 = { val: 0 }, NewVal = 328;
const Value2 = { val: 0 }, NewVal2 = 223;
const Value3 = { val: 0 }, NewVal3 = 45;
const Value4 = { val: 0 }, NewVal4 = 31;

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

// Value 1

tl1 = new TimelineMax({ onUpdate: onUpdate });
const controller1 = new ScrollMagic.Controller();

tl1.to(Value1, 5, {
    val: NewVal, roundProps: "val", onUpdate: function () {
        document.getElementById("case-study__results-item--1").innerHTML = Value1.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.case-study__results-item--1',
    triggerHook: .9, //between 0 an 1
    duration: '20%',
    reverse: false
})
    // .setPin('.image-group__container')
    .setTween(tl1)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller1);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}

// Value 2

tl2 = new TimelineMax({ onUpdate: onUpdate });
const controller2 = new ScrollMagic.Controller();

tl2.to(Value2, 5, {
    val: NewVal2, roundProps: "val", onUpdate: function () {
        document.getElementById("case-study__results-item--2").innerHTML = Value2.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.case-study__results-item--2',
    triggerHook: .9, //between 0 an 1
    duration: '20%',
    reverse: false
})
    // .setPin('.image-group__container')
    .setTween(tl2)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller2);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}

// Value 3

tl3 = new TimelineMax({ onUpdate: onUpdate });
const controller3 = new ScrollMagic.Controller();

tl3.to(Value3, 5, {
    val: NewVal3, roundProps: "val", onUpdate: function () {
        document.getElementById("case-study__results-item--3").innerHTML = Value3.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.case-study__results-item--3',
    triggerHook: .9, //between 0 an 1
    duration: '20%',
    reverse: false
})
    // .setPin('.image-group__container')
    .setTween(tl3)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller3);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}

// Value 4

tl4 = new TimelineMax({ onUpdate: onUpdate });
const controller4 = new ScrollMagic.Controller();

tl4.to(Value4, 5, {
    val: NewVal4, roundProps: "val", onUpdate: function () {
        document.getElementById("case-study__results-item--4").innerHTML = Value4.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.case-study__results-item--4',
    triggerHook: .9, //between 0 an 1
    duration: '20%',
    reverse: false
})
    // .setPin('.image-group__container')
    .setTween(tl4)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller4);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}

const controller5 = new ScrollMagic.Controller();

$(".case-study__spotlight-items").each(function () {
    const tl5 = new TimelineMax();
    const img = $(this).find("img");

    tl5.staggerFrom(img, 1, { opacity: 0, y:20, ease: Elastic.easeOut.config(1, 0.75) }, .1);

    const scene5 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
    })
        .setTween(tl5)
        // .addIndicators()
        .addTo(controller5);
});

const controller6 = new ScrollMagic.Controller();

$(".case-study__challenge-customer").each(function () {
    const tl6 = new TimelineMax();

    tl6.staggerFrom('.case-study__challenge-customer-item', 1, { opacity: 0, x: 20, ease: Elastic.easeOut.config(1, 0.75) }, .1);

    const scene6 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7,
        reverse: false
    })
        .setTween(tl6)
        // .addIndicators()
        .addTo(controller6);
});





    


