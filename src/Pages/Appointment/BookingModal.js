import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatement, setTreatement }) => {
  const { _id , name, slots } = treatement;

  const handleBooking = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id , name, slot)
      setTreatement(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {
                  slots.map(slot => <option value={slot}>{slot}</option>) //value ta na dile o cholbe
              }
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <input
              type="text"
              placeholder="Your name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="email@gmail.com"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
