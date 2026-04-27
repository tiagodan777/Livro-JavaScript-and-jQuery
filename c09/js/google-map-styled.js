function init() {
    var mapOptions = {
        center: new google.maps.LatLng(37.745491019366966,-25.56471728509048),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 17,

        styles: [
            {
                stylers: [
                    {hue: "#00ff6f"},
                    {saturation: -50}
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                styles: [
                    {lightness: 100},
                    {visibility: "simplified"}
                ]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    {hue: "$ff0066"},
                    {saturation: +80}
                ]
            }
        ]
    };

    var pinLocation = new google.maps.LatLng(37.747091019306050,-25.56471728509030);

    var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions)

    var startPosition = new google.maps.Marker({
        position: pinLocation,
        map: venueMap,
        icon: "img/go.png"
    });
}