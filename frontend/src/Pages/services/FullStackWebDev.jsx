import React from 'react';
import { Link } from 'react-router-dom';

const FullStackWebDev = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-tertiary-container/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">language</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Web Engineering</span>
              </div>
              <h1 className="headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Full-Stack <span className="text-gradient">Web Development</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                End-to-end web applications from pixel-perfect frontends to bulletproof backends. We build responsive, fast, and scalable web experiences using cutting-edge frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Get a Quote
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  Our Stack
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-1 overflow-hidden">
                <img 
                  className="w-full h-80 object-cover rounded-[2.8rem]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaOWDKedLhcTdcfBmjJDjMTRHhlDrrdbfxllG2cQ_QcACzvtptMdJZi-IfyZ6S9Kifv8f5_vu_IelWxuD2QFzAmqVJvNpKiXpvpks3R0-cv1w8FX8AFBhVMDA52gUCoHzSnQ1ExW1kftcpe402FBgJo1fZB1lc7qAigQs2WPqm2lLK9xxvxJXGa6JvPYJz8Hcobp7nvbbnQmWHzMsDB4dwEzmZ1TXCC5V_DgzxyyM5Brg4FW5-rB6BINCcrxDO01HZYxnHaQRD1O08"
                  alt="Full-stack web development dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Our Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="headline text-xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined">monitor</span> Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Redux'].map((t, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="headline text-xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined">dns</span> Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Redis'].map((t, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'speed', title: 'Lightning Fast', desc: 'Optimized performance with SSR, lazy loading, and CDN distribution.' },
              { icon: 'devices', title: 'Fully Responsive', desc: 'Pixel-perfect experiences across desktops, tablets, and smartphones.' },
              { icon: 'lock', title: 'Secure by Default', desc: 'Authentication, encryption, and security best practices built-in.' },
            ].map((f, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{f.icon}</span>
                </div>
                <h3 className="headline text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullStackWebDev;
