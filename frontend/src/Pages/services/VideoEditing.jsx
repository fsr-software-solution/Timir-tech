import React from 'react';
import { Link } from 'react-router-dom';

const VideoEditing = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary-container/8 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">videocam</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Visual Production</span>
              </div>
              <h1 className="headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Video <span className="text-gradient">Editing</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Cinematic video production and post-production that tells your brand's story with visual impact. From corporate content to viral social media, we bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                  View Showreel
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-6 overflow-hidden">
                <div className="bg-surface-container-highest rounded-2xl aspect-video flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent rounded-2xl"></div>
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-primary/30">
                    <span className="material-symbols-outlined text-on-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-2 bg-primary rounded-full w-2/3"></div>
                  <div className="h-2 bg-surface-container-highest rounded-full flex-1"></div>
                  <span className="text-xs text-on-surface-variant">2:34</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12 text-center">Production Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'movie', title: 'Corporate Videos', desc: 'Professional brand films, company profiles, and investor presentations.' },
              { icon: 'slow_motion_video', title: 'Motion Graphics', desc: 'Animated explainers, logo reveals, and dynamic visual content.' },
              { icon: 'music_video', title: 'Social Content', desc: 'Platform-optimized reels, shorts, and viral content creation.' },
              { icon: 'auto_awesome_motion', title: 'Color Grading', desc: 'Cinematic color correction and grading for professional-grade output.' },
              { icon: 'graphic_eq', title: 'Sound Design', desc: 'Audio mixing, SFX layering, and voiceover production.' },
              { icon: 'subtitles', title: 'Post-Production', desc: 'Titles, subtitles, transitions, and comprehensive editing suites.' },
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
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12">Software We Master</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Blender', 'Cinema 4D', 'Audition', 'CapCut Pro'].map((tool, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold hover:border-primary/40 transition-all cursor-default">{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;
