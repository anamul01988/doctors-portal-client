import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatement, setTreatement }) => {
  const { _id , name, slots } = treatement;
  const [user, loading, error] = useAuthState(auth);
  const handleBooking = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id , name, slot)
      setTreatement(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                  slots.map((slot,index) => <option key={index} value={slot}>{slot}</option>) //value ta na dile o cholbe
              }
         
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName || ''}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              disabled
              value={user?.email || ''}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
