import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-slate-950">
            <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 font-['Manrope'] text-sm">
                <div className="space-y-6">
                    <div className="text-3xl font-black text-amber-500">Timir Tech</div>
                    <p className="text-slate-500 leading-relaxed max-w-xs">Pioneering technical solutions for the digital age. We build with precision and scale with vision.</p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-amber-500 transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg">public</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-amber-500 transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg">groups</span>
                        </a>
                    </div>
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
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#">Terms of Service</a></li>
                            <li><a className="text-slate-500 hover:text-amber-500 transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="font-bold text-white uppercase tracking-widest text-xs">Connect</div>
                    <div className="space-y-3">
                        <a className="block text-slate-500 hover:text-amber-500 transition-colors" href="#">LinkedIn</a>
                        <a className="block text-slate-500 hover:text-amber-500 transition-colors" href="#">Twitter</a>
                        <a className="block text-slate-500 hover:text-amber-500 transition-colors" href="#">GitHub</a>
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
            <div className="max-w-7xl mx-auto px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
                <div>© 2024 Timir Tech. All rights reserved.</div>
                <div className="flex gap-8">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Systems Operational
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
