import React from 'react';

const About = () => {
    return (
        <section className="py-16 md:py-32 bg-surface-container-low relative" id="about">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl"></div>
                        <h2 className="headline text-4xl md:text-6xl font-bold mb-8">Redefining Tech <br /><span className="text-on-surface-variant/50">Boundaries</span></h2>
                        <p className="text-lg text-on-surface-variant mb-12 leading-loose">
                            Timir Tech isn't just a software house. We are a collective of visionaries, engineers, and designers dedicated to crafting the next generation of digital infrastructure.
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <div className="p-6 rounded-3xl bg-surface-container-highest/40 border border-outline-variant/20">
                                <div className="text-4xl font-headline font-bold text-primary mb-2">150+</div>
                                <div className="text-xs font-label uppercase tracking-widest opacity-60">Projects</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-surface-container-highest/40 border border-outline-variant/20">
                                <div className="text-4xl font-headline font-bold text-primary mb-2">85+</div>
                                <div className="text-xs font-label uppercase tracking-widest opacity-60">Clients</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-surface-container-highest/40 border border-outline-variant/20">
                                <div className="text-4xl font-headline font-bold text-primary mb-2">40+</div>
                                <div className="text-xs font-label uppercase tracking-widest opacity-60">Experts</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[4rem] overflow-hidden glass-card p-1">
                            <img
                                className="w-full h-full object-cover rounded-[3.8rem]"
                                alt="High-tech server room with glowing orange LEDs and futuristic data center architecture"
                                src="https://th.bing.com/th/id/OIP.nNnu7QkIwwu2YlIkhTwVDAHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl max-w-xs border-primary/20 border">
                            <div className="flex gap-2 mb-4">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Quality First</span>
                            </div>
                            <p className="text-sm text-on-surface-variant">Every line of code we write is a commitment to excellence and scalability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
