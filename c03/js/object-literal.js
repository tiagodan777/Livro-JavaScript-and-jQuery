var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
var elRooms = document.getElementById('rooms');

elName.textContent = hotel.name;
elRooms.textContent = hotel.checkAvailability();