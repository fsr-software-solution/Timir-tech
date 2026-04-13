import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const serviceItems = [
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Full-Stack Web Development', path: '/services/fullstack-web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Graphics Design', path: '/services/graphics-design' },
    { name: 'Video Editing', path: '/services/video-editing' },
    { name: 'Learning Bootcamp', path: '/services/learning-bootcamp' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-amber-500/10 flex justify-between items-center px-4 md:px-8 py-4 z-50 font-['Space_Grotesk'] tracking-tight">
        <Link to="/" className="text-2xl font-bold text-amber-500 uppercase tracking-widest">Timir Tech</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-amber-400 font-bold border-b-2 border-amber-500 pb-1" to="/">Home</Link>
            
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              Services
              <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`}>expand_more</span>
            </span>
              
            {showServices && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 min-w-[260px] shadow-2xl shadow-black/40">
                  {serviceItems.map((item, idx) => (
                    <Link 
                      key={idx}
                      to={item.path}
                      className="block px-4 py-3 text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a className="text-slate-300 hover:text-white transition-colors" href="/#portfolio">Portfolio</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="/#about">About</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="/#contact">Contact</a>
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
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-3xl pt-24 px-8 flex flex-col gap-6 md:hidden overflow-y-auto">
          <Link onClick={() => setIsOpen(false)} className="text-2xl text-amber-400 font-bold" to="/">Home</Link>
          
          {/* Mobile Services Accordion */}
          <div>
            <button 
              onClick={() => setShowServices(!showServices)} 
              className="text-2xl text-slate-300 flex items-center gap-2 w-full"
            >
              Services
              <span className={`material-symbols-outlined transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {showServices && (
              <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-amber-500/30">
                {serviceItems.map((item, idx) => (
                  <Link 
                    key={idx}
                    onClick={() => { setIsOpen(false); setShowServices(false); }}
                    to={item.path}
                    className="text-lg text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="/#portfolio">Portfolio</a>
          <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="/#about">About</a>
          <a onClick={() => setIsOpen(false)} className="text-2xl text-slate-300" href="/#contact">Contact</a>
          <button className="mt-8 bg-primary-container text-on-primary-container px-8 py-4 w-full rounded-full font-bold shadow-lg shadow-primary/20">
              Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
