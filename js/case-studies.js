// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.case-studies__item').each(function () {

    // build a tween
    var tween = TweenMax.from($(this), 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 1, //between 0 an 1
        duration: 200
    })
        .setTween(tween)
        // .addIndicators()// trigger a TweenMax.to tween
        .addTo(controller);

});








    


