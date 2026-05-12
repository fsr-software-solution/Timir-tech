import React from 'react';
import Hero from '../Components/home/Hero';
import About from '../Components/home/About';
import Services from '../Components/home/Services';
import Portfolio from '../Components/home/Portfolio';
import Features from '../Components/home/Features';
import Testimonials from '../Components/home/Testimonials';
import Contact from '../Components/home/Contact';

const Home = () => {
    return (
        <main id="home" className="scroll-mt-[calc(7.75rem+env(safe-area-inset-top,0px))] sm:scroll-mt-[calc(8.25rem+env(safe-area-inset-top,0px))]">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Features />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Home;
