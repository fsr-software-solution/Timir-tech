import React, { useEffect } from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-['Manrope'] selection:bg-amber-500/30 mt-16 py-16">
            <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] -z-10 pointer-events-none"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] -z-10 pointer-events-none"></div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Service</span></h1>
                <p className="text-slate-400 mb-10 text-lg">Last updated: April 2026</p>

                <div className="space-y-8 text-base leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Timir Tech, concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
                        <p className="mb-4">By using the Site, you represent and warrant that:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-400">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
                        <p>These Terms shall be governed by and defined following the laws of the jurisdiction in which Timir Tech operates. Timir Tech and yourself irrevocably consent that the courts of the relevant jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
