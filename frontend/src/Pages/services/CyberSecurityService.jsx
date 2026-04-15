import React from 'react';
import { Link } from 'react-router-dom';

const CyberSecurityService = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="relative py-16 md:py-32 overflow-hidden border-b border-green-500/10">
                {/* Hacker grid & scanline background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-40 animate-[scan_4s_ease-in-out_infinite] opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-green-400 mb-8 hover:gap-3 transition-all font-mono font-bold">
                        <span className="material-symbols-outlined">arrow_back</span> cd /home
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-950/50 border border-green-500/30 mb-8 font-mono">
                                <span className="material-symbols-outlined text-green-400 text-sm">enhanced_encryption</span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">Information Security</span>
                            </div>
                            <h3 className="headline text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-[1.1] tracking-tight">
                                Bulletproof <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Cyber Defense</span>
                            </h3>
                            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                                A single breach can destroy years of reputation. We act as your elite red and blue teams—hunting vulnerabilities, testing network integrity, and hardening your cloud infrastructure against zero-day threats.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <a href="/#contact" className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold font-mono rounded shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2 inline-block text-center">
                                    <span className="material-symbols-outlined text-lg">terminal</span> Init Audit
                                </a>
                                <button className="px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/10 font-bold font-mono rounded transition-all duration-300 uppercase tracking-widest text-sm text-center">
                                    View Case Studies
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Terminal Mockup */}
                            <div className="glass-card w-full max-w-lg rounded-xl p-1 border border-green-500/20 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                                {/* Decorative terminal header */}
                                <div className="bg-slate-900 border-b border-green-500/20 px-4 py-3 flex justify-between items-center rounded-t-lg">
                                    <span className="text-green-500/50 font-mono text-xs">root@timir-sec:~</span>
                                    <div className="flex gap-2">
                                        <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                                        <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                                        <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                                    </div>
                                </div>

                                {/* Terminal body */}
                                <div className="p-6 font-mono text-xs sm:text-sm text-green-400 leading-relaxed overflow-hidden relative min-h-[350px]">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500 opacity-20 shadow-[0_0_10px_#4ade80] animate-scanline"></div>
                                    <p className="mb-2 text-slate-400">TimirOS Security Protocol v4.2.0 initialized...</p>
                                    <p className="mb-4 text-slate-400">Connected to secure proxy.</p>

                                    <p className="mb-1"><span className="text-white">root@timir-sec:~#</span> nmap -sV -p- target.internal</p>
                                    <p className="mb-1 text-slate-300">Starting Nmap 7.92...</p>
                                    <p className="mb-1 text-slate-300">Scanning target.internal (10.0.0.45)</p>

                                    <div className="my-4 opacity-80 pl-2 border-l-2 border-green-500/30">
                                        <p className="text-white">PORT     STATE  SERVICE     VERSION</p>
                                        <p>22/tcp   open   ssh         OpenSSH 8.2p1</p>
                                        <p>80/tcp   open   http        nginx 1.18.0</p>
                                        <p className="text-red-400 animate-pulse">445/tcp  open   netbios-ssn Samba smbd 4.6.2 &lt;-- VULNERABLE</p>
                                    </div>

                                    <p className="mb-1"><span className="text-white">root@timir-sec:~#</span> run payload_deploy_patch</p>
                                    <p className="mb-1 animate-pulse">Deploying zero-trust architecture patch...</p>
                                    <p className="mb-1 text-blue-400">[====================] 100% SUCCESS</p>
                                    <p className="mb-1 text-white">System secured. All vulnerabilities neutralized.</p>
                                    <span className="inline-block w-2 h-4 bg-green-400 animate-ping mt-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Arsenal Grid */}
            <section className="py-20 md:py-32 bg-slate-950 border-b border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-green-500 font-mono font-bold tracking-[0.2em] uppercase text-sm mb-4">// THREAT_MITIGATION</h2>
                        <h3 className="headline text-4xl md:text-5xl font-bold mb-6 text-white">Our Defensive Capabilities</h3>
                        <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">We employ offensive techniques to uncover architectural weaknesses, and deploy military-grade defense systems to secure your application logic, APIs, and cloud resources.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'troubleshoot',
                                title: 'Penetration Testing',
                                code: 'VULN_SCAN',
                                desc: 'We ethically hack your web apps, mobile apps, and APIs using OWASP Top 10 guidelines and custom exploitation techniques to find security flaws before malicious actors do.'
                            },
                            {
                                icon: 'shield_locked',
                                title: 'Cloud Security',
                                code: 'SEC_OPS',
                                desc: 'Securing AWS, GCP, and Azure environments. We implement Identity and Access Management (IAM) strict policies, VPC hardening, and encrypted at-rest/in-transit configurations.'
                            },
                            {
                                icon: 'policy',
                                title: 'Compliance & Auditing',
                                code: 'ISO_27001',
                                desc: 'We ensure your infrastructure strictly complies with international data privacy laws including GDPR, HIPAA, SOC 2 Type II, ensuring you pass vendor risk assessments.'
                            },
                            {
                                icon: 'code_blocks',
                                title: 'Secure Code Review',
                                code: 'SAST_DAST',
                                desc: 'Static and dynamic analysis of your application source code to detect SQL injections, XSS, CSRF, and insecure deserialization vulnerabilities in CI/CD pipelines.'
                            },
                            {
                                icon: 'admin_panel_settings',
                                title: 'DevSecOps Integration',
                                code: 'CI_CD_SEC',
                                desc: 'We embed security automated checks directly into your DevOps pipelines. Catching vulnerabilities during the build phase saves immense cost compared to post-production fixing.'
                            },
                            {
                                icon: 'crisis_alert',
                                title: 'Incident Response',
                                code: 'SOS_PROTOCOL',
                                desc: 'Immediate emergency response to active breaches. We conduct rapid forensic analysis, contain the threat, recover your data, and patch the exploited attack vector permanently.'
                            }
                        ].map((s, i) => (
                            <div key={i} className="p-8 pb-10 rounded-xl bg-slate-900 border border-green-500/10 hover:border-green-500/50 transition-colors group relative overflow-hidden">
                                {/* corner accent */}
                                <div className="absolute top-0 right-0 w-8 h-8 flex justify-end">
                                    <div className="w-full h-[2px] bg-green-500/50"></div>
                                    <div className="h-full w-[2px] bg-green-500/50 absolute right-0"></div>
                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    <span className="material-symbols-outlined text-green-400 text-3xl group-hover:scale-110 transition-transform">{s.icon}</span>
                                    <span className="text-xs font-mono text-slate-500 bg-black/50 px-2 py-1 rounded border border-white/5">{s.code}</span>
                                </div>
                                <h3 className="font-bold text-xl text-white mb-3 font-mono">{s.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Warning CTA */}
            <section className="py-24 bg-black relative">
                <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
                    <span className="material-symbols-outlined text-5xl text-green-500 mb-6">lock_person</span>
                    <h2 className="headline text-4xl md:text-5xl font-bold mb-6 text-white">An attack is imminent. Are you ready?</h2>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">Reactive security is a failed strategy. Secure your users' trust and protect your proprietary data by fixing vulnerabilities today.</p>

                    <div className="inline-flex flex-col items-center gap-4">
                        <a href="/#contact" className="px-10 py-5 bg-transparent border-2 border-green-500 text-green-400 text-lg font-black font-mono hover:bg-green-500 hover:text-black transition-all inline-block text-center">
                            EXECUTE_FREE_CONSULTATION()
                        </a>
                        <span className="text-xs text-slate-500 font-mono">ENCRYPTED END-TO-END COMMUNICATION</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CyberSecurityService;
