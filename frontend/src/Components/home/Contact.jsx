import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 md:py-32 relative" id="contact">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
                <div className="glass-card p-6 sm:p-16 rounded-[2rem] sm:rounded-[4rem] text-center relative overflow-hidden border-primary/30">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                    <h2 className="headline text-2xl sm:text-6xl font-bold mb-8 relative z-10">Ready to Build the <span className="text-gradient">Next Big Thing?</span></h2>
                    <p className="text-on-surface-variant text-base sm:text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed px-4">Join the ranks of market leaders who have accelerated their growth with Timir Tech.</p>
                    <button className="px-8 py-4 sm:px-12 sm:py-6 bg-primary text-on-primary rounded-full text-base sm:text-xl font-bold shadow-[0_0_40px_rgba(251,173,24,0.3)] hover:scale-110 transition-all relative z-10">
                        Contact Us Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
