import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-slate-950">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 font-['Manrope'] text-sm">
                <div className="space-y-6 px-2">
                    <div className="text-3xl font-black text-amber-500">Timir Tech</div>
                    <p className="text-slate-500 leading-relaxed max-w-xs">Pioneering technical solutions for the digital age. We build with precision and scale with vision.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="font-bold text-white uppercase tracking-widest text-xs">Navigation</div>
                        <ul className="space-y-3">
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#home">Home</a></li>
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#services">Services</a></li>
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#portfolio">Portfolio</a></li>
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#about">About</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="font-bold text-white uppercase tracking-widest text-xs">Legal</div>
                        <ul className="space-y-3">
                            <li><Link className="text-slate-500 hover:text-amber-500 transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="text-slate-500 hover:text-amber-500 transition-colors" to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link className="text-slate-500 hover:text-amber-500 transition-colors" to="/cookie-policy">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="font-bold text-white uppercase tracking-widest text-xs">Connect</div>
                    <div className="space-y-4">
                        <a className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            <span>LinkedIn</span>
                        </a>
                        <a className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors" href="https://t.me/" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.16L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.7l-4.14-3.04-2 1.93c-.22.22-.41.4-.84.4z" /></svg>
                            <span>Telegram</span>
                        </a>
                        <a className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors" href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                    <div className="pt-6">
                        <div className="text-slate-500 mb-2">Subscribe to our newsletter</div>
                        <div className="flex">
                            <input className="bg-surface-container-highest border-none rounded-l-xl px-4 py-3 focus:ring-1 focus:ring-primary w-full text-white" placeholder="Email address" type="email" />
                            <button className="bg-primary text-on-primary px-4 py-3 rounded-r-xl font-bold">Join</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
                <div>© 2024 Timir Tech. All rights reserved.</div>
                <div className="flex gap-8">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Systems Operational
                    </span>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
