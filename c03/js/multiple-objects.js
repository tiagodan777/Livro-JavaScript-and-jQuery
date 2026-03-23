function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailibility = function() {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailibility();
var elQuayHotel = document.getElementById('hotel1');
elQuayHotel.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailibility();
var elParkHotel = document.getElementById('hotel2');
elParkHotel.textContent = details2;