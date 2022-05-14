import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatement, setTreatement] = useState(null);
    const formattedDate = format(date, 'pp');
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
             .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //       fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //       .then(res => res.json())
    //       .then(data => setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h5 className='text-xl text-secondary text-center text-bold my-12'>Available Appointment on {format(date, 'PP')}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <Service 
                        key={service._id}
                        service={service}
                        setTreatement={setTreatement}
                        refetch = {refetch}
                        ></Service>)
                }
            </div>
            {
                treatement && <BookingModal date={date}
                 treatement={treatement}
                 setTreatement={setTreatement}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment; 