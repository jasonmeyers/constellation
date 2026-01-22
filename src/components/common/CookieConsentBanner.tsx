/**
 * Cookie Consent Banner
 * Displays a GDPR/CCPA compliant banner for analytics consent
 */

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { useCookieConsent } from '../../contexts/CookieConsentContext';
import { Button } from '../ui';

export const CookieConsentBanner = () => {
  const { needsConsent, giveConsent, revokeConsent } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show banner with slight delay for better UX
    if (needsConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [needsConsent]);

  const handleAccept = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      giveConsent();
    }, 300);
  };

  const handleDecline = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      revokeConsent();
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isAnimating ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <h3 id="cookie-consent-title" className="text-sm font-semibold text-gray-900 mb-1">
                  We value your privacy
                </h3>
                <p id="cookie-consent-description" className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience and analyze our traffic.
                  By clicking "Accept", you consent to our use of analytics cookies.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 sm:flex-none"
                aria-label="Decline analytics cookies"
              >
                Decline
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAccept}
                className="flex-1 sm:flex-none"
                aria-label="Accept analytics cookies"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
