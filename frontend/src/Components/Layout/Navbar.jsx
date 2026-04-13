import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-amber-500/10 flex justify-between items-center px-4 md:px-8 py-4 z-50 font-['Space_Grotesk'] tracking-tight">
                <div className="text-2xl font-bold text-amber-500 uppercase tracking-widest">Timir Tech</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    <a className="text-amber-400 font-bold border-b-2 border-amber-500 pb-1" href="#home">Home</a>
                    <a className="text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
                    <a className="text-slate-300 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
                    <a className="text-slate-300 hover:text-white transition-colors" href="#about">About</a>
                    <a className="text-slate-300 hover:text-white transition-colors" href="#contact">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold scale-95 active:scale-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        Get Started
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-3xl pt-24 px-8 flex flex-col gap-6 md:hidden">
                    <a onClick={() => setIsOpen(false)} className="text-2xl text-amber-400 font-bold" href="#home">Home</a>
                    <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="#services">Services</a>
                    <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="#portfolio">Portfolio</a>
                    <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="#about">About</a>
                    <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="#contact">Contact</a>
                    <button className="mt-8 bg-primary-container text-on-primary-container px-8 py-4 w-full rounded-full font-bold shadow-lg shadow-primary/20">
                        Get Started
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
