import React from 'react';
import { Link } from 'react-router-dom';

const GraphicsDesign = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/services/learning-bootcamp" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Bootcamps
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">palette</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Creative Academy</span>
              </div>
              <h1 className="headline text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight px-2">
                Graphics <span className="text-gradient">Design</span> Academy
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Master the principles of design thinking and user experience. From wireframing to high-fidelity prototypes, build products that are as beautiful as they are functional.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Apply Now
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  View Student Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-card rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-primary-container/20 to-transparent hover:scale-105 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-primary text-3xl sm:text-5xl mb-2 sm:mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>brush</span>
                  <div className="text-[10px] sm:text-xs font-bold opacity-60 uppercase">Branding</div>
                </div>
                <div className="glass-card rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 aspect-square flex flex-col items-center justify-center mt-4 sm:mt-8 hover:scale-105 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-secondary text-3xl sm:text-5xl mb-2 sm:mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
                  <div className="text-[10px] sm:text-xs font-bold opacity-60 uppercase">UI/UX</div>
                </div>
                <div className="glass-card rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 aspect-square flex flex-col items-center justify-center -mt-4 sm:-mt-8 hover:scale-105 transition-transform cursor-default">
                  <span className="material-symbols-outlined text-tertiary text-3xl sm:text-5xl mb-2 sm:mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>draw</span>
                  <div className="text-[10px] sm:text-xs font-bold opacity-60 uppercase">Illustration</div>
                </div>
                <div className="glass-card rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 aspect-square flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-default bg-gradient-to-tl from-secondary/10 to-transparent">
                  <span className="material-symbols-outlined text-primary text-3xl sm:text-5xl mb-2 sm:mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
                  <div className="text-[10px] sm:text-xs font-bold opacity-60 uppercase">3D Assets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-4xl font-bold mb-4">The Creative Toolkit</h2>
            <p className="text-on-surface-variant">We don't just teach tools; we teach design philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'branding_watermark', title: 'Brand Identity', desc: 'Creation of logos, color palettes, and full brand guidelines.' },
              { icon: 'web', title: 'Interface Design', desc: 'High-fidelity UI components and interactive mobile/web prototypes.' },
              { icon: 'psychology', title: 'User Experience', desc: 'Understanding user behavior through empathy maps and personas.' },
              { icon: 'campaign', title: 'Social Media', desc: 'High-conversion ad graphics and cohesive social presence.' },
              { icon: 'dashboard', title: 'Motion Graphics', desc: 'Bringing designs to life with smooth, purposeful animations.' },
              { icon: 'deployed_code', title: 'No-Code Web', desc: 'Transforming designs into live sites using tools like Framer.' },
            ].map((s, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
                </div>
                <h3 className="headline text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12">Industry Standards Only</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe Photoshop', 'Illustrator', 'After Effects', 'Spline 3D', 'Framer', 'Procreate'].map((tool, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold hover:border-primary/40 transition-all cursor-default shadow-sm">{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsDesign;
