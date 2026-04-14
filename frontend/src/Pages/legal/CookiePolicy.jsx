import React, { useEffect } from 'react';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-['Manrope'] selection:bg-amber-500/30 mt-16 py-16">
            <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] -z-10 pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px] -z-10 pointer-events-none"></div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Policy</span></h1>
                <p className="text-slate-400 mb-10 text-lg">Last updated: April 2026</p>

                <div className="space-y-8 text-base leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                        <p>As is common practice with almost all professional websites, our site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This policy describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
                        <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. The Cookies We Set</h2>
                        <ul className="list-disc pl-5 space-y-4 text-slate-400">
                            <li>
                                <strong className="text-slate-200">Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                            </li>
                            <li>
                                <strong className="text-slate-200">Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                            </li>
                            <li>
                                <strong className="text-slate-200">Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Disabling Cookies</h2>
                        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
