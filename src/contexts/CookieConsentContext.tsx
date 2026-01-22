/**
 * Cookie Consent Context
 * Manages user consent for analytics cookies and localStorage persistence
 */

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { initializeGA } from '../lib/analytics';
import type { CookieConsentState, CookieConsentContextValue } from '../types/analytics';

const CONSENT_STORAGE_KEY = 'cookie-consent';
const CONSENT_VERSION = 1;

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider = ({ children }: CookieConsentProviderProps) => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [needsConsent, setNeedsConsent] = useState<boolean>(true);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Load consent state from localStorage on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (storedConsent) {
      try {
        const consentState: CookieConsentState = JSON.parse(storedConsent);

        // Check if consent version matches (for future policy updates)
        if (consentState.version === CONSENT_VERSION) {
          setHasConsent(consentState.analytics);
          setNeedsConsent(false);

          // Initialize GA if consent was previously given
          if (consentState.analytics) {
            const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
            if (measurementId) {
              initializeGA(measurementId);
            }
          }
        } else {
          // Consent version mismatch, request new consent
          setNeedsConsent(true);
        }
      } catch (error) {
        console.error('Failed to parse cookie consent from localStorage:', error);
        setNeedsConsent(true);
      }
    } else {
      // No stored consent, need to ask user
      setNeedsConsent(true);
    }

    setIsInitialized(true);
  }, []);

  const giveConsent = () => {
    const consentState: CookieConsentState = {
      analytics: true,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentState));
    setHasConsent(true);
    setNeedsConsent(false);

    // Initialize Google Analytics
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      initializeGA(measurementId);
    }
  };

  const revokeConsent = () => {
    const consentState: CookieConsentState = {
      analytics: false,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentState));
    setHasConsent(false);
    setNeedsConsent(false);

    // Note: We don't uninitialize GA here, but we won't track any new events
    console.log('Analytics consent revoked');
  };

  const contextValue: CookieConsentContextValue = {
    hasConsent,
    needsConsent,
    giveConsent,
    revokeConsent,
  };

  // Don't render children until we've checked localStorage
  if (!isInitialized) {
    return null;
  }

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
};

/**
 * Hook to access cookie consent state and actions
 */
export const useCookieConsent = (): CookieConsentContextValue => {
  const context = useContext(CookieConsentContext);

  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }

  return context;
};
