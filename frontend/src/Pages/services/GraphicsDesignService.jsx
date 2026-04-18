import React from 'react';
import { Link } from 'react-router-dom';

const GraphicsDesignService = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-16 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-tertiary/15 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
                        <span className="material-symbols-outlined">arrow_back</span> Back to Home
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-tertiary text-sm animate-pulse flex">auto_awesome</span>
                                <span className="text-xs font-label uppercase tracking-[0.25em] text-on-surface-variant font-black">Creative Agency</span>
                            </div>
                            <h3 className="headline text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight">
                                Design That <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-pink-400">Commands Attention</span>
                            </h3>
                            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                                We don't just make things look pretty; we engineer visual psychology. Elevate your brand with award-winning visual identities, immersive UI/UX, and marketing collateral that drives undeniable conversion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <a href="/#contact" className="px-8 py-4 bg-gradient-to-r from-tertiary to-pink-500 hover:from-tertiary-light hover:to-pink-400 text-white font-black rounded-full shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:-translate-y-1 transition-all duration-300 text-lg inline-block text-center">
                                    Elevate Your Brand
                                </a>
                                <button className="px-8 py-4 border border-outline-variant/30 hover:border-tertiary/50 hover:bg-surface-bright/5 text-on-surface font-bold rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2">
                                    View Lookbook <span className="material-symbols-outlined text-xl">palette</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative group perspective-1000 hidden lg:block">
                            {/* Abstract 3D shape simulation / Design Moodboard */}
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                {/* Background blob */}
                                <div className="absolute inset-4 rounded-[4rem] bg-gradient-to-tr from-tertiary/40 via-purple-500/20 to-secondary/30 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>

                                {/* Main Design Canvas */}
                                <div className="absolute inset-0 bg-surface-container/80 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden shadow-tertiary/10 transform transition-transform duration-700 group-hover:rotate-y-[5deg] group-hover:scale-105">
                                    {/* Grid lines */}
                                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                                    <div className="p-8 h-full relative z-10 flex flex-col">
                                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                            <div className="flex gap-2">
                                                <div className="w-4 h-4 rounded-full bg-red-400"></div>
                                                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                                                <div className="w-4 h-4 rounded-full bg-green-400"></div>
                                            </div>
                                            <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">Brand_Guidelines.fig</span>
                                        </div>

                                        {/* Color Palette Display */}
                                        <div className="flex gap-4 mb-8">
                                            <div className="w-16 h-16 rounded-full bg-tertiary shadow-lg relative group/color"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/color:opacity-100 bg-black/50 px-2 rounded backdrop-blur transition-opacity">Primary</div></div>
                                            <div className="w-16 h-16 rounded-full bg-pink-500 shadow-lg relative group/color"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/color:opacity-100 bg-black/50 px-2 rounded backdrop-blur transition-opacity">Accent 1</div></div>
                                            <div className="w-16 h-16 rounded-full bg-amber-400 shadow-lg relative group/color"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/color:opacity-100 bg-black/50 px-2 rounded backdrop-blur transition-opacity">Accent 2</div></div>
                                            <div className="w-16 h-16 rounded-full bg-slate-900 shadow-lg border border-white/20 relative group/color"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover/color:opacity-100 bg-black/50 px-2 rounded backdrop-blur transition-opacity">Surface</div></div>
                                        </div>

                                        {/* Typography Display */}
                                        <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col gap-4 justify-center">
                                            <div className="text-4xl font-['Space_Grotesk'] font-black text-white">Aa</div>
                                            <div className="text-sm text-slate-400 font-body">
                                                <span className="text-tertiary font-bold">Headline:</span> Space Grotesk Bold<br /><br />
                                                <span className="text-tertiary font-bold">Body:</span> Custom Inter Sans-Serif<br />
                                                Used for optimal readability and high-end aesthetic presentation.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Cursor Simulation */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-1000 ease-in-out">
                                    <span className="material-symbols-outlined text-4xl text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_selector_tool</span>
                                    <div className="bg-pink-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded ml-4 shadow-lg shrink-0 w-24 text-center">Pixel Perfect</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="py-20 md:py-32 bg-surface-container-low relative">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm mb-4">Complete Creative Mastery</h2>
                        <h3 className="headline text-4xl md:text-5xl font-bold mb-6">Our Design Portfolio</h3>
                        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">From the foundational logo to complex digital interfaces, we provide cohesive visual treatments that secure trust and eliminate friction.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'branding_watermark',
                                title: 'Corporate Brand Kits',
                                desc: 'We don\'t just design logos; we create comprehensive brand ecosystems. This includes typography selection, color psychology profiles, tone of voice, and thorough usage guidelines to ensure absolute consistency.',
                                color: 'text-tertiary',
                                bg: 'bg-tertiary/10',
                                border: 'border-tertiary/30'
                            },
                            {
                                icon: 'layers',
                                title: 'UI/UX Interface Design',
                                desc: 'User-centric wireframes and high-fidelity interactive prototypes for web and mobile applications. We utilize rigorous A/B testing logic to design funnels that maximize your conversion rates.',
                                color: 'text-secondary',
                                bg: 'bg-secondary/10',
                                border: 'border-secondary/30'
                            },
                            {
                                icon: 'view_in_ar',
                                title: '3D & Motion Graphics',
                                desc: 'Capture user interaction immediately with lightweight, stunning 3D elements and micro-animations seamlessly integrated into your websites using Spline, Three.js, and Framer Motion.',
                                color: 'text-primary',
                                bg: 'bg-primary/10',
                                border: 'border-primary/30'
                            },
                            {
                                icon: 'web',
                                title: 'No-Code Landing Pages',
                                desc: 'Rapid deployment of visually explosive, high-converting marketing pages using Webflow or Framer, allowing your marketing teams to iterate quickly without needing backend developers.',
                                color: 'text-emerald-400',
                                bg: 'bg-emerald-400/10',
                                border: 'border-emerald-400/30'
                            },
                            {
                                icon: 'campaign',
                                title: 'Ad & Social Collateral',
                                desc: 'Scroll-stopping graphics engineered specifically for Instagram, LinkedIn, and Facebook ads. We design visual hooks proven to dramatically lower your Cost Per Acquisition (CPA).',
                                color: 'text-pink-400',
                                bg: 'bg-pink-400/10',
                                border: 'border-pink-400/30'
                            },
                            {
                                icon: 'draw',
                                title: 'Custom Illustrations',
                                desc: 'Ditch the generic stock imagery. Our illustrators craft bespoke vector artwork that gives your application or presentation an unforgettable, highly original character.',
                                color: 'text-amber-400',
                                bg: 'bg-amber-400/10',
                                border: 'border-amber-400/30'
                            }
                        ].map((service, i) => (
                            <div key={i} className={`glass-card p-8 rounded-[2.5rem] border-t-2 ${service.border} group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${service.bg}`}>
                                    <span className={`material-symbols-outlined text-3xl ${service.color}`}>{service.icon}</span>
                                </div>
                                <h3 className="headline text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                <p className="text-on-surface-variant text-base leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Design Process */}
            <section className="py-20 md:py-32 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
                    <h2 className="headline text-4xl md:text-5xl font-bold mb-16">The Anatomy of Great Design</h2>

                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[50%] left-10 right-10 h-[1px] bg-white/20 z-0 border-dashed border-b border-white/20"></div>

                        {[
                            { step: '01', title: 'Discovery', desc: 'Understanding your market, target audience, and current analytic bottlenecks.' },
                            { step: '02', title: 'Wireframing', desc: 'Mapping the skeletal structure and user journey without visual distractions.' },
                            { step: '03', title: 'Visuals', desc: 'Applying color theory, typography, and high-fidelity polish.' },
                            { step: '04', title: 'Handoff', desc: 'Delivering pixel-perfect, developer-ready assets via Figma.' }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 relative z-10 glass-card p-6 rounded-3xl bg-surface-container border border-white/5 group hover:bg-surface-container-highest transition-colors">
                                <div className="w-12 h-12 bg-slate-900 border border-white/10 text-tertiary font-black flex items-center justify-center rounded-full mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-16 bg-surface-container-lowest">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Powered by Industry Standards</div>
                    <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        {['Figma', 'Adobe Photoshop', 'Illustrator', 'After Effects', 'Spline 3D', 'Webflow', 'Framer Cortex'].map((tool, i) => (
                            <span key={i} className="text-lg md:text-xl font-black text-white">{tool}</span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GraphicsDesignService;
