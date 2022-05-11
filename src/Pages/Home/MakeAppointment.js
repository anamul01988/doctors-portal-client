import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png"; 
import PrimaryButton from "../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section style={{
        background: `url(${appointment})`
    }} className="flex justify-center items-center px-6">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 mb-5 ">
        <h3 className="text-xl my-3  text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl  mb-3 text-white">Make an Appointment</h2>
        <p className="text-white mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis
          magni ipsam labore quas. Porro pariatur fugit dicta. Quis, sapiente.
        </p>
        <PrimaryButton >Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
