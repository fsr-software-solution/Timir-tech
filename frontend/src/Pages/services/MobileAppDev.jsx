import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppDev = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/8 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">smartphone</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Mobile Engineering</span>
              </div>
              <h1 className="headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mobile App <span className="text-gradient">Development</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Native and cross-platform mobile applications that captivate users and drive engagement. From iOS to Android, we deliver polished, high-performance mobile experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Build Your App
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="glass-card rounded-[3rem] p-8 max-w-xs w-full">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl">phone_iphone</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-surface-container-highest/60 rounded-full w-full"></div>
                  <div className="h-4 bg-surface-container-highest/40 rounded-full w-3/4"></div>
                  <div className="h-12 bg-gradient-to-r from-primary-container to-primary rounded-2xl mt-6"></div>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-16 bg-surface-container-highest/40 rounded-xl"></div>
                    <div className="h-16 bg-surface-container-highest/40 rounded-xl"></div>
                    <div className="h-16 bg-surface-container-highest/40 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Platforms & Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'phone_iphone', title: 'iOS (Swift)', desc: 'Native iOS apps with SwiftUI and UIKit for seamless Apple ecosystem integration.' },
              { icon: 'phone_android', title: 'Android (Kotlin)', desc: 'High-performance Android apps with Jetpack Compose and Material Design 3.' },
              { icon: 'devices', title: 'Cross-Platform', desc: 'React Native and Flutter solutions for simultaneous multi-platform deployment.' },
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

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Key Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Push Notifications', 'Offline Mode', 'Biometric Auth', 'Payment Integration', 'GPS & Maps', 'Camera & AR', 'Real-time Chat', 'Analytics'].map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl border border-outline-variant/20 text-center hover:bg-surface-container-highest/20 transition-all">
                <div className="font-bold text-on-surface text-sm">{cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDev;
