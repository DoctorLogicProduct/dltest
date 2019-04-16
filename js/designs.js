
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
