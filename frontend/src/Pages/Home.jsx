import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
        <main id="home">
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
