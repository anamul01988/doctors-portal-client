
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
const AppointmentBanner = ({date, setDate}) => {
    // const [date, setDate] = React.useState(new Date());
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="dentist_chair" class="max-w-sm rounded-lg shadow-2xl" />
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