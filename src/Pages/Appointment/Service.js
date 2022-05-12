import React, { useState } from 'react';

const Service = ({service, setTreatement}) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-6">
        <div className="card-body text-center">
          <h2 className="text-xl text-secondary font-bold">{name}</h2>
          <p>
              {
                  slots.length //length 0 howa mane flase fole no slot available dekhabe ,,condition ta slots.lenght > 0 --> aita o dite partam
                  ? <span>{slots[0]}</span>
                  : <span  className='text-red-500'>Try another day</span>
              }
          </p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} spaces avialble</p>
          <div className="card-actions justify-center">
            {/* <button disabled={slots.length === 0}
            onClick={()=>setTreatement(service)}
             className=""
             >Book Apponitment</button> */}
             <label 
              for="booking-modal"
              disabled={slots.length === 0}
              onClick={()=>setTreatement(service)}
              className="btn btn-sm  btn-secondary text-white uppercase  bg-gradient-to-r from-secondary to-primary"
              >Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;