import React, { useState, useEffect } from 'react';

import image1 from '../../assets/bg6.png'

import image2 from '../../assets/bg7.png'

import image3 from '../../assets/fourthbg.png'



const Hero = () => {

    const images = [

        image1,

        image2,

        image3

    ];



    const [currentImage, setCurrentImage] = useState(0);



    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentImage((prev) => (prev + 1) % images.length);

        }, 3000);

        return () => clearInterval(timer);

    }, []);



    return (

        <section className="relative -mt-[var(--navbar-offset,5.5rem)] flex min-h-[calc(100dvh-var(--navbar-offset,5.5rem))] sm:min-h-[100dvh] flex-col overflow-x-hidden pb-10 sm:pb-14 md:pb-16">

            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>

                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary-container/10 blur-[80px] sm:blur-[120px] rounded-full"></div>

                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-surface-container-highest/30 blur-[80px] sm:blur-[120px] rounded-full"></div>



                {images.map((src, index) => (

                    <img

                        key={index}

                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? 'opacity-[0.65]' : 'opacity-0'}`}

                        alt={`Hero background ${index + 1}`}

                        src={src}

                    />

                ))}

            </div>



            <div className="relative z-10 flex w-full min-h-0 flex-1 flex-col items-center justify-center px-3 sm:px-6 pt-[calc(var(--navbar-offset,5.5rem)+0.75rem)] pb-6 sm:pt-[calc(var(--navbar-offset,5.5rem)+1.25rem)] sm:pb-10 md:pt-[calc(var(--navbar-offset,5.5rem)+2rem)]">

                <div className="w-full max-w-7xl mx-auto text-center shrink-0">

                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-4 sm:mb-6 md:mb-8 max-w-[95vw]">

                        <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse shrink-0"></span>

                        <span className="text-[9px] sm:text-[10px] md:text-xs font-label uppercase tracking-[0.15em] sm:tracking-[0.2em] text-on-surface-variant leading-tight">

                            Digital Solutions for Better Future

                        </span>

                    </div>

                    <h3 className="headline text-[1.4rem] leading-[1.25] sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8 max-w-5xl mx-auto sm:leading-[1.15] md:leading-[1.1] px-1 sm:px-2">

                        Digital <span className="text-gradient">Solutions</span> for Better Future

                    </h3>

                    <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-on-surface-variant max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-12 leading-relaxed px-1 sm:px-4">

                        We engineer high-performance digital ecosystems that bridge the gap between human ambition and technological possibility.

                    </p>

                </div>

            </div>

        </section>

    );

};



export default Hero;


