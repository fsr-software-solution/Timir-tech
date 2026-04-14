import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        "https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto",
        "https://th.bing.com/th?q=FrontEnd+Developer&w=1920&h=1080&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=ET&setlang=en&adlt=strict&t=1",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC8RNqH482B_ywFHnc__hvJJXCPEekXdQIocVFWZx9iGbmmRlwqRU6MNObwZRScGQ-q0eIOKwH8GYjbIOVSd8zc9pOctgis46FwfuKWqro1lTnvIZ_K9h5xMbJObWhQeo0Amf_pbUeQGdmLLLjNlBmIjIv7vX4dB_AnznXAqGmeY1VRuQDwonvuApOxC1MOhq-SCWxJ7oHwalwD6dNa1SCJ2wRfqU3nU6csec07qeCy3AH39Z6LdUHXw5nA1fwf9ISUjMS8ZjbU2wQN"

    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-surface-container-highest/30 blur-[120px] rounded-full"></div>

                {images.map((src, index) => (
                    <img
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out mix-blend-screen ${index === currentImage ? 'opacity-20' : 'opacity-0'}`}
                        alt={`Hero background ${index + 1}`}
                        src={src}
                    />
                ))}
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6 sm:mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] sm:text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">The Future is Here</span>
                </div>
                <h3 className="headline text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8 max-w-5xl mx-auto leading-[1.2] sm:leading-[1.1] px-2">
                    Building the <span className="text-gradient">Future</span> with Technology
                </h3>
                <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
                    We engineer high-performance digital ecosystems that bridge the gap between human ambition and technological possibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary text-base font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                        Get Started Now
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface text-base font-bold rounded-full transition-all">
                        View Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
