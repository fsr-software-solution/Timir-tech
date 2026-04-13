import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary-container/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Software Engineering</span>
              </div>
              <h1 className="headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Software <span className="text-gradient">Development</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                We architect and build enterprise-grade software solutions that power businesses at scale. From desktop applications to distributed cloud systems, our engineering team delivers robust, maintainable code.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <pre className="text-sm text-primary/80 font-mono leading-relaxed overflow-x-auto">
{`class TimirEngine {
  constructor() {
    this.precision = "maximum";
    this.scalability = "infinite";
  }

  async buildSolution(specs) {
    const architecture = await this.design(specs);
    const product = await this.engineer(architecture);
    return product.deploy();
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Technologies We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Python', 'Java', 'C++', 'Rust', 'Go', 'TypeScript', '.NET', 'Kotlin'].map((tech, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl text-center group hover:border-primary/40 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                <div className="font-bold text-on-surface">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'search', title: 'Discovery', desc: 'We analyze your requirements and define the optimal architecture.' },
              { icon: 'architecture', title: 'Design', desc: 'Blueprint creation with UML, ERDs, and system design documents.' },
              { icon: 'build', title: 'Build', desc: 'Agile sprints with continuous integration and code reviews.' },
              { icon: 'rocket_launch', title: 'Deploy', desc: 'CI/CD pipelines, monitoring, and production release management.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="glass-card p-8 rounded-3xl text-center hover:border-primary/40 transition-all h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                  </div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                  <h3 className="headline text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
