import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatement, setTreatement, refetch }) => {
  const { _id , name, slots } = treatement;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, 'PP');
  const handleBooking = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id , name, slot)
      
      const booking = {
        treatmentId: _id,
        treatment: name,
        date: formattedDate,
        slot,
        patient:user.email,
        patientName: user.displayName,
        phone: event.target.phone.value
      }
      console.log(booking)
      fetch('https://frozen-ridge-08310.herokuapp.com/booking',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)

      })
      .then(res=>res.json())
      .then(data => {
           //to close the modal
        console.log(data)
        if(data.success){
          toast(`Appointment is set , ${formattedDate} at ${slot}`)
        }
        else{
          // toast(`Already have an appointment on  ${formattedDate} at ${slot}`)
           toast.error(`Already have an appointment on  ${date.booking?.date} at ${date.booking?.slot}`)
        }
         refetch();
          setTreatement(null);
       
      })
    
  }
  // console.log(refetch)
  // console.log(treatement)
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
              name="phone"
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
