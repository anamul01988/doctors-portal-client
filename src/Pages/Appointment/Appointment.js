import React,{useState} from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointmentBanner data={date} setDate={setDate}/>
            <AvailableAppointment date={date}/>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;