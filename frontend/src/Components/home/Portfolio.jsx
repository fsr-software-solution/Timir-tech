import React from 'react';

const Portfolio = () => {
    return (
        <section className="py-16 md:py-32 bg-surface-container-low" id="portfolio">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="headline text-4xl md:text-6xl font-bold mb-4">Our Artifacts</h2>
                        <p className="text-on-surface-variant max-w-xl">A selection of technical marvels we've built for industry leaders.</p>
                    </div>
                    <button className="px-8 py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">View All Work</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/3] glass-card">
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt="Sleek dark mode dashboard interface on a laptop screen with orange accents and complex data visualizations"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaOWDKedLhcTdcfBmjJDjMTRHhlDrrdbfxllG2cQ_QcACzvtptMdJZi-IfyZ6S9Kifv8f5_vu_IelWxuD2QFzAmqVJvNpKiXpvpks3R0-cv1w8FX8AFBhVMDA52gUCoHzSnQ1ExW1kftcpe402FBgJo1fZB1lc7qAigQs2WPqm2lLK9xxvxJXGa6JvPYJz8Hcobp7nvbbnQmWHzMsDB4dwEzmZ1TXCC5V_DgzxyyM5Brg4FW5-rB6BINCcrxDO01HZYxnHaQRD1O08"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Frelancer Hub</span>
                            <h3 className="headline text-3xl font-bold mb-4">Frelancer Hub</h3>
                            <p className="text-on-surface-variant mb-6">A platform for fre  elancers to connect with clients and showcase their work.</p>
                            <div className="flex gap-4 items-center mt-2 relative z-20">
                                <a href="https://ethiopian-job-service.vercel.app/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-primary/30 flex justify-center items-center text-primary bg-surface-container hover:bg-primary hover:text-on-primary transition-all cursor-pointer" aria-label="Live Preview" title="Live Preview">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                                <a href="https://github.com/timir-tech/frelancer-hub" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-primary/30 flex justify-center items-center text-primary bg-surface-container hover:bg-primary hover:text-on-primary transition-all cursor-pointer" aria-label="View Source on GitHub" title="View Source on GitHub">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48C19.14 20.16 22 16.42 22 12c0-5.53-4.47-10-10-10z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/3] glass-card mt-12">
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt="Futuristic mobile app UI design on a smartphone mockup showcasing a clean health tracking interface with glassmorphic elements"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX7KX48UhYwmZoOO7d8pmMa1XoE1GUajN4egA_TvMy5C5HQV-g6DflvmOcDW7XA1FjRDBhGOSYyo2wIFZKQUzdQoD2-i_m40FO8OOtPqtcYaKEii_QJNtpd_ZleR5bMemv38W7gQXKZv2U4VoDeh1sZoMt4Mrpeb4qFWYUXxhbGURP0_x3iQP_3uwkBG6Da02PhNYSE2qvqwFntV04MB8Mrj0Syn5ADYEDy31gw9NfXiRDpXh-xCAJfZMbzeRW37OHodnZiK7tWMJB"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Edu Tech</span>
                            <h3 className="headline text-3xl font-bold mb-4">ethio student assistant</h3>
                            <p className="text-on-surface-variant mb-6">AI-powered learning platform for students. based on ethiopian curriculum.   </p>
                            <div className="flex gap-4 items-center mt-2 relative z-20">
                                <a href="https://ethio-student-assistant.vercel.app/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-primary/30 flex justify-center items-center text-primary bg-surface-container hover:bg-primary hover:text-on-primary transition-all cursor-pointer" aria-label="Live Preview" title="Live Preview">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                                <a href="https://github.com/timir-tech/ethio-student-assistant" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-primary/30 flex justify-center items-center text-primary bg-surface-container hover:bg-primary hover:text-on-primary transition-all cursor-pointer" aria-label="View Source on GitHub" title="View Source on GitHub">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48C19.14 20.16 22 16.42 22 12c0-5.53-4.47-10-10-10z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
