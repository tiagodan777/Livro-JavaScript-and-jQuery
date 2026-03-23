var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailibility: function () {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
var elRooms = document.getElementById('rooms');

elName.textContent = hotel.name;
elRooms.textContent = hotel.checkAvailibility();