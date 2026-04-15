import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-['Manrope'] selection:bg-amber-500/30 mt-16 py-16">
            <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] -z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 pointer-events-none"></div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Policy</span></h3>
                <p className="text-slate-400 mb-10 text-lg">Last updated: April 2026</p>

                <div className="space-y-8 text-base leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p>At Timir Tech, we prioritize your privacy. We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, or otherwise contacting us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-400">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To fulfill and manage your orders and requests.</li>
                            <li>To protect our Services from fraudulent activities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security and Sharing</h2>
                        <p>We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. We do not sell your personal information to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p>If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@timirtech.com" className="text-amber-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-colors">privacy@timirtech.com</a> or by post to our registered office.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
