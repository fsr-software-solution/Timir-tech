import React from 'react';
import { Link } from 'react-router-dom';

const GraphicsDesign = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">palette</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Creative Studio</span>
              </div>
              <h1 className="headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Graphics <span className="text-gradient">Design</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Visual storytelling that captivates, converts, and creates lasting impressions. From brand identities to marketing assets, our designers craft pixel-perfect experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Start a Project
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-3xl p-6 aspect-square flex items-center justify-center bg-gradient-to-br from-primary-container/20 to-transparent">
                  <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>brush</span>
                </div>
                <div className="glass-card rounded-3xl p-6 aspect-square flex items-center justify-center mt-8">
                  <span className="material-symbols-outlined text-secondary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
                </div>
                <div className="glass-card rounded-3xl p-6 aspect-square flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>draw</span>
                </div>
                <div className="glass-card rounded-3xl p-6 aspect-square flex items-center justify-center -mt-8 bg-gradient-to-tl from-secondary/10 to-transparent">
                  <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'branding_watermark', title: 'Brand Identity', desc: 'Logos, color systems, typography, and comprehensive brand guidelines.' },
              { icon: 'web', title: 'UI/UX Design', desc: 'User-centered interface design with wireframes, prototypes, and usability testing.' },
              { icon: 'image', title: 'Print Design', desc: 'Brochures, business cards, banners, and packaging with premium finishes.' },
              { icon: 'campaign', title: 'Marketing Assets', desc: 'Social media graphics, ad creatives, and email templates that convert.' },
              { icon: 'dashboard', title: 'Infographics', desc: 'Data visualization and complex information presented beautifully.' },
              { icon: 'deployed_code', title: '3D & Motion', desc: 'Product renders, 3D mockups, and animated brand elements.' },
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

      {/* Tools */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12">Tools We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe Photoshop', 'Illustrator', 'After Effects', 'Blender', 'Canva Pro', 'InDesign', 'Sketch'].map((tool, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold hover:border-primary/40 transition-all cursor-default">{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsDesign;
