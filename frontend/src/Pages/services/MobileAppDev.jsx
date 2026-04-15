import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppDev = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/8 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/services/learning-bootcamp" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Bootcamps
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">smartphone</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Mobile Engineering</span>
              </div>
              <h3 className="headline text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight px-2">
                Mobile App <span className="text-gradient">Architect</span>
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Master the art of building world-class mobile applications. From cross-platform performance to native precision, become an expert in the technologies that power the mobile web.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="http://marelign-yimer.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform inline-block">
                  Reserve Spot
                </a>

              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="rounded-[2rem] overflow-hidden relative group border border-primary/20 bg-surface-container-low shadow-2xl">
                <img
                  src="https://th.bing.com/th?id=OIF.7JGZAGKnEhC81%2fyNpcLz5w&w=281&h=194&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                  alt="Mobile App Development Preview"
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              {/* Floating Labels */}
              <div className="absolute top-1/4 -right-4 glass-card p-4 rounded-2xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  <span className="text-xs font-bold">Native Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-4xl font-bold mb-4">What You'll Master</h2>
            <p className="text-on-surface-variant">The tools used by industry giants like Uber, Airbnb, and Spotify.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'phone_iphone', title: 'React Native', desc: 'Build powerful cross-platform apps using the React hooks ecosystem.' },
              { icon: 'phone_android', title: 'Flutter & Dart', desc: 'Create stunning, natively compiled applications for any screen.' },
              { icon: 'devices', title: 'Native Integration', desc: 'Access device hardware like Camera, GPS, and Biometrics seamlessly.' },
            ].map((p, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
                </div>
                <h3 className="headline text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-gradient">Modern Engineers</span></h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Our mobile development bootcamp isn't just about syntax. We focus on building production-grade architectures that scale.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Offline-First Apps', desc: 'Secure local storage with SQLite and real-time data sync.' },
                  { title: 'Cloud Databases', desc: 'Integrating MongoDB and MySQL for scalable cross-platform data.' },
                  { title: 'Smooth Animations', desc: 'Mastering 60FPS fluid movements with Reanimated.' },
                  { title: 'App Store Secrets', desc: 'The complete guide to deployment and visibility.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    </div>
                    <div>
                      <div className="font-bold text-on-surface mb-1">{item.title}</div>
                      <div className="text-sm text-on-surface-variant">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] text-center bg-gradient-to-br from-primary/5 to-transparent">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest opacity-60">Weeks Intensive</div>
              </div>
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] text-center mt-4 sm:mt-8">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest opacity-60">Store Ready Apps</div>
              </div>
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] text-center -mt-4 sm:-mt-8">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">91%</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest opacity-60">Hiring Rate</div>
              </div>
              <div className="glass-card p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest opacity-60">Code Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDev;
