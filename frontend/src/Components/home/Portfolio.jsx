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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">FinTech</span>
                            <h3 className="headline text-3xl font-bold mb-4">Aether Finance</h3>
                            <p className="text-on-surface-variant mb-6">High-frequency trading platform with sub-millisecond latency.</p>
                            <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
                                <span className="material-symbols-outlined">north_east</span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-[3rem] aspect-[4/3] glass-card mt-12">
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt="Futuristic mobile app UI design on a smartphone mockup showcasing a clean health tracking interface with glassmorphic elements"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX7KX48UhYwmZoOO7d8pmMa1XoE1GUajN4egA_TvMy5C5HQV-g6DflvmOcDW7XA1FjRDBhGOSYyo2wIFZKQUzdQoD2-i_m40FO8OOtPqtcYaKEii_QJNtpd_ZleR5bMemv38W7gQXKZv2U4VoDeh1sZoMt4Mrpeb4qFWYUXxhbGURP0_x3iQP_3uwkBG6Da02PhNYSE2qvqwFntV04MB8Mrj0Syn5ADYEDy31gw9NfXiRDpXh-xCAJfZMbzeRW37OHodnZiK7tWMJB"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">HealthTech</span>
                            <h3 className="headline text-3xl font-bold mb-4">Pulse Guard</h3>
                            <p className="text-on-surface-variant mb-6">AI-driven predictive health monitoring for athletes.</p>
                            <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
                                <span className="material-symbols-outlined">north_east</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
