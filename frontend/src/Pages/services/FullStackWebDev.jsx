import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image.jpg'
const FullStackWebDev = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/services/learning-bootcamp" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Bootcamps
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">code</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Engineering Career Path</span>
              </div>
              <h3 className="headline text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight px-2">
                Full-Stack <span className="text-gradient">Web Development</span>
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Build modern, high-performance web applications. From scratch frontends to robust backend architectures, master the skills required by top-tier tech firms and market demand.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="http://marelign-yimer.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform inline-block">
                  Enroll Now
                </a>

              </div>
            </div>
            <div className="relative group flex justify-center lg:justify-end items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px]">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img
                  src={image}
                  alt="Full Stack Development Bootcamp"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-4xl font-bold mb-4">Master the Modern Stack</h2>
            <p className="text-on-surface-variant">We teach you the tools used by most companies, from HTML, CSS, JavaScript, and Bootstrap to Node.js, React, and Express.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="headline text-xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">diamond</span> Frontend Mastery
              </h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Next.js', 'Tailwind CSS'].map((t, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl border-primary/10">
              <h3 className="headline text-xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">database</span> Backend Excellence
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST API', 'Docker', 'Go'].map((t, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: 'Real Projects', val: '4+', icon: 'tactic' },
                  { label: 'Mentorship', val: '1:1', icon: 'groups' },
                  { label: 'Outcome', val: 'Portfolio', icon: 'workspace_premium' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-4 sm:p-6 rounded-3xl text-center hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-primary mb-2 sm:mb-3 block text-2xl sm:text-3xl">{stat.icon}</span>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.val}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h2 className="headline text-3xl md:text-5xl font-bold mb-6">Learn by <span className="text-gradient">Building</span></h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                No boring lectures. From day one computer basics, you'll be writing code and building features. By the end of the bootcamp, you'll have a production-ready portfolio that proves your skills to any employer.
              </p>
              <ul className="space-y-4">
                {['Industry-active engineers as instructors', 'Access to a private Discord community', 'Weekly code reviews and feedback', 'Job referral network access'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-on-surface-variant">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">done</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullStackWebDev;
