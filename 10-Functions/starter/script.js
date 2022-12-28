'use strict';
const bookings=[]
const createBooking=function(flightNum,numPassenger,price){

    const booking={
        flightNum,
        numPassenger,
        price
    };
    console.log(booking);
    bookings.push(booking);
}
createBooking("LJHUAS")
createBooking(1,213,3213)