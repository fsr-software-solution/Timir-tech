import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logobg.png';

const Footer = () => {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState({ type: '', message: '' });
    const [loading, setLoading] = React.useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://timir-tech-back.vercel.app/api/subscribers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thanks for subscribing!' });
                setEmail('');
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Connection error. Try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="w-full border-t border-white/5 bg-slate-950">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 font-['Manrope'] text-sm">
                <div className="space-y-6 px-2">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-[#07324f]">
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
                                Digital Solutions For Better Future
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed max-w-xs pl-1">Pioneering technical solutions for the digital age. We build with precision and scale with vision.</p>
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
                            <li><Link className="text-slate-500 hover:text-amber-500 transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="text-slate-500 hover:text-amber-500 transition-colors" to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link className="text-slate-500 hover:text-amber-500 transition-colors" to="/cookie-policy">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="font-bold text-white uppercase tracking-widest text-xs">Connect</div>
                    <div className="space-y-4">
                        <a className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors" href="https://vm.tiktok.com/ZS9NsokfWtvoX-WGfU1/" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
                            <span>TikTok</span>
                        </a>
                        <a className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors" href="https://t.me/Timir_Tech" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.16L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.7l-4.14-3.04-2 1.93c-.22.22-.41.4-.84.4z" /></svg>
                            <span>Telegram</span>
                        </a>
                        <a className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors" href="https://youtube.com/@timir_tech_solutions?si=VbwuYrC5BCcmYLD1" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            <span>YouTube</span>
                        </a>
                    </div>
                    <div className="pt-6">
                        <div className="text-slate-500 mb-2">Subscribe to our newsletter</div>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="flex">
                                <input
                                    className="bg-surface-container-highest border-none rounded-l-xl px-4 py-3 focus:ring-1 focus:ring-primary w-full text-white"
                                    placeholder="Email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-primary text-on-primary px-4 py-3 rounded-r-xl font-bold disabled:opacity-50"
                                >
                                    {loading ? '...' : 'Join'}
                                </button>
                            </div>
                            {status.message && (
                                <p className={`text-xs ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
                <div>© 2024 Timir Tech. All rights reserved.</div>
                <div className="flex gap-8">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Systems Operational
                    </span>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
