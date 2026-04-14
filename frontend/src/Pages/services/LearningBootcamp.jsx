import React from 'react';
import { Link } from 'react-router-dom';

const LearningBootcamp = () => {
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
                Intensive, hands-on training programs designed to transform beginners into industry-ready professionals. Learn from active engineers building real-world products.
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
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">Next Cohort</div>
                    <div className="text-sm text-primary">Starting Soon</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-surface-container-highest/40">
                    <span className="text-sm">Duration</span>
                    <span className="text-sm font-bold text-primary">12 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-surface-container-highest/40">
                    <span className="text-sm">Format</span>
                    <span className="text-sm font-bold text-primary">Hybrid</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-surface-container-highest/40">
                    <span className="text-sm">Class Size</span>
                    <span className="text-sm font-bold text-primary">Max 20</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-surface-container-highest/40">
                    <span className="text-sm">Certificate</span>
                    <span className="text-sm font-bold text-primary">Included</span>
                  </div>
                </div>
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
              { icon: 'code', title: 'Web Development', desc: 'Master modern web engineering from pixel-perfect frontends to robust backends.', duration: '12 Weeks', path: '/services/fullstack-web-development' },
              { icon: 'smartphone', title: 'Mobile Development', desc: 'Build premium native and cross-platform applications for iOS and Android.', duration: '10 Weeks', path: '/services/mobile-app-development' },
              { icon: 'palette', title: 'Graphics Design', desc: 'Visual storytelling, brand identity, and high-end graphic assets.', duration: '8 Weeks', path: '/services/graphics-design' },
              { icon: 'shield_lock', title: 'Cyber Security', desc: 'Ethical hacking, network security, and professional penetration testing.', duration: '12 Weeks', path: '/services/cyber-security' },
              { icon: 'videocam', title: 'Video Editing', desc: 'Professional cinematic editing, motion graphics, and digital media production.', duration: '10 Weeks', path: '/services/video-editing' },
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
