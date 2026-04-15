import React from 'react';
import { Link } from 'react-router-dom';

const VideoEditingService = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-16 md:py-32 overflow-hidden border-b border-white/5 bg-slate-950">
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold">
                        <span className="material-symbols-outlined">arrow_back</span> Back to Home
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-outline-variant/30 mb-8 shadow-inner">
                                <span className="material-symbols-outlined text-red-500 text-sm animate-pulse flex">movie_creation</span>
                                <span className="text-xs font-label uppercase tracking-[0.25em] text-on-surface-variant font-black">Post Production Studio</span>
                            </div>
                            <h3 className="headline text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight">
                                Cinematic <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Visual Storytelling</span>
                            </h3>
                            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                                We transform raw footage  videos and photos into captivating narratives that demand attention. From high-retention social media edits to premium corporate documentaries and intricate motion graphics, we control the timeline.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-l-4 border-red-500 pl-6 mb-10 py-2">
                                <div className="text-slate-300 italic text-lg max-w-md">
                                    "Timir Tech's editing dramatically increased our viewer retention by 45% within the first month."
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="/#contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg inline-block text-center">
                                    contact Our Editors
                                </a>
                            </div>
                        </div>
                        <div className="relative group perspective-1000">
                            {/* Video Player UI Mockup */}
                            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden glass-card shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 group bg-black transform hover:rotate-y-[-5deg] transition-transform duration-700">
                                {/* Faux Background Image / Blur */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800"></div>

                                {/* Central Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-24 h-24 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)] cursor-pointer group-hover:scale-110 transition-transform duration-300 border border-white/20">
                                        <span className="material-symbols-outlined text-5xl text-white ml-2">play_arrow</span>
                                    </div>
                                </div>

                                {/* Player Controls (Bottom) */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10 flex flex-col gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {/* Timeline bar */}
                                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden relative cursor-pointer">
                                        <div className="absolute top-0 left-0 h-full w-1/3 bg-red-600 rounded-full relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                                        </div>
                                    </div>

                                    {/* Control icons */}
                                    <div className="flex justify-between items-center px-2">
                                        <div className="flex items-center gap-4 text-white">
                                            <span className="material-symbols-outlined text-sm hover:text-red-400 cursor-pointer">pause</span>
                                            <span className="material-symbols-outlined text-sm hover:text-red-400 cursor-pointer">skip_next</span>
                                            <span className="material-symbols-outlined text-sm hover:text-red-400 cursor-pointer">volume_up</span>
                                            <span className="text-xs font-mono">02:14 / 10:45</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-white">
                                            <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">4K</span>
                                            <span className="material-symbols-outlined text-sm hover:text-red-400 cursor-pointer">settings</span>
                                            <span className="material-symbols-outlined text-sm hover:text-red-400 cursor-pointer">fullscreen</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Top indicators */}
                                <div className="absolute top-4 right-4 px-3 py-1 bg-red-600/20 backdrop-blur-xl rounded-md border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2 z-10">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    REC
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editing Capabilities */}
            <section className="py-20 md:py-32 bg-surface-container-low border-b border-white/5 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">Post-Production Services</h2>
                        <h3 className="headline text-4xl md:text-5xl font-bold mb-6">Editing for Every Platform</h3>
                        <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">We understand that a TikTok ,instagram,youtube,linkdin and other reel requires vastly different pacing than a corporate documentary. Our editors specialize in platform-specific narrative structures.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {[
                            {
                                icon: 'view_timeline',
                                title: 'High-Retention Social Media',
                                desc: 'Hyper-paced editing for YouTube Shorts, TikTok, and Instagram Reels. We utilize strategic jump cuts, B-roll overlays, kinetic typography, and sound effects designed specifically to defeat the swipe and maximize watch time.',
                                badge: 'Algorithm Optimized'
                            },
                            {
                                icon: 'corporate_fare',
                                title: 'Corporate & Brand Films',
                                desc: 'Sophisticated narrative editing for B2B communications, product launches, and internal training. We focus on clean pacing, immaculate audio mixing, and seamless transitions to present your brand with utmost authority.',
                                badge: 'Professional Polish'
                            },
                            {
                                icon: 'animation',
                                title: 'Advanced Motion Graphics',
                                desc: 'We don\'t just cut video; we build assets. Custom 2D/3D intros, lower thirds, tracking infographics, and explainer animations created in After Effects to visually communicate complex ideas effortlessly.',
                                badge: 'Visual Effects'
                            },
                            {
                                icon: 'palette',
                                title: 'Cinematic Color Grading',
                                desc: 'Transform flat, LOG-profile footage into a cinematic masterpiece. We utilize professional tools like DaVinci Resolve strictly for color correction, matching shots, and applying custom creative LUTs to establish mood.',
                                badge: 'Visual Tone'
                            }
                        ].map((service, i) => (
                            <div key={i} className="glass-card p-10 rounded-[3rem] border border-white/5 hover:border-red-500/30 transition-all duration-300 group bg-surface-container/60 hover:bg-surface-container">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-red-500 text-3xl">{service.icon}</span>
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 text-xs font-bold text-slate-300 rounded-lg whitespace-nowrap">{service.badge}</span>
                                </div>
                                <h3 className="headline text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                <p className="text-on-surface-variant text-base leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Timeline (Process) approach */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <h2 className="headline text-3xl md:text-5xl font-bold mb-16 text-center">Our Post-Production Workflow</h2>

                    <div className="relative">
                        {/* Visual Timeline Track */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-surface-container-highest rounded-full transform md:-translate-x-1/2">
                            {/* Progress fill */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500 via-amber-500 to-transparent"></div>
                        </div>

                        <div className="space-y-12 relative z-10">
                            {[
                                { step: '01', title: 'Asset Ingestion & Logging', desc: 'Securely transferring your raw footage, organizing bins, syncing multi-cam angles, and generating proxies for swift editing.', side: 'left' },
                                { step: '02', title: 'The Rough Cut', desc: 'Assembling the core narrative. We strip away the dead air and build the structural foundation of the story for your initial review.', side: 'right' },
                                { step: '03', title: 'Pacing & B-Roll', desc: 'Fleshing out the visuals. Adding contextual B-roll, refining the cuts to the beat of the music, and finalizing the narrative flow.', side: 'left' },
                                { step: '04', title: 'VFX, Color & Sound', desc: 'The finishing touches. Applying motion graphics, cinematic color grading, noise reduction, and a mastered audio mix.', side: 'right' },
                            ].map((item, i) => (
                                <div key={i} className={`flex flex-col md:flex-row items-center justify-center gap-8 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`md:w-1/2 flex ${item.side === 'left' ? 'justify-start md:justify-start' : 'justify-start md:justify-end'} pl-16 md:pl-0 relative w-full`}>
                                        {/* Mobile node indicator */}
                                        <div className="md:hidden absolute left-[22px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)] z-10"></div>

                                        <div className="glass-card p-6 rounded-3xl w-full max-w-md border border-white/5 hover:border-white/20 transition-colors">
                                            <span className="text-red-500 font-bold mb-2 block font-mono">TRACK {item.step}</span>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Desktop center node indicator */}
                                    <div className="hidden md:flex w-12 h-12 rounded-full bg-slate-900 border-4 border-red-500 items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)] z-10 shrink-0 relative">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>

                                    <div className="md:w-1/2 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoEditingService;
