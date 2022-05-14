
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
const AppointmentBanner = ({date, setDate}) => {
    // const [date, setDate] = React.useState(new Date());
    return (
        <div  style={{
          background: `url(${bg})`,
          backgroundSize: 'cover'
      }} className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="dentist_chair" className="max-w-sm rounded-lg shadow-2xl" />
          <div >
              <DayPicker 
              
                mode="single"
                selected={date}
                onSelect={setDate} > 
               
              </DayPicker>
      
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;