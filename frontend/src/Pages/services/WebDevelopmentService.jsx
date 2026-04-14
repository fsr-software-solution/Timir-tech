import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopmentService = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-16 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute -left-[200px] bottom-0 w-[500px] h-[500px] bg-surface-container-highest/50 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
                        <span className="material-symbols-outlined">arrow_back</span> Back to Home
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-primary text-sm animate-pulse flex">language</span>
                                <span className="text-xs font-label uppercase tracking-[0.25em] text-on-surface-variant font-black">Enterprise Web Engineering</span>
                            </div>
                            <h1 className="headline text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                                Architecting <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">Digital Dominance</span>
                            </h1>
                            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                                We don't just build websites; we engineer highly scalable, fiercely secure, and blazing-fast web applications. Transform your boldest ideas into market-leading digital realities with our elite full-stack experts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <a href="/#contact" className="px-8 py-4 bg-primary hover:bg-primary-light text-on-primary font-bold rounded-full shadow-[0_0_30px_rgba(255,165,0,0.3)] hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] hover:-translate-y-1 transition-all duration-300 text-lg inline-block text-center">
                                    Start Your Web Project
                                </a>
                                <button className="px-8 py-4 border border-outline-variant/30 hover:border-primary/50 hover:bg-surface-bright/5 text-on-surface font-bold rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2">
                                    View Success Stories <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative group perspective-1000 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-[3rem] blur-3xl group-hover:blur-[60px] transition-all duration-700"></div>
                            <div className="relative glass-card rounded-[3rem] border border-white/10 p-8 h-[550px] flex flex-col transform group-hover:rotate-y-[5deg] group-hover:rotate-x-[5deg] transition-transform duration-700 shadow-2xl overflow-hidden bg-slate-950/80">
                                {/* Simulated IDE / Server Status block */}
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <div className="flex gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                                        <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                                        <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono">production-server.ts</span>
                                </div>
                                <pre className="text-secondary/90 font-mono text-sm leading-relaxed whitespace-pre-wrap overflow-hidden h-full relative">
                                    <span className="text-tertiary">import</span> {'{ Server }'} <span className="text-tertiary">from</span> <span className="text-amber-200">'@timir-tech/core'</span>;{'\n\n'}
                                    <span className="text-purple-400">const</span> app = <span className="text-tertiary">new</span> Server({'{'}{'\n'}
                                    {'  '}scalability: <span className="text-amber-200">'infinite'</span>,{'\n'}
                                    {'  '}security: <span className="text-amber-200">'military-grade'</span>,{'\n'}
                                    {'  '}performance: <span className="text-amber-500">100</span>, // Lighthouse score{'\n'}
                                    {'}'});{'\n\n'}
                                    <span className="text-slate-500">/* Initializing global deployment */</span>{'\n'}
                                    app.<span className="text-blue-400">deploy</span>().<span className="text-blue-400">then</span>(() {'=>'} {'{'}{'\n'}
                                    {'  '}console.<span className="text-blue-400">log</span>(<span className="text-amber-200">'Global scale achieved. 🚀'</span>);{'\n'}
                                    {'}'});

                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                                </pre>

                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-3xl border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-surface-container/90 backdrop-blur-xl animate-float">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                                            <span className="material-symbols-outlined text-green-500">speed</span>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-white leading-none">99.9%</div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Uptime SLA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Services Grid */}
            <section className="py-20 md:py-32 bg-surface-container-low border-b border-white/5 relative">
                <div className="absolute inset-0 bg-[url('https://ui5.sap.com/resources/sap/ui/documentation/sdk/images/pattern.png')] opacity-[0.02] mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Core Competencies</h2>
                        <h3 className="headline text-4xl md:text-5xl font-bold mb-6">Comprehensive Web Solutions</h3>
                        <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">From lightweight promotional sites to massive distributed e-commerce platforms, we have the architectural expertise to deliver uncompromised quality.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'web_asset',
                                title: 'Custom Web Apps',
                                desc: 'We map your unique business logic into beautifully designed, highly functional bespoke applications. Leave off-the-shelf limitations behind and own a platform tailored solely for you.',
                                tags: ['React', 'Vue', 'SPA/MPA']
                            },
                            {
                                icon: 'shopping_cart_checkout',
                                title: 'High-Volume E-Commerce',
                                desc: 'Digital storefronts engineered for maximum conversion, capable of handling flash sales and massive concurrent traffic without breaking a sweat. Secure, fast, and gorgeous.',
                                tags: ['Stripe', 'Headless Checkout', 'Inventory']
                            },
                            {
                                icon: 'corporate_fare',
                                title: 'Enterprise Portals',
                                desc: 'Secure internal tools, HR dashboards, and complex analytical portals that streamline your corporate operations and provide deep, encrypted data insights in real-time.',
                                tags: ['RBAC Security', 'Data Viz', 'SSO']
                            },
                            {
                                icon: 'integration_instructions',
                                title: 'API & Microservices',
                                desc: 'Decouple your monolith. We build robust, documented REST and GraphQL APIs that seamlessly connect your data to third-party services and mobile applications.',
                                tags: ['Node.js', 'GraphQL', 'Docker']
                            },
                            {
                                icon: 'cloud_sync',
                                title: 'SaaS Platforms',
                                desc: 'Launch your subscription-based software with multi-tenant architectures, tiered billing systems, and bulletproof user isolation out of the box.',
                                tags: ['Multi-tenant', 'Subscription Billing']
                            },
                            {
                                icon: 'rocket_launch',
                                title: 'Performance Optimization',
                                desc: 'We audit and refactor sluggish legacy applications, optimizing database queries, implementing edge caching, and shrinking bundles to achieve millisecond load times.',
                                tags: ['Redis Cache', 'CDN', 'Lighthouse 100']
                            },
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8 rounded-[2rem] group hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-primary/30 relative overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                    <span className="material-symbols-outlined text-8xl text-primary">{feature.icon}</span>
                                </div>
                                <div className="w-16 h-16 bg-gradient-to-br from-surface-container-highest to-surface-container rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,165,0,0.2)] transition-all duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="headline text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-on-surface-variant text-base leading-relaxed flex-grow mb-8">{feature.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {feature.tags.map((tag, j) => (
                                        <span key={j} className="text-xs font-bold text-slate-400 bg-black/40 px-3 py-1.5 rounded-md border border-white/5">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Matrix */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">The Armory</h2>
                    <h3 className="headline text-4xl md:text-5xl font-bold mb-16">Enterprise-Grade Technologies</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: 'React', icon: 'data_object' },
                            { name: 'Next.js', icon: 'dynamic_feed' },
                            { name: 'Node.js', icon: 'dns' },
                            { name: 'TypeScript', icon: 'code' },
                            { name: 'PostgreSQL', icon: 'database' },
                            { name: 'MongoDB', icon: 'storage' },
                            { name: 'Docker', icon: 'view_in_ar' },
                            { name: 'AWS Cloud', icon: 'cloud' },
                            { name: 'express', icon: 'speed' },
                            { name: 'GraphQL', icon: 'hub' },
                            { name: 'Tailwind CSS', icon: 'palette' },
                            { name: 'Figma', icon: 'design_services' },
                        ].map((tech, i) => (
                            <div key={i} className="glass-card py-6 px-4 rounded-2xl border border-white/5 hover:bg-primary/5 hover:border-primary/30 transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
                                <span className="material-symbols-outlined text-4xl text-slate-500 group-hover:text-primary transition-colors">{tech.icon}</span>
                                <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-20 md:py-32 bg-surface-container-low border-y border-white/5">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Methodology</h2>
                        <h3 className="headline text-4xl md:text-5xl font-bold">How We Forge Perfection</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { num: '01', title: 'Discovery & Blueprint', desc: 'We dive deep into your business goals, mapping out user journeys, database schemas, and system architecture blueprints before a single line of code is written.' },
                            { num: '02', title: 'UI/UX Design', desc: 'Our creative team designs high-fidelity, interactive prototypes, ensuring the user experience is intuitive, accessible, and aligned perfectly with your brand identity.' },
                            { num: '03', title: 'Agile Engineering', desc: 'Our full-stack engineers build your platform in swift, iterative sprints. You receive regular updates and working demos to stay perfectly in the loop.' },
                            { num: '04', title: 'QA & Deployment', desc: 'Rigorous automated and manual testing guarantees a bug-free launch. We set up CI/CD pipelines and scalable cloud infrastructure for a flawless go-live.' },
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                {/* Connecting line for desktop */}
                                {i < 3 && <div className="hidden md:block absolute top-[40px] left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0"></div>}

                                <div className="relative z-10 p-6 rounded-3xl bg-surface-container-highest border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(255,165,0,0.1)] transition-all h-full flex flex-col group">
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary/50 to-transparent mb-6 group-hover:scale-110 transition-transform origin-left">
                                        {step.num}
                                    </div>
                                    <h3 className="headline text-xl font-bold mb-4 text-white">{step.title}</h3>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & CTA */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
                <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
                    <h2 className="headline text-4xl md:text-6xl font-bold mb-8">Ready to dominate your market?</h2>
                    <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">Stop losing customers to slow, outdated digital experiences. Partner with Timir Tech and let us build the definitive platform your business deserves.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/#contact" className="px-10 py-5 bg-white text-black text-lg font-black rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all w-full sm:w-auto inline-block text-center">
                            Schedule Free Consultation
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm mt-8 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">lock</span> 100% Confidential. NDA available upon request.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentService;
