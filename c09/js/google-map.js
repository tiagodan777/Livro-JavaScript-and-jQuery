function init() {
    var mapOptions = {
        center: new google.maps.LatLng(37.745491019366966,-25.56471728509048),
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoom: 18
    };
    var venuwMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
