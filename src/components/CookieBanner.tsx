'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#080a09] border-t border-white/[0.05] shadow-2xl transition-all duration-500 ease-out ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#8a9691] font-light leading-relaxed">
          We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 bg-[#5a9e7e] text-[#080a09] text-xs font-medium transition-all duration-300 hover:bg-[#f0f4f1]"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 border border-[#5a9e7e] text-[#5a9e7e] text-xs font-medium transition-all duration-300 hover:bg-[#5a9e7e] hover:text-[#080a09]"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
