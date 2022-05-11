import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services></Services>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;