import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logobg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      const sections = ['home', 'portfolio', 'about', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }

      if (window.scrollY < 100) current = 'home';
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getLinkStyle = (section, isMobile = false) => {
    const isActive = location.pathname === '/' && activeSection === section;
    const baseStyle = "transition-colors font-bold";
    if (isMobile) {
      return `${baseStyle} text-2xl ${isActive ? 'text-amber-400' : 'text-slate-300'}`;
    }
    return `${baseStyle} ${isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`;
  };

  const getServicesStyle = (isMobile = false) => {
    const isActive = location.pathname.includes('/services');
    if (isMobile) {
      return `text-2xl flex items-center gap-2 w-full transition-colors font-bold ${isActive ? 'text-amber-400' : 'text-slate-300'}`;
    }
    return `transition-colors cursor-pointer flex items-center gap-1 font-bold ${isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`;
  };

  const serviceItems = [
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Full-Stack Web Development', path: '/services/web-development-service' },
    { name: 'Mobile App Development', path: '/services/mobile-development-service' },
    { name: 'Graphics Design', path: '/services/graphics-design-service' },
    { name: 'Video Editing', path: '/services/video-editing-service' },
    { name: 'Cyber Security', path: '/services/cyber-security-service' },
    { name: 'Learning Bootcamp', path: '/services/learning-bootcamp' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 border-b border-white/10 bg-[#07324f] z-50 font-['Space_Grotesk'] tracking-tight">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6 md:px-8 py-1 sm:py-2">
          <Link to="/" className="flex items-center gap-1.5 group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden flex items-center justify-center bg-[#07324f] border-none outline-none ring-0">
              <img
                src={logoImg}
                alt="Timir Tech Logo"
                className="w-full h-full object-cover scale-[1.10] transform-gpu"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-2xl font-bold text-amber-500 uppercase tracking-widest leading-none">
                Timir <span className="text-white">Tech</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-normal mt-1">
                Digital Solutions For Better Future
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link className={getLinkStyle('home')} to="/">Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <span className={getServicesStyle()}>
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

            <a className={getLinkStyle('portfolio')} href="/#portfolio">Portfolio</a>
            <a className={getLinkStyle('about')} href="/#about">About</a>
            <a className={getLinkStyle('contact')} href="/#contact">Contact</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">


            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 active:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-3xl pt-24 px-8 flex flex-col gap-6 md:hidden overflow-y-auto">
          <Link onClick={() => setIsOpen(false)} className={getLinkStyle('home', true)} to="/">Home</Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setShowServices(!showServices)}
              className={getServicesStyle(true)}
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

          <a onClick={() => setIsOpen(false)} className={getLinkStyle('portfolio', true)} href="/#portfolio">Portfolio</a>
          <a onClick={() => setIsOpen(false)} className={getLinkStyle('about', true)} href="/#about">About</a>
          <a onClick={() => setIsOpen(false)} className={getLinkStyle('contact', true)} href="/#contact">Contact</a>
          <button className="mt-8 bg-primary-container text-on-primary-container px-8 py-4 w-full rounded-full font-bold shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
