import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const carouselSlides = [
  { type: 'intro' },
  { type: 'program', icon: 'code', title: 'Web Development', desc: 'Master modern full stack website  developmnet from frontends to robust backends. and built market ready full stack projects with us', duration: '12 Weeks + 3 week project', color: 'text-blue-400', bgBorder: 'border-blue-500/20' },
  { type: 'program', icon: 'smartphone', title: 'Mobile Development', desc: 'Build premium native and cross-platform mobile applications from scrach to advanced with effective project', duration: '15 Weeks', color: 'text-green-400', bgBorder: 'border-green-500/20' },
  { type: 'program', icon: 'palette', title: 'Graphics Design', desc: 'Visual storytelling, brand identity, and high-end graphic assets.logo and poster design.', duration: '8 Weeks', color: 'text-purple-400', bgBorder: 'border-purple-500/20' },
  { type: 'program', icon: 'shield_lock', title: 'Cyber Security', desc: 'Ethical hacking, network security, and professional penetration testing.', duration: '12 Weeks', color: 'text-red-400', bgBorder: 'border-red-500/20' },
  { type: 'program', icon: 'videocam', title: 'Video Editing', desc: 'Professional cinematic editing, motion graphics, and digital media. social medai vidoe editing ', duration: '10 Weeks', color: 'text-amber-400', bgBorder: 'border-amber-500/20' },
];

const LearningBootcamp = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-tertiary/8 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">school</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Education Hub</span>
              </div>
              <h1 className="headline text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight px-2">
                Learning <span className="text-gradient">Bootcamp</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Intensive, hands-on training programs  from scrach computer basic upto  designed to transform absolute beginners into industry-ready professionals. Learn from active and exprianced teture  building real-world products, choosing the format that perfectly fits your schedule.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Enroll Now
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  View Curriculum
                </button>
              </div>
            </div>
            <div className="relative group min-h-[480px] lg:min-h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

              <div className="glass-card rounded-[3rem] border border-white/10 relative overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>

                {/* invisible anchor to define height */}
                <div className="invisible p-8 flex flex-col space-y-5">
                  <div className="h-14"></div>
                  <div className="h-32"></div>
                  <div className="h-28"></div>
                </div>

                {carouselSlides.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 p-8 flex flex-col transition-all duration-700 ease-in-out ${i === activeSlide
                        ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                        : i < activeSlide
                          ? 'opacity-0 -translate-y-16 pointer-events-none -z-10'
                          : 'opacity-0 translate-y-16 pointer-events-none -z-10'
                      }`}
                  >
                    {slide.type === 'intro' ? (
                      <div className="flex flex-col h-full space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center relative">
                            <span className="material-symbols-outlined text-primary text-2xl relative z-10 animate-pulse">auto_stories</span>
                            <div className="absolute inset-0 bg-primary/10 animate-ping rounded-2xl"></div>
                          </div>
                          <div>
                            <div className="text-lg font-black text-on-surface">Next Cohort</div>
                            <div className="text-sm text-primary font-bold flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Enrollment Open
                            </div>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-surface-container-highest/30 border border-white/5">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                              <span className="material-symbols-outlined text-sm text-amber-500">trending_up</span> Skill Builder
                            </span>
                            <span className="text-xs font-bold bg-amber-500/10 text-amber-500 px-3 py-1 rounded-md">0 to 100</span>
                          </div>
                          <div className="w-full bg-black/40 rounded-full h-2.5 overflow-hidden flex relative">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-amber-500 to-green-500 h-2.5 w-full"></div>
                          </div>
                          <div className="flex justify-between text-[10px] text-on-surface-variant/70 mt-3 font-bold uppercase tracking-wider">
                            <span>Beginner</span>
                            <span>Industry Pro</span>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-surface-container-highest/30 border border-white/5">
                          <span className="text-sm font-bold text-on-surface-variant flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-sm text-blue-500">devices</span> Flexible Formats
                          </span>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[14px]">public</span> Online
                            </span>
                            <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20 flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[14px]">headset_mic</span> Remote
                            </span>
                            <span className="px-3 py-1.5 rounded-xl bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[14px]">apartment</span> Physical
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-center p-3 text-on-surface-variant font-bold text-xs uppercase tracking-widest mt-auto">
                          Program Details <span className="material-symbols-outlined ml-2 animate-bounce">arrow_downward</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col h-full space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                          <div className={`w-14 h-14 bg-surface-container-highest/50 border ${slide.bgBorder} rounded-2xl flex items-center justify-center relative hover:scale-110 transition-transform`}>
                            <span className={`material-symbols-outlined text-3xl z-10 ${slide.color}`}>{slide.icon}</span>
                          </div>
                          <div>
                            <div className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mb-1">Program Highlight</div>
                            <div className={`text-2xl sm:text-3xl font-black ${slide.color}`}>{slide.title}</div>
                          </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface-container-highest/30 border border-white/5 shadow-inner">
                          <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">{slide.desc}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-5 rounded-2xl bg-surface-container-highest/30 border border-white/5 flex flex-col justify-center">
                            <span className="text-xs text-on-surface-variant block mb-1">Duration</span>
                            <span className="text-xl font-black text-white">{slide.duration}</span>
                          </div>
                          <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex flex-col justify-center relative overflow-hidden">
                            <span className="material-symbols-outlined absolute -right-3 -bottom-3 text-6xl text-primary/10 -z-10 rotate-12">workspace_premium</span>
                            <span className="text-xs text-on-surface-variant block mb-1">Certificate</span>
                            <span className="text-base font-black text-primary">Included</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Carousel Indicators placed reliably under the content */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 group-hover:gap-4 transition-all">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all duration-500 ease-in-out ${i === activeSlide ? 'w-8 bg-primary shadow-[0_0_10px_rgba(255,165,0,0.8)]' : 'w-2 bg-on-surface-variant/30 hover:bg-on-surface-variant/70 hover:w-4'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'code', title: 'Web Development', desc: 'Master modern website development from basic frontend frontends to robust backends.', duration: '12 Weeks + projects', path: '/services/fullstack-web-development' },
              { icon: 'smartphone', title: 'Mobile Development', desc: 'Build premium native and cross-platform applications for iOS and Android.', duration: '15+ Weeks', path: '/services/mobile-app-development' },
              { icon: 'palette', title: 'Graphics Design', desc: 'Visual storytelling, brand identity, and high-end graphic assets.poster ad logo design', duration: '8 Weeks', path: '/services/graphics-design' },
              { icon: 'shield_lock', title: 'Cyber Security', desc: 'Ethical hacking, network security, and professional penetration testing.', duration: '12 Weeks', path: '/services/cyber-security' },
              { icon: 'videocam', title: 'Video Editing', desc: 'Professional cinematic editing, motion graphics, and digital media production.social medai prodcution', duration: '10 Weeks', path: '/services/video-editing' },
            ].map((prog, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{prog.icon}</span>
                  </div>
                  <span className="text-xs text-primary font-bold px-3 py-1 rounded-full bg-primary/10">{prog.duration}</span>
                </div>
                <h3 className="headline text-xl font-bold mb-3">{prog.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{prog.desc}</p>
                <Link className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link" to={prog.path}>
                  Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Why Train With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: 'engineering', val: '95%', label: 'Job Placement' },
              { icon: 'groups', val: '500+', label: 'Graduates' },
              { icon: 'workspace_premium', val: '4.9/5', label: 'Rating' },
              { icon: 'handshake', val: '50+', label: 'Hiring Partners' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                <div className="text-3xl font-headline font-bold text-primary mb-1">{stat.val}</div>
                <div className="text-xs font-label uppercase tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningBootcamp;
