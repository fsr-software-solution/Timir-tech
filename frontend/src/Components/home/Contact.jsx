import React, { useState } from 'react';
import logoImg from '../../assets/logobg.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'full stack Web development',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://timir-tech-back.vercel.app/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', projectType: 'full stack Web development', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Could not connect to the server. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

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
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-[#07324f] shadow-xl shadow-primary/10">
                                    <img
                                        src={logoImg}
                                        alt="Timir Tech Logo"
                                        className="w-full h-full object-cover scale-[1.10]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-black text-amber-500 leading-none">
                                        Timir <span className="text-white">Tech</span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-medium mt-1">
                                        Digital Solution for better future
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <span className="material-symbols-outlined text-primary text-sm">alternate_email</span>
                                <span className="text-xs font-label uppercase tracking-[0.2em] text-primary">Get in Touch</span>
                            </div>
                            <h3 className="headline text-2xl md:text-3xl font-bold mb-6 leading-tight">
                                Let's Build Your <br />
                                <span className="text-gradient">Digital Legacy</span>
                            </h3>
                            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                                Do you want any of our services? We are interested in delivering our services. You can contact us using the provided form; our support team will respond soon.
                            </p>
                            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                                If you want any of our listed services or any other tech-related service, Timir Tech is your first choice.
                            </p>
                            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                                We are here to help you grow your business with our technology solutions.
                            </p>
                            <p className="mt-4">
                                ቢዝንስወን ለማዘመን፤ በአለም መድረክ፤
                                <p>አያስቡ፤ አለልወት ጥምር ቴክ።</p>
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
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="glass-card p-8 sm:p-12 rounded-[2.5rem] border-primary/20 relative z-10">
                            {status.message && (
                                <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-on-surface placeholder:opacity-20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-on-surface placeholder:opacity-20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Project Type</label>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all text-on-surface appearance-none cursor-pointer"
                                    >
                                        <option value="full stack Web development" className="bg-slate-900">Full Stack Web Development</option>
                                        <option value="Mobile app development" className="bg-slate-900">Mobile App Development</option>
                                        <option value="graphics Design" className="bg-slate-900">Graphics Design</option>
                                        <option value="video editig" className="bg-slate-900">Video Editing</option>
                                        <option value="cyber security related" className="bg-slate-900">Cyber Security Related</option>
                                        <option value="Learning Bootcamp" className="bg-slate-900">Learning Bootcamp</option>
                                        <option value="other issue" className="bg-slate-900">Other Issue</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-on-surface placeholder:opacity-20 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 bg-gradient-to-br from-primary-container to-primary text-on-primary font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
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
