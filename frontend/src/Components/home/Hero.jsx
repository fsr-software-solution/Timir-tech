import React, { useState, useEffect } from 'react';
import image1 from '../../assets/secondbg.png'
import image2 from '../../assets/thirdbg.png'
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
        <section className="relative flex min-h-[100dvh] flex-col overflow-x-hidden pb-14 sm:pb-16">
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-surface-container-highest/30 blur-[120px] rounded-full"></div>

                {images.map((src, index) => (
                    <img
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? 'opacity-[0.65]' : 'opacity-0'}`}
                        alt={`Hero background ${index + 1}`}
                        src={src}
                    />
                ))}
            </div>
            <div className="relative z-10 flex w-full flex-1 flex-col justify-start pt-[calc(7.75rem+env(safe-area-inset-top,0px))] sm:pt-[calc(8.25rem+env(safe-area-inset-top,0px))] md:pt-[calc(8.75rem+env(safe-area-inset-top,0px))]">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 py-6 text-center shrink-0 lg:mt-[min(8vh,3.5rem)]">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6 sm:mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] sm:text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Digital Solutions for Better Future</span>
                    </div>
                    <h3 className="headline text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8 max-w-5xl mx-auto leading-[1.2] sm:leading-[1.1] px-2">
                        Digital <span className="text-gradient">Solutions</span> for Better Future
                    </h3>
                    <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
                        We engineer high-performance digital ecosystems that bridge the gap between human ambition and technological possibility.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
