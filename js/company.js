const Value1 = { val: 0 }, NewVal = 5406392;
const Value2 = { val: 0 }, NewVal2 = 21114576;
const Value3 = { val: 0 }, NewVal3 = 44950522;
const Value4 = { val: 0 }, NewVal4 = 1653209;
const Value5 = { val: 0 }, NewVal5 = 20358;
const Value6 = { val: 0 }, NewVal6 = 116758;


// Value 1

tl1 = new TimelineMax({ onUpdate: onUpdate });
      const controller1 = new ScrollMagic.Controller();

tl1.to('.results__item--1', 5, { opacity: 1 });
tl1.to('.results__item--1', 5, { y: -50 }, "-=5");
tl1.to(Value1, 5, {
    val: NewVal, roundProps: "val", onUpdate: function () {
        document.getElementById("item-count-1").innerHTML = Value1.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.results__item--1',
    triggerHook: .7, //between 0 an 1
    duration: '20%'
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

tl2.to('.results__item--2', 5, { opacity: 1 });
tl2.to('.results__item--2', 5, { y: -50 }, "-=5");
tl2.to(Value2, 5, {
    val: NewVal2, roundProps: "val", onUpdate: function () {
        document.getElementById("item-count-2").innerHTML = Value2.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.results__item--2',
    triggerHook: .7, //between 0 an 1
    duration: '20%'
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

tl3.to('.results__item--3', 5, { opacity: 1 });
tl3.to('.results__item--3', 5, { y: -50 }, "-=5");
tl3.to(Value3, 5, {
    val: NewVal3, roundProps: "val", onUpdate: function () {
        document.getElementById("item-count-3").innerHTML = Value3.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.results__item--3',
    triggerHook: .7, //between 0 an 1
    duration: '20%'
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

tl4.to('.results__item--4', 5, { opacity: 1 });
tl4.to('.results__item--4', 5, { y: -50 }, "-=5");
tl4.to(Value4, 5, {
    val: NewVal4, roundProps: "val", onUpdate: function () {
        document.getElementById("item-count-4").innerHTML = Value4.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.results__item--4',
    triggerHook: .7, //between 0 an 1
    duration: '20%'
})
    // .setPin('.image-group__container')
    .setTween(tl4)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller4);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}

// Value 5

tl5 = new TimelineMax({ onUpdate: onUpdate });
const controller5 = new ScrollMagic.Controller();

tl5.to('.results__item--5', 5, { opacity: 1 });
tl5.to('.results__item--5', 5, { y: -50 }, "-=5");
tl5.to(Value5, 5, {
    val: NewVal5, roundProps: "val", onUpdate: function () {
        document.getElementById("item-count-5").innerHTML = Value5.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.results__item--5',
    triggerHook: .7, //between 0 an 1
    duration: '20%'
})
    // .setPin('.image-group__container')
    .setTween(tl5)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller5);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}

// Value 6

tl6 = new TimelineMax({ onUpdate: onUpdate });
const controller6 = new ScrollMagic.Controller();

tl6.to('.results__item--6', 5, { opacity: 1 });
tl6.to('.results__item--6', 5, { y: -50 }, "-=5");
tl6.to(Value6, 5, {
    val: NewVal6, roundProps: "val", onUpdate: function () {
        document.getElementById("item-count-6").innerHTML = Value6.val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}, "-=5");

const scene6 = new ScrollMagic.Scene({
    triggerElement: '.results__item--6',
    triggerHook: .7, //between 0 an 1
    duration: '20%'
})
    // .setPin('.image-group__container')
    .setTween(tl6)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller6);

function onUpdate() {
    //tl.progress();
    // console.log(Value1.val);
}








    


