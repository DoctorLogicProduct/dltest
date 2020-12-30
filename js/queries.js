//Cheats to be fixed eventually
//using a square instead of a circle to calculate surrounding area
//move API keys to server before we make this consumer-facing

/*
 * Future Versions
 * Make page into cshtml to return just enough data to be interactive (builds a page that can stand alone and not have to query anything that has a cost after it's done - making it mailable...)
 * Move Zips.js to server (db?)  and only return zip data for 100 miles out (much smaller & faster)
 * Could return several sets of isolines if we want maps to be interacive (10, 15, 20, 25, 30 minute drives, for example)
 * */

//Naming conventions:

//"Area" means the geographic area around a single ZIP code
//"Single" means the geographic area OF a single ZIP code
//"q_*" is a "query" clause for querying JSON data

var geoapifyKey = "1b60c7a630094b6a9977b06774a2835e";
var mapboxURL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'


function places() {
    services();
    serviceChange();

    document.getElementById("ServicePriceSlider").addEventListener('input', sliderChange);
    document.getElementById("RadiusSlider").addEventListener('input', sliderChange);
    document.getElementById("ConversionRateSlider").addEventListener('input', sliderChange);

    var input = (document.getElementById('pac-input'));

    var autocomplete = new google.maps.places.Autocomplete(input);


    autocomplete.addListener('place_changed', function () {
        document.getElementById('input').style.display = "none"

        document.getElementById('output').style.display = "block"

        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        var zipCode = jsonata("address_components[types[0]='postal_code'].short_name").evaluate(place);

        document.getElementById("business-name").innerText = place.name;
        document.getElementById("business-address").innerText = place.formatted_address;

        document.getElementById("Latitude").value = place.geometry.location.lat()
        document.getElementById("Longitude").value = place.geometry.location.lng()
        document.getElementById("ZipCode").value = zipCode;
        document.getElementById("ZipCode1").innerText = zipCode;

        RadiusChange();
        geo();
    })
}

function geo() {

    var lat = document.getElementById("Latitude").value
    var lng = document.getElementById("Longitude").value

    var myMap1 = L.map('map1').setView([lat, lng], 13);
    var myMap2 = L.map('map2').setView([lat, lng], 13);


    iso(lat, lng, myMap1, 900, '#086bb5')
    iso(lat, lng, myMap2, 1800, '#086bb5')
}

function iso(lat, lng, map, seconds, color) {
    L.tileLayer(mapboxURL, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = 'json';
    var url = `https://api.geoapify.com/v1/isoline?lat=${lat}&lon=${lng}&type=time&mode=drive&range=${seconds}&api_key=${geoapifyKey}`;

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                // check xmlHttp.responseText here;
                var data = xmlHttp.response;
                console.log(data);
                var feature = L.geoJSON(data, {
                    style: function (feature) {
                        // add layer style here
                        return { color: color };
                    }
                }).addTo(map);

                map.fitBounds(feature.getBounds());
                NoModal();


            } else {
                console.log(xmlHttp.response);
                NoModal();

            }
        }
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);

}

function RadiusChange() {
    document.getElementById("output").classList.add("radius-calc");
    var radius = document.getElementById("RadiusSlider").value;
    document.getElementById("Radius1").innerText = radius;
    document.getElementById("RadiusLabel").innerText = radius;
    document.getElementById("AreaColumn").innerText = radius + " MILES";

    Modal()
        .then(Demographics)
        .then(NoModal);
}

function Modal() {
    return new Promise(resolve => {
        const modal = document.getElementById("md-modal");

        if (!modal.classList.contains('md-show')) {
            modal.addEventListener('transitionend', () => { resolve(); });
            modal.classList.add("md-show");
        } else {
            resolve();
        }
    });
}

function NoModal() {
    return new Promise(resolve => {
        const modal = document.getElementById("md-modal");

        if (modal.classList.contains('md-show')) {
            modal.addEventListener('transitionend', () => { resolve(); });
            modal.classList.remove("md-show");
            document.getElementById("output").classList.remove("radius-calc");
            document.getElementById("output").classList.remove("service-calc");
            document.getElementById("output").classList.remove("conversion-calc");
        } else {
            resolve();
        }
    });
}

