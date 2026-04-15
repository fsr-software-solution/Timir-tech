import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="py-12 sm:py-16 md:py-32 relative overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="text-center mb-16 sm:mb-24 px-2">
                    <h3 className="headline text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Ecosystem</h3>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">From conceptual architecture to deployment, we provide end-to-end technical mastery.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">code</span>
                        </div>
                        <h3 className="headline text-2xl font-bold mb-4">Web Dev</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">Next-gen web applications built with React, Vue, and high-performance backends.</p>
                        <Link className="inline-flex items-center gap-2 text-primary font-bold group/link" to="/services/fullstack-web-development">
                            Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">smartphone</span>
                        </div>
                        <h3 className="headline text-2xl font-bold mb-4">Mobile App</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">Native and cross-platform mobile solutions that redefine user engagement.</p>
                        <Link className="inline-flex items-center gap-2 text-primary font-bold group/link" to="/services/mobile-app-development">
                            Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                        </div>
                        <h3 className="headline text-2xl font-bold mb-4">Product Dev</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">Accelerating your MVP from napkin sketch to market-ready product.</p>
                        <Link className="inline-flex items-center gap-2 text-primary font-bold group/link" to="/services/software-development">
                            Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">school</span>
                        </div>
                        <h3 className="headline text-2xl font-bold mb-4">Bootcamp</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">Intensive training programs for the next generation of technical leaders.</p>
                        <Link className="inline-flex items-center gap-2 text-primary font-bold group/link" to="/services/learning-bootcamp">
                            Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">design_services</span>
                        </div>
                        <h3 className="headline text-2xl font-bold mb-4">Creative Studio</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">High-end UI/UX, motion graphics, and cinematic video production.</p>
                        <Link className="inline-flex items-center gap-2 text-primary font-bold group/link" to="/services/graphics-design">
                            Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">shield_lock</span>
                        </div>
                        <h3 className="headline text-2xl font-bold mb-4">Cyber Security</h3>
                        <p className="text-on-surface-variant leading-relaxed mb-6">Fortifying your digital assets with advanced encryption and protocols.</p>
                        <Link className="inline-flex items-center gap-2 text-primary font-bold group/link" to="/services/cyber-security">
                            Learn More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
