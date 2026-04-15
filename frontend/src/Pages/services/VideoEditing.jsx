import React from 'react';
import { Link } from 'react-router-dom';

const VideoEditing = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/services/learning-bootcamp" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
            <span className="material-symbols-outlined">arrow_back</span> Back to Bootcamps
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">videocam</span>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant">Motion & Media</span>
              </div>
              <h3 className="headline text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight px-2">
                Video <span className="text-gradient">Editing</span> & Production
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Master the art of cinematic storytelling. From advanced video editing to motion graphics and color grading, learn the skills to produce high-impact digital content.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="http://marelign-yimer.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-transform inline-block">
                  Start Learning
                </a>
              
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-4 overflow-hidden shadow-2xl shadow-primary/10">
                <div className="bg-black rounded-[2.5rem] aspect-video flex flex-col relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/simple-dashed.png')] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                  {/* Timeline overlay */}
                  <div className="absolute bottom-6 left-6 right-6 h-1 bg-surface-container-highest/30 rounded-full">
                    <div className="h-full bg-primary rounded-full w-1/3 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl border-primary/20 animate-pulse">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                  4K Rendering Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-4xl font-bold mb-4">Production Workflow</h2>
            <p className="text-on-surface-variant">Learn the complete pipeline from concept to final export.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'movie_edit', title: 'Post-Production', desc: 'Advanced cutting techniques, narrative flow, and sound integration.' },
              { icon: 'slow_motion_video', title: 'Motion Graphics', desc: 'Dynamic typography, logo animation, and visual effects.' },
              { icon: 'palette', title: 'Color Grading', desc: 'Cinematic looks, color theory, and professional grading tools.' },
              { icon: 'graphic_eq', title: 'Audio Mastery', desc: 'Mixing, sound design, and creating immersive audio landscapes.' },
              { icon: 'campaign', title: 'Social Media', desc: 'Optimizing content for Reels, TikTok, and YouTube growth.' },
              { icon: 'auto_awesome', title: 'VFX Fundamentals', desc: 'Green screen, tracking, and compositing techniques.' },
            ].map((s, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all border border-transparent">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
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
          <h2 className="headline text-3xl md:text-4xl font-bold mb-12">Professional Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Logic Pro', 'Audition'].map((tool, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-surface-container-highest/50 border border-outline-variant/20 text-sm font-bold hover:border-primary/40 transition-all cursor-default">{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;