function Demographics() {
    return new Promise(resolve => {
        //These will become input variables
        var zip = parseInt(document.getElementById("ZipCode").value); //json zipcode data stores zip codes as integers
        var lat = document.getElementById("Latitude").value;
        var lng = document.getElementById("Longitude").value;
        var radius = document.getElementById("RadiusSlider").value;


        //conversions
        const pi = 3.141592654;
        const earthRadius = 3959;
        const halfCircle = 180;
        const usPopulation = 328000000;
        const radiusRadians = radius / earthRadius;
        const toRadians = pi / halfCircle;
        const toDegrees = halfCircle / pi;

        //convert lat & lng to radians
        var latR = lat * toRadians;
        var lngR = lng * toRadians;

        //calculate a min & max lng & lat in radians
        //this is cheating for time - we're not doing a circle radius - but a square because math is easier
        //when we move to a DB we can use circumpoloar coordiantes and fancy geodata - but this is JS quering JSON for now
        var minLatR = latR - radiusRadians;
        var maxLatR = latR + radiusRadians;
        var minLngR = lngR - radiusRadians
        var maxLngR = lngR + radiusRadians;

        //convert radians back to degrees
        var minLat = minLatR * toDegrees;
        var maxLat = maxLatR * toDegrees;
        var minLng = minLngR * toDegrees;
        var maxLng = maxLngR * toDegrees;


        //subset of zip codes that are inside the min & max lat & lng
        var q_squarearea = "Zips[lat>" + minLat + " and lat<" + maxLat + " and lng>" + minLng + " and lng<" + maxLng + "]";
        var area = jsonata(q_squarearea).evaluate(data)

        //return the single zcta that matches zipcode in case they are different
        var q_zcta = "Zips[Zip=" + zip + "].ZCTA";
        var zcta = jsonata(q_zcta).evaluate(data)


        //return demographic data for the single ZCTA
        var q_single = "Zips[ZCTA=" + zcta + "]"
        var single = jsonata(q_single).evaluate(data);

        //calculate metrics used on report
        var singlePopulation = jsonata("pop").evaluate(single);
        var areaPopulation = jsonata("$sum(pop)").evaluate(area);

        var percentPopulation = areaPopulation / usPopulation;

        var singleFemale = jsonata("$average(female)").evaluate(single) / 100 * singlePopulation;
        var areaFemale = jsonata("$average(female)").evaluate(area) / 100 * areaPopulation;

        var singleFemale3060 = jsonata("$average(midage)").evaluate(single) / 100 * singleFemale;
        var areaFemale3060 = jsonata("$average(midage)").evaluate(area) / 100 * areaFemale;

        var singleMale = singlePopulation - singleFemale;
        var areaMale = areaPopulation - areaFemale;

        var singleMale3060 = jsonata("$average(midage)").evaluate(single) / 100 * singleMale;
        var areaMale3060 = jsonata("$average(midage)").evaluate(area) / 100 * areaMale;

        var singleWhite = parseInt(jsonata("$average(white)").evaluate(single));
        var areaWhite = parseInt(jsonata("$average(white)").evaluate(area));

        var singleBlack = parseInt(jsonata("$average(black)").evaluate(single));
        var areaBlack = parseInt(jsonata("$average(black)").evaluate(area));

        var singleAsian = parseInt(jsonata("$average(asian)").evaluate(single));
        var areaAsian = parseInt(jsonata("$average(asian)").evaluate(area));

        var singleOther = 100 - singleWhite - singleBlack - singleAsian;
        var areaOther = 100 - areaWhite - areaBlack - areaAsian;

        var singleHispanic = parseInt(jsonata("$average(hispanic)").evaluate(single));
        var areaHispanic = parseInt(jsonata("$average(hispanic)").evaluate(area));

        var singleNonHispanic = 100 - singleHispanic;
        var areaNonHispanic = 100 - areaHispanic;

        var singleIncome = parseInt(jsonata("$average(income)").evaluate(single));
        var areaIncome = parseInt(jsonata("$average(income)").evaluate(area));

        var singleHome = parseInt(jsonata("$average(home)").evaluate(single));
        var areaHome = parseInt(jsonata("$average(home)").evaluate(area));


        //bind data to UI

        document.getElementById("PercentPopulation").value = percentPopulation;

        document.getElementById("SingleColumn").innerText = zip;
        document.getElementById("AreaColumn").innerText = radius + " MILES";

        document.getElementById("AreaPopulation").innerText = formatNumber(areaPopulation);
        document.getElementById("SinglePopulation").innerText = formatNumber(singlePopulation);

        document.getElementById("AreaFemale").innerText = formatNumber(areaFemale);
        document.getElementById("SingleFemale").innerText = formatNumber(singleFemale);

        document.getElementById("AreaFemale3060").innerText = formatNumber(areaFemale3060);
        document.getElementById("SingleFemale3060").innerText = formatNumber(singleFemale3060);

        document.getElementById("AreaMale").innerText = formatNumber(areaMale);
        document.getElementById("SingleMale").innerText = formatNumber(singleMale);

        document.getElementById("AreaMale3060").innerText = formatNumber(areaMale3060);
        document.getElementById("SingleMale3060").innerText = formatNumber(singleMale3060);

        document.getElementById("AreaWhite").innerText = formatPercent(areaWhite);
        document.getElementById("SingleWhite").innerText = formatPercent(singleWhite);

        document.getElementById("AreaBlack").innerText = formatPercent(areaBlack);
        document.getElementById("SingleBlack").innerText = formatPercent(singleBlack);

        document.getElementById("AreaAsian").innerText = formatPercent(areaAsian);
        document.getElementById("SingleAsian").innerText = formatPercent(singleAsian);

        document.getElementById("AreaOther").innerText = formatPercent(areaOther);
        document.getElementById("SingleOther").innerText = formatPercent(singleOther);

        document.getElementById("AreaHispanic").innerText = formatPercent(areaHispanic);
        document.getElementById("SingleHispanic").innerText = formatPercent(singleHispanic);


        document.getElementById("AreaNonHispanic").innerText = formatPercent(areaNonHispanic);
        document.getElementById("SingleNonHispanic").innerText = formatPercent(singleNonHispanic);

        document.getElementById("AreaIncome").innerText = formatCurrency(areaIncome);
        document.getElementById("SingleIncome").innerText = formatCurrency(singleIncome);

        document.getElementById("AreaHome").innerText = formatCurrency(areaHome);
        document.getElementById("SingleHome").innerText = formatCurrency(singleHome);

        outputResults();

        resolve();
    });
}


