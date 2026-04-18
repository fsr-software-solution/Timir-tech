import React from 'react';
import { Link } from 'react-router-dom';

const MobileDevelopmentService = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-16 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/15 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
                        <span className="material-symbols-outlined">arrow_back</span> Back to Home
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-secondary text-sm animate-pulse flex">smartphone</span>
                                <span className="text-xs font-label uppercase tracking-[0.25em] text-on-surface-variant font-black">Mobile Innovation</span>
                            </div>
                            <h3 className="headline text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight">
                                Crafting <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Award-Winning</span> Mobile Apps
                            </h3>
                            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                                Capture the global mobile market with lightning-fast, visually stunning iOS and Android applications. We transform your revolutionary ideas into top-charting, high-retention mobile applications and make them accessible worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <a href="/#contact" className="px-8 py-4 bg-secondary hover:bg-secondary-light text-secondary-container-foreground font-black rounded-full shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 text-lg border border-secondary inline-block text-center">
                                    Discuss Your App Idea
                                </a>

                            </div>
                        </div>
                        <div className="relative flex justify-center lg:justify-end perspective-1000">
                            {/* 3D Mobile Mockup */}
                            <div className="relative w-56 md:w-72 aspect-[1/2.1] rounded-[3rem] border-[10px] sm:border-[14px] border-slate-900 bg-black shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden transform group-hover:rotate-y-[15deg] transition-all duration-1000 -rotate-3 hover:translate-y-[-20px] ring-1 ring-white/10">
                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-0 inset-x-0 h-7 bg-slate-900 rounded-b-3xl w-1/2 mx-auto z-30"></div>

                                {/* Screen Content UI */}
                                <div className="w-full h-full relative z-10 bg-surface-container overflow-hidden flex flex-col">
                                    {/* Header */}
                                    <div className="bg-gradient-to-br from-secondary/40 to-primary/20 h-48 w-full p-6 pt-12 rounded-b-[2rem] relative z-0">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md"></div>
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"><span className="material-symbols-outlined text-white text-sm">notifications</span></div>
                                        </div>
                                        <h3 className="text-white font-bold text-xl leading-tight">Total Balance</h3>
                                        <div className="text-white font-black text-3xl tracking-tight">$24,592.00</div>
                                    </div>
                                    {/* Cards */}
                                    <div className="flex-1 px-5 -mt-6 relative z-10 pb-6 overflow-hidden">
                                        <div className="w-full bg-surface-container-highest rounded-2xl p-4 shadow-xl border border-white/5 mb-4 backdrop-blur-3xl transform hover:scale-105 transition-transform duration-300">
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"><span className="material-symbols-outlined text-blue-400 text-sm">payments</span></div>
                                                <div className="text-xs font-bold text-success">+ $1,200</div>
                                            </div>
                                            <div className="w-2/3 h-2 bg-white/10 rounded-full mb-2"></div>
                                            <div className="w-1/3 h-2 bg-white/5 rounded-full"></div>
                                        </div>
                                        <div className="w-full bg-surface-container-highest rounded-2xl p-4 shadow-xl border border-white/5 mb-4 backdrop-blur-3xl opacity-80">
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center"><span className="material-symbols-outlined text-red-400 text-sm">shopping_cart</span></div>
                                                <div className="text-xs font-bold text-red-400">- $450</div>
                                            </div>
                                            <div className="w-3/4 h-2 bg-white/10 rounded-full mb-2"></div>
                                            <div className="w-1/2 h-2 bg-white/5 rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Bottom Nav */}
                                    <div className="h-16 border-t border-white/10 flex justify-around items-center px-4 bg-surface-container-highest">
                                        <span className="material-symbols-outlined text-secondary">home</span>
                                        <span className="material-symbols-outlined text-slate-500">search</span>
                                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center -translate-y-4 shadow-lg shadow-secondary/40"><span className="material-symbols-outlined">add</span></div>
                                        <span className="material-symbols-outlined text-slate-500">pie_chart</span>
                                        <span className="material-symbols-outlined text-slate-500">person</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute top-1/4 -left-8 sm:-left-12 glass-card p-3 rounded-2xl border border-white/10 shadow-2xl bg-surface-container/90 backdrop-blur-xl animate-float" style={{ animationDelay: '0.5s' }}>
                                <div className="flex items-center gap-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-6 h-6 filter invert" alt="iOS" />
                                    <div className="text-xs font-bold text-white uppercase tracking-wider pr-2">iOS Native</div>
                                </div>
                            </div>
                            <div className="absolute bottom-1/4 -right-8 sm:-right-8 glass-card p-3 rounded-2xl border border-white/10 shadow-2xl bg-surface-container/90 backdrop-blur-xl animate-float flex flex-col gap-1 items-center" style={{ animationDelay: '1s' }}>
                                <span className="text-xl font-black text-white px-2">4.9★</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">App Store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Services */}
            <section className="py-20 md:py-32 bg-surface-container-low border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4">Mastering Mobility</h2>
                        <h3 className="headline text-4xl md:text-5xl font-bold mb-6">Mobile App Expertise</h3>
                        <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">Whether you need raw hardware performance or blazing-fast cross-platform deployment, our engineering team selects the perfect tech stack for your business constraints.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Native Dev */}
                        <div className="glass-card p-10 rounded-[3rem] border border-white/5 hover:border-secondary/30 transition-colors bg-gradient-to-br from-surface-container-highest to-surface-container relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-150 transition-transform duration-700 pointer-events-none">
                                <span className="material-symbols-outlined text-[15rem] text-secondary">memory</span>
                            </div>
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 border border-secondary/20">
                                <span className="material-symbols-outlined text-secondary text-3xl">developer_board</span>
                            </div>
                            <h3 className="headline text-3xl font-bold mb-6 text-white">Native App Development</h3>
                            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                                When uncompromising performance, fluid 120fps animations, and deep hardware integration (like AR, Bluetooth, or complex camera usage) are non-negotiable. We write clean, architecture-driven Swift for iOS and Kotlin for Android.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white text-sm font-bold"><span className="material-symbols-outlined text-secondary">done</span> Swift & SwiftUI for iOS Ecosystems</li>
                                <li className="flex items-center gap-4 text-white text-sm font-bold"><span className="material-symbols-outlined text-secondary">done</span> Kotlin & Jetpack Compose for Android</li>
                                <li className="flex items-center gap-4 text-white text-sm font-bold"><span className="material-symbols-outlined text-secondary">done</span> Intensive Hardware/IoT Integration</li>
                            </ul>
                        </div>

                        {/* Cross Platform */}
                        <div className="glass-card p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-colors bg-gradient-to-br from-surface-container-highest to-surface-container relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-150 transition-transform duration-700 pointer-events-none">
                                <span className="material-symbols-outlined text-[15rem] text-blue-500">flutter_dash</span>
                            </div>
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                                <span className="material-symbols-outlined text-blue-400 text-3xl">api</span>
                            </div>
                            <h3 className="headline text-3xl font-bold mb-6 text-white">Hybrid & Cross-Platform</h3>
                            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                                Maximize your ROI by reaching both App Store and Play Store users simultaneously. We leverage leading frameworks to deliver a near-native feel while cutting development time and maintenance costs by up to 40%.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-white text-sm font-bold"><span className="material-symbols-outlined text-blue-400">done</span> React Native for robust JavaScript ecosystems</li>
                                <li className="flex items-center gap-4 text-white text-sm font-bold"><span className="material-symbols-outlined text-blue-400">done</span> Flutter & Dart for stunning custom UI rendering</li>
                                <li className="flex items-center gap-4 text-white text-sm font-bold"><span className="material-symbols-outlined text-blue-400">done</span> Single codebase, dual-market dominance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The App Process */}
            <section className="py-20 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <h2 className="headline text-3xl md:text-5xl font-bold mb-16 text-center">App Store Success Process</h2>

                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6 relative">
                        <div className="hidden lg:block absolute top-[45%] left-0 right-0 h-1 bg-white/5 rounded-full z-0"></div>

                        {[
                            { icon: 'design_services', title: 'UX / UI Design', desc: 'Wireframing, interactive prototyping, and pixel-perfect interface design tailored for thumb-reachability and tactile engagement.' },
                            { icon: 'code_blocks', title: 'Robust Engineering', desc: 'Secure local databases, stateless API integrations, and scalable architecture implementation using modular code patterns.' },
                            { icon: 'bug_report', title: 'Quality Assurance', desc: 'Aggressive automated testing, memory leak profiling, and real-device matrix testing across dozens of screen resolutions.' },
                            { icon: 'rocket_launch', title: 'Store Deployment', desc: 'Managing the rigorous Apple App Store and Google Play review processes, ASO (App Store Optimization), and release.' },
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 glass-card p-8 rounded-[2rem] border border-white/5 bg-slate-900 shadow-2xl hover:-translate-y-4 transition-transform duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-transparent rounded-[1rem] flex items-center justify-center mb-6 border border-secondary/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                                    <span className="material-symbols-outlined text-secondary text-2xl">{step.icon}</span>
                                </div>
                                <div className="text-secondary font-black block mb-2 uppercase tracking-wider text-xs">Phase 0{i + 1}</div>
                                <h3 className="headline font-bold mb-4 text-xl text-white">{step.title}</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-secondary/5 border-t border-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
                    <h2 className="headline text-4xl md:text-5xl font-bold mb-6">Got a game-changing app idea?</h2>
                    <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">Most app ideas fail due to poor execution and clunky UX. Don't risk your vision on amateur developers. Let Timir Tech engineer your enterprise-grade product.</p>
                    <a href="/#contact" className="px-10 py-5 bg-secondary text-white text-lg font-black rounded-full shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:bg-white hover:text-black hover:scale-105 transition-all inline-block text-center">
                        Request Free App Estimate
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MobileDevelopmentService;
