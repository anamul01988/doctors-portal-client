import React, { useState } from 'react';

const Service = ({service, setTreatement}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>
              {
                  slots.length //length 0 howa mane flase fole no slot available dekhabe ,,condition ta slots.lenght > 0 --> aita o dite partam
                  ? <span>{slots[0]}</span>
                  : <span  className='text-red'>Try another day</span>
              }
          </p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} spaces avialble</p>
          <div class="card-actions justify-start">
            {/* <button disabled={slots.length === 0}
            onClick={()=>setTreatement(service)}
             class=""
             >Book Apponitment</button> */}
             <label 
              for="booking-modal"
              disabled={slots.length === 0}
              onClick={()=>setTreatement(service)}
              class="btn modal-buttonbtn btn-secondary text-white uppercase"
              >Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;