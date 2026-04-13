import React from 'react';

const Features = () => {
    return (
        <section className="py-16 md:py-32 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full"></div>
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="headline text-4xl md:text-5xl font-bold mb-8">Why Innovators <br /><span className="text-gradient">Choose Us</span></h2>
                        <p className="text-on-surface-variant leading-relaxed">We don't just follow trends; we set the technical standards that define them.</p>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl border border-outline-variant/20 hover:bg-surface-container-highest/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                            <h4 className="headline text-xl font-bold mb-2">Extreme Velocity</h4>
                            <p className="text-on-surface-variant text-sm">We ship production-ready features faster than standard agency timelines.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-outline-variant/20 hover:bg-surface-container-highest/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
                            <h4 className="headline text-xl font-bold mb-2">Infinite Scalability</h4>
                            <p className="text-on-surface-variant text-sm">Our architectures are built to handle millions of concurrent users effortlessly.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-outline-variant/20 hover:bg-surface-container-highest/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            <h4 className="headline text-xl font-bold mb-2">Bulletproof Security</h4>
                            <p className="text-on-surface-variant text-sm">Security is baked into every layer of our development lifecycle.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-outline-variant/20 hover:bg-surface-container-highest/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                            <h4 className="headline text-xl font-bold mb-2">Design Driven</h4>
                            <p className="text-on-surface-variant text-sm">We believe aesthetic excellence is just as important as technical precision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
