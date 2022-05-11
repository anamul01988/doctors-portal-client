import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
          fetch('services.json')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])
    return (
        <div>
            <h5 className='text-xl text-secondary text-center text-bold'>Available Appointment on {format(date, 'PP')}</h5>
            <div className=""></div>
        </div>
    );
};

export default AvailableAppointment;