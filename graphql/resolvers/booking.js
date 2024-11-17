const Event = require('../../models/event');
const Booking = require('../../models/booking');
const {transformBooking, transformEvent } = require('./merge');

module.exports = {
  bookings: async (arg,req) => {
    if(!req.isAuth){
        throw new Error("Unautenticated!")
       }
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },
  bookEvent: async (args,req) => {
    if(!req.isAuth){
        throw new Error("Unautenticated!")
    }
    const fetchedEvent = await Event.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: '5c0fbd06c816781c518e4f3e',
      event: fetchedEvent
    });
    const result = await booking.save();
    return transformBooking(result);
  },
  cancelBooking: async (args,req) => {
    if(!req.isAuth){
        throw new Error("Unautenticated!")
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};