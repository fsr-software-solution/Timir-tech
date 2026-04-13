import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16 md:py-32 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-24">
                    <h2 className="headline text-4xl font-bold mb-4">Trusted by Visionaries</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-card p-10 rounded-[2.5rem]">
                        <div className="flex gap-1 text-primary mb-6">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                        <p className="italic text-on-surface-variant mb-8 font-body">"Timir Tech transformed our legacy infrastructure into a cloud-native beast. Their speed and precision are unmatched in the industry."</p>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                alt="Professional portrait of a male CEO in a modern tech office setting"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBotMFpydWE6Iugzhoka0nwzo0k5MLzmVtw65AK0_nMCmvgt5dWeq3St2FayDv3M5gQPc-CccbgNlIwwCBEDEj11DfB582LkutAK-i26OEIazdUVpONz8Tdxv6M0adRnWNu2ZX6mPUK2i95VDc5_4PBMuCS0wgIIPx8mlT4hJTbp5OrznuMLK63HRTn9APR4IA2ntNU-kW75SNNyc1G0ZzttE0G1USbV3lvHsdR6IPFTWLwNIGmSJQRc-qYzGu-FPZWkRkoCy4udxVp"
                            />
                            <div>
                                <div className="font-bold text-on-surface">James Arrington</div>
                                <div className="text-xs text-on-surface-variant opacity-60">CTO, Nebula Systems</div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] border-primary/20">
                        <div className="flex gap-1 text-primary mb-6">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                        <p className="italic text-on-surface-variant mb-8 font-body">"The most professional design and engineering team we've ever partnered with. They don't just build apps; they build experiences."</p>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                alt="Professional portrait of a female creative director with vibrant urban lighting"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMXbDDSQGBNWDr8097orDZZegeSNRl3AnWhkq4V_-80xePa9WweG4lDH2HhLp2_pXhubEBRNp3i1-EO_is-8kp7MJ_urjDLKNEpc8L0liAp2SiUjShu7xyeqvLnH_Af4chAYqSkSqu2sffwvgTjAEPTqfJl6XxP6psINNR9Ja0NZZECG5ifplNUQbf5CB9KfyAkrP0k4RWrd-HQ2hEbHNvPcxRDELxpZGPGE85jzKTzRF9oJce1motsCXv8Oto1CzOgbuQeKo0AAI"
                            />
                            <div>
                                <div className="font-bold text-on-surface">Sarah Chen</div>
                                <div className="text-xs text-on-surface-variant opacity-60">Founder, Aura Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem]">
                        <div className="flex gap-1 text-primary mb-6">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                        <p className="italic text-on-surface-variant mb-8 font-body">"From MVP to Scale-up, Timir Tech has been our backbone. Their cyber security audits alone saved us from multiple vulnerabilities."</p>
                        <div className="flex items-center gap-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                alt="Professional portrait of a male tech entrepreneur against a neutral background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSLi2cx4ZobcyvlM9c46ATW8dDWUN_0TR3ZGRJxOYkRWpVNYI-H94wE8eW_DA6yNfEd4EG6by_RFaP_G7EqYHoAkCCxfcJirCDu5X1AP-Fd57nVecYw0J2lm7Co7oIUWYcMMOvrHvGEUjwEURIRwWFnbq3PFELHR6hU3FO6Fi40FjM7vLGeM2HOX7C1OXDTl7CwI1Kq9RO1sjWvC4Q-eddsLV95KIopbo0qKYLjVNqwn0KGDp5xEDNxeK738891kY0TVXozvnYYJ5N"
                            />
                            <div>
                                <div className="font-bold text-on-surface">David Miller</div>
                                <div className="text-xs text-on-surface-variant opacity-60">Director, Quant Core</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
