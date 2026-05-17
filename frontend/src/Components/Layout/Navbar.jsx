import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logobg.png';

const NAVBAR_OFFSET_FALLBACK = '5.5rem';

const Navbar = () => {
  const navRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const [spacerHeight, setSpacerHeight] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownPos, setServicesDropdownPos] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const sync = () => {
      const h = Math.ceil(nav.getBoundingClientRect().height);
      setSpacerHeight(h);
      document.documentElement.style.setProperty('--navbar-offset', `${h}px`);
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(nav);
    window.addEventListener('resize', sync);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
      document.documentElement.style.removeProperty('--navbar-offset');
    };
  }, []);

  const updateServicesDropdownPos = () => {
    const btn = servicesBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setServicesDropdownPos({
      top: rect.bottom + 4,
      left: rect.left,
      minWidth: Math.max(rect.width, 260),
    });
  };

  useLayoutEffect(() => {
    if (!showServices) {
      setServicesDropdownPos(null);
      return;
    }
    updateServicesDropdownPos();
    window.addEventListener('resize', updateServicesDropdownPos);
    window.addEventListener('scroll', updateServicesDropdownPos, true);
    return () => {
      window.removeEventListener('resize', updateServicesDropdownPos);
      window.removeEventListener('scroll', updateServicesDropdownPos, true);
    };
  }, [showServices]);

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

  useEffect(() => {
    if (!showServices) return;

    const handlePointerDown = (e) => {
      const panel = document.getElementById('services-dropdown-panel');
      if (
        servicesBtnRef.current?.contains(e.target) ||
        panel?.contains(e.target)
      ) {
        return;
      }
      setShowServices(false);
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowServices(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showServices]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setShowServices(false);
    } else {
      document.body.style.overflow = '';
      setMobileServicesOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const getPillLinkStyle = (section) => {
    const isActive = location.pathname === '/' && activeSection === section;
    return `px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-colors whitespace-nowrap shrink-0 ${
      isActive ? 'text-amber-600 bg-amber-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;
  };

  const getServicesPillStyle = () => {
    const isActive = location.pathname.includes('/services');
    return `flex items-center gap-0.5 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
      isActive ? 'text-amber-600 bg-amber-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;
  };

  const getMobileLinkStyle = (section) => {
    const isActive = location.pathname === '/' && activeSection === section;
    return `text-xl font-bold transition-colors ${isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`;
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header ref={navRef} className="site-header font-['Space_Grotesk'] tracking-tight">
        <div className="site-header__bar w-full flex items-center gap-3 px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5">
          {/* Logo — left */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1 md:flex-initial" onClick={closeMobileMenu}>
            <div className="w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center bg-[#07324f]/90 border border-white/10 shadow-md shrink-0">
              <img
                src={logoImg}
                alt="Timir Tech Logo"
                className="w-full h-full object-cover scale-[1.10] transform-gpu"
              />
            </div>
            <div className="flex flex-col min-w-0 max-w-[calc(100vw-5.5rem)] sm:max-w-none">
              <span className="text-sm sm:text-xl md:text-2xl font-bold text-amber-500 uppercase tracking-wider sm:tracking-widest leading-none truncate">
                Timir <span className="text-white drop-shadow-sm">Tech</span>
              </span>
              <span className="hidden sm:block text-[9px] md:text-xs text-slate-300 font-medium tracking-normal mt-0.5 sm:mt-1 line-clamp-1 truncate drop-shadow-sm">
                Digital Solutions For Better Future
              </span>
            </div>
          </Link>

          {/* Mobile menu button — small screens only (hidden when desktop nav pill is shown) */}
          {!mobileMenuOpen && (
            <button
              type="button"
              className="site-header__menu-btn hidden max-md:flex shrink-0 ml-auto"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={false}
            >
              <span className="material-symbols-outlined text-[1.75rem]">menu</span>
            </button>
          )}

          {/* Desktop / tablet nav pill — 768px and up */}
          <nav className="site-header__nav relative hidden min-w-0 shrink-0 md:ml-auto md:block" aria-label="Main navigation">
            <div className="site-header__pill flex items-center">
              <div className="site-header__pill-scroll flex items-center">
                <Link className={getPillLinkStyle('home')} to="/">Home</Link>

                <div className="relative shrink-0">
                  <button
                    ref={servicesBtnRef}
                    type="button"
                    className={getServicesPillStyle()}
                    onClick={() => setShowServices((open) => !open)}
                    onMouseEnter={() => {
                      setShowServices(true);
                      updateServicesDropdownPos();
                    }}
                    aria-expanded={showServices}
                    aria-haspopup="true"
                  >
                    Services
                    <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                </div>

                <span className="site-header__pill-divider shrink-0" aria-hidden />

                <a className={getPillLinkStyle('portfolio')} href="/#portfolio">Portfolio</a>
                <a className={getPillLinkStyle('about')} href="/#about">About</a>
                <a className={getPillLinkStyle('contact')} href="/#contact">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Services dropdown — fixed, directly under Services button */}
      {showServices && servicesDropdownPos && (
        <div
          id="services-dropdown-panel"
          className="site-header__dropdown-fixed hidden md:block"
          style={{
            top: servicesDropdownPos.top,
            left: servicesDropdownPos.left,
            minWidth: servicesDropdownPos.minWidth,
          }}
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <div className="site-header__dropdown-panel">
            {serviceItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setShowServices(false)}
                className="site-header__dropdown-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 hidden max-md:block">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-label="Close menu backdrop"
          />
          <div className="absolute left-0 right-0 bottom-0 top-[var(--navbar-offset,5.5rem)] bg-slate-900/98 backdrop-blur-xl px-6 pt-8 pb-6 overflow-y-auto">
            <nav className="flex flex-col gap-5 text-left" aria-label="Mobile navigation">
              <Link onClick={closeMobileMenu} className={getMobileLinkStyle('home')} to="/">Home</Link>

              <div>
                <button
                  type="button"
                  className={`text-xl font-bold flex items-center gap-2 w-full ${location.pathname.includes('/services') ? 'text-amber-400' : 'text-slate-300'}`}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <span className={`material-symbols-outlined transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-amber-500/40">
                    {serviceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className="text-base text-slate-400 hover:text-amber-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a onClick={closeMobileMenu} className={getMobileLinkStyle('portfolio')} href="/#portfolio">Portfolio</a>
              <a onClick={closeMobileMenu} className={getMobileLinkStyle('about')} href="/#about">About</a>
              <a onClick={closeMobileMenu} className={getMobileLinkStyle('contact')} href="/#contact">Contact</a>
            </nav>
          </div>
        </div>
      )}

      <div
        className="w-full shrink-0"
        style={{ height: spacerHeight ?? NAVBAR_OFFSET_FALLBACK }}
        aria-hidden
      />
    </>
  );
};

export default Navbar;
