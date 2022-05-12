import React from "react";
import treatement from '../../assets/images/treatment.png';
import PrimaryButton from "../Shared/PrimaryButton";
const Exceptional = () => {
  return (
    <section className="mb-28">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full">
          <img
            src={treatement}
            alt="Album"
          />
        </figure>
        <div className="card-body lg:px-20">
          <h2 className="card-title text-5xl mb-3">Exceptional Denatl <br /> Care, on Your Terms</h2>
          <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium beatae autem doloribus, culpa natus ratione provident voluptates illum aut rerum. Doloribus iure delectus quis consectetur nam.
              <br /> Architecto inventore consequatur officia.</p>
          <div className="card-actions justify-start">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
