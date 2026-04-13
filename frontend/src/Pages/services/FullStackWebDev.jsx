import React from 'react';
import { Link } from 'react-router-dom';

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
              <h1 className="headline text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight px-2">
                Full-Stack <span className="text-gradient">Web Engineering</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Build modern, high-performance web applications. From pixel-perfect frontends to robust backend architectures, master the skills required by top-tier tech firms.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Enroll Now
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  Get Curriculum
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-1 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
                <div className="bg-surface-container-low rounded-[2.8rem] h-80 flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-6">
                    {['react', 'nodejs', 'typescript', 'mongodb', 'postgresql', 'nextjs'].map((icon, i) => (
                      <div key={i} className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-6 transition-all cursor-default group">
                        <span className="material-symbols-outlined text-primary text-3xl opacity-40 group-hover:opacity-100">terminal</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card p-6 rounded-3xl border-primary/20">
                <div className="text-sm font-bold opacity-60">Success Rate</div>
                <div className="text-2xl font-bold text-primary">94%</div>
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
            <p className="text-on-surface-variant">We teach you the tools used by Netflix, Airbnb, and Facebook.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="headline text-xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">diamond</span> Frontend Mastery
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux Toolkit', 'Framer Motion'].map((t, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl border-primary/10">
              <h3 className="headline text-xl font-bold mb-6 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">database</span> Backend Excellence
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM', 'Redis', 'Docker', 'AWS Basics'].map((t, i) => (
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
                  { label: 'Coding Labs', val: '200+', icon: 'terminal' },
                  { label: 'Real Projects', val: '8+', icon: 'tactic' },
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
                No boring lectures. From day one, you'll be writing code and building features. By the end of the bootcamp, you'll have a production-ready portfolio that proves your skills to any employer.
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
