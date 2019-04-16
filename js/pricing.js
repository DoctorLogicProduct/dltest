
$(function () {
    const sliders = document.querySelectorAll('input[type=range]');
    const result = document.getElementById('js-result');
    const values = getValues(sliders);

    $(sliders)
        .rangeslider({ polyfill: false,
            onInit: function () {
                $rangeEl = this.$range;

                // get range index labels 
                var rangeLabels = this.$element.attr('labels');
                rangeLabels = rangeLabels.split(', ');

                // add labels
                $rangeEl.append('<div class="price-slider__labels"></div>');
                $(rangeLabels).each(function (index, value) {
                    $rangeEl.find('.price-slider__labels').append(`<span class="price-slider__labels-label">${value}</span>`);
                })
            },
        })
        .on('input', function () {
            const values = getValues(sliders);
            updateResult(result, values);
        });

    // initially set result
    updateResult(result, values);
});


function getValues(elements) {
    return Array.from(elements).map(getValue);
}

/**
 * 
 * @param {HTMLElement} element 
 */
function getValue(element) {
    const values = element.getAttribute('values').split(', ');
    const index = element.value;
    let value = values[index];
    return parseFloat(value);
}

function updateResult(el, values) {
    let value = values.reduce((a, b) => a + b);
    el.innerHTML = isFinite(value) ? formatMoney(value) : 'Call Us';
}

function formatMoney(value) {
    let str = `${value}`;
    for (let i = str.length - 6; i > 0; i -= 3) {
        str = str.slice(0, i) + ',' + str.slice(i); 
    }
    return `<span>$</span>${str}`;
}