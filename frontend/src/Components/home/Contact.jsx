import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 md:py-32 relative overflow-hidden" id="contact">
            {/* Background Decorations */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-8 lg:sticky lg:top-32">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <span className="material-symbols-outlined text-primary text-sm">alternate_email</span>
                                <span className="text-xs font-label uppercase tracking-[0.2em] text-primary">Get in Touch</span>
                            </div>
                            <h2 className="headline text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Let's Build Your <br />
                                <span className="text-gradient">Digital Legacy</span>
                            </h2>
                            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                                Have a vision? We have the technical mastery to bring it to life. Reach out and let's start a conversation about your next big success.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: 'mail', label: 'Email Us', value: 'hello@timirtech.com', link: 'mailto:hello@timirtech.com' },
                                { icon: 'location_on', label: 'Visit Us', value: 'Technical Plaza, Suite 402', link: '#' },
                                { icon: 'call', label: 'Call Us', value: '+1 (555) 000-TECH', link: 'tel:+1555000TECH' }
                            ].map((info, idx) => (
                                <a key={idx} href={info.link} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                        <span className="material-symbols-outlined text-primary">{info.icon}</span>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">{info.label}</div>
                                        <div className="font-bold text-on-surface group-hover:text-primary transition-colors">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                          
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="glass-card p-8 sm:p-12 rounded-[2.5rem] border-primary/20 relative z-10">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-on-surface placeholder:opacity-20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-on-surface placeholder:opacity-20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Project Type</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all text-on-surface appearance-none cursor-pointer">
                                        <option className="bg-slate-900">Web Engineering</option>
                                        <option className="bg-slate-900">Mobile Solution</option>
                                        <option className="bg-slate-900">Product Design</option>
                                        <option className="bg-slate-900">Learning Bootcamp</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">what do you want? Your Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-on-surface placeholder:opacity-20 resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full py-5 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                    Send Message
                                    <span className="material-symbols-outlined text-lg">send</span>
                                </button>

                                <p className="text-[10px] text-center text-on-surface-variant/40 italic">
                                    By clicking send, you agree to our data handling policy.
                                </p>
                            </form>
                        </div>

                        {/* Decorative element behind form */}
                        <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem] -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