function formatNumber(x) {
    x = parseInt(x) //everything we do is integers - no decimals anywhere
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatPercent(x) {
    x = parseInt(x) //everything we do is integers - no decimals anywhere
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "%";

}

function formatCurrency(x) {
    x = parseInt(x) //everything we do is integers - no decimals anywhere
    return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function services() {


    var x = document.getElementById("Services");
    var option = document.createElement("option");
    option.value = "";
    option.text = "Choose a Service"
    x.add(option);

    for (var i = 0; i < servicedata.Services.length; i++) {
        var option = document.createElement("option");
        option.value = servicedata.Services[i].ServiceId;
        option.text = servicedata.Services[i].Service;
        x.add(option);
    }
    serviceChange();
}

function serviceChange() {
    var ServiceId = document.getElementById("Services").value;
    if (ServiceId != 0) {
        document.getElementById("output").classList.add("service-calc");

        var CurrentService = jsonata("Services[ServiceId=" + ServiceId + "]").evaluate(servicedata);

        document.getElementById("ServiceLabel").innerText = CurrentService.Service;
        if (CurrentService.Description) {
            document.getElementById("ServiceDescription").innerText = CurrentService.Description;
        } else {
            document.getElementById("ServiceDescription").innerText = "";
        }

        var x = document.getElementById("ServicePriceSlider");
        x.min = CurrentService.Min;
        x.max = CurrentService.Max;
        x.value = CurrentService.Avg;

        document.getElementById("ServicePriceMin").innerText = formatCurrency(CurrentService.Min);
        document.getElementById("ServicePriceAvg").innerText = formatCurrency(CurrentService.Avg);
        document.getElementById("ServicePriceMax").innerText = formatCurrency(CurrentService.Max);

        document.getElementById("ServicePriceLabel").innerText = formatNumber(x.value);
        document.getElementById("Prospects").value = CurrentService.Estimated
        Modal()
            .then(outputResults())
            .then(NoModal);
    }
}


function sliderChange(e) {
    var target = e.target.id;
    var label = target.replace("Slider", "Label");
    document.getElementById(label).innerText = formatNumber(e.target.value);
}


function servicePriceChange() {

    document.getElementById("output").classList.add("service-calc");
    var x = document.getElementById("ServicePriceSlider");
    document.getElementById("ServicePriceLabel").innerText = formatNumber(x.value);
   
    Modal()
        .then(outputResults())
        .then(NoModal);

}

function conversionRateChange() {
    document.getElementById("output").classList.add("conversion-calc");
    document.getElementById("ConversionRateLabel").innerText = document.getElementById("ConversionRateSlider").value;
    Modal()
        .then(outputResults())
        .then(NoModal);
}

function outputResults() {
    var prospects = document.getElementById("Prospects").value;
    var percent = document.getElementById("PercentPopulation").value;
    var servicePrice = document.getElementById("ServicePriceSlider").value;
    var conversionRate = document.getElementById("ConversionRateSlider").value;

    document.getElementById("AnnualProspects").innerText = formatNumber(prospects * percent);
    document.getElementById("AnnualPatients").innerText = formatNumber(prospects * percent * (conversionRate) / 100);
    document.getElementById("AnnualPotential").innerText = formatCurrency(servicePrice * prospects * percent * (conversionRate) / 100);


}
