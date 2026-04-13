import React from 'react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
    return (
        <div className="min-h-screen pt-20 bg-surface">
            {/* Hero */}
            <section className="relative py-16 md:py-32 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-error/5 blur-[150px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link to="/services/learning-bootcamp" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
                        <span className="material-symbols-outlined">arrow_back</span> Back to Bootcamps
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error/10 border border-error/20 mb-6">
                                <span className="material-symbols-outlined text-error text-sm">shield_lock</span>
                                <span className="text-xs font-label uppercase tracking-[0.2em] text-error">Elite Defense Training</span>
                            </div>
                            <h1 className="headline text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight px-2">
                                Ethical Hacking & <span className="text-gradient-error">Cyber Security</span>
                            </h1>
                            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                                Learn to think like a hacker to protect organizations. From network security to advanced penetration testing, master the tools and techniques used by industry experts.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-gradient-to-br from-error to-error-container text-on-error font-bold rounded-full shadow-2xl shadow-error/20 hover:scale-105 transition-transform">
                                    Join the Mission
                                </button>
                                <button className="px-8 py-4 border border-outline-variant/30 hover:bg-surface-bright/10 text-on-surface font-bold rounded-full transition-all">
                                    Lab Access Info
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-card rounded-[3rem] p-8 border-error/20 bg-surface-container-highest/20 backdrop-blur-3xl animate-pulse">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-error/20 rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-error">security_update_good</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-on-surface">System Status</div>
                                        <div className="text-sm text-error font-mono">ENCRYPTED // SECURE</div>
                                    </div>
                                </div>
                                <div className="space-y-4 font-mono text-xs">
                                    <div className="p-3 rounded-xl bg-error/5 border border-error/10 flex justify-between">
                                        <span>Vulnerability Scan</span>
                                        <span className="text-success">CLEAN</span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-error/5 border border-error/10 flex justify-between">
                                        <span>Intrusion Detection</span>
                                        <span className="text-success">ACTIVE</span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-error/5 border border-error/10 flex justify-between">
                                        <span>Firewall Status</span>
                                        <span className="text-success">OPTIMAL</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Shield */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-error/10 rounded-full blur-2xl animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-16 md:py-24 bg-surface-container-low/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'lan', title: 'Network Security', desc: 'Master TCP/IP, DNS security, firewalls, and VPN architectures.' },
                            { icon: 'psychology', title: 'Ethical Hacking', desc: 'Vulnerability assessment, penetration testing, and exploit development.' },
                            { icon: 'gavel', title: 'Incident Response', desc: 'Digital forensics, malware analysis, and crisis management.' },
                        ].map((f, i) => (
                            <div key={i} className="glass-card p-8 rounded-3xl border-error/10 hover:border-error/40 transition-all group">
                                <div className="w-14 h-14 bg-error/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-error/20 transition-colors">
                                    <span className="material-symbols-outlined text-error text-2xl">{f.icon}</span>
                                </div>
                                <h3 className="headline text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lab Environment */}
            <section className="py-16 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="relative glass-card rounded-[2rem] sm:rounded-[4rem] p-6 sm:p-12 border-primary/20 bg-gradient-to-tr from-surface to-primary/5">
                        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
                            <div className="flex-1">
                                <h2 className="headline text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Hands-On <span className="text-primary">Virtual Labs</span></h2>
                                <p className="text-lg text-on-surface-variant mb-8">
                                    Get access to our specialized cloud-based practice labs. Real-world scenarios, simulated attacks, and capture-the-flag competitions to sharpen your skills.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-12 h-12 rounded-full border-4 border-surface bg-surface-container-highest overflow-hidden">
                                                <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Student" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-bold">200+ Active Students</div>
                                        <div className="text-primary font-bold">Practicing right now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square glass-card rounded-[3rem] border-error/20 flex flex-col items-center justify-center gap-4 text-center p-8">
                                <span className="material-symbols-outlined text-error text-6xl animate-pulse">radar</span>
                                <div className="text-2xl font-bold">Live Threat Map</div>
                                <div className="text-xs opacity-60 font-mono">TRACKING 42 GLOBAL INCIDENTS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CyberSecurity;
