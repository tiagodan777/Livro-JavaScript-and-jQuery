function init() {
    var mapOptions = {
        center: new google.maps.LatLng(37.745491019366966,-25.56471728509048),
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoom: 18,

        pancontrol: false,

        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },

        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },

        streetViewControl: false,
        overviewMapControl: false
    };

    var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions)
}