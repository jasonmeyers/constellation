/**
 * Analytics Hook
 * Provides a convenient interface for tracking analytics events
 */

import { useCallback } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import {
  trackPageView as gaTrackPageView,
  trackEvent as gaTrackEvent,
  trackFormSubmission as gaTrackFormSubmission,
  trackButtonClick as gaTrackButtonClick,
  trackOutboundLink as gaTrackOutboundLink,
} from '../lib/analytics';
import type { EventParams } from '../types/analytics';

export interface UseAnalyticsReturn {
  /**
   * Track a generic custom event
   */
  trackEvent: (eventName: string, params?: EventParams) => void;

  /**
   * Track a page view
   */
  trackPageView: (path: string, title?: string) => void;

  /**
   * Track a form submission
   */
  trackFormSubmission: (formName: string, success?: boolean) => void;

  /**
   * Track a button click
   */
  trackButtonClick: (buttonName: string, location: string) => void;

  /**
   * Track an outbound link click
   */
  trackOutboundLink: (url: string, linkText?: string) => void;

  /**
   * Whether analytics tracking is enabled (user has consented)
   */
  isEnabled: boolean;
}

/**
 * Hook for tracking analytics events
 * Only tracks if user has given consent
 */
export const useAnalytics = (): UseAnalyticsReturn => {
  const { hasConsent } = useCookieConsent();

  const trackEvent = useCallback(
    (eventName: string, params?: EventParams) => {
      if (!hasConsent) return;
      gaTrackEvent(eventName, params);
    },
    [hasConsent]
  );

  const trackPageView = useCallback(
    (path: string, title?: string) => {
      if (!hasConsent) return;
      gaTrackPageView(path, title);
    },
    [hasConsent]
  );

  const trackFormSubmission = useCallback(
    (formName: string, success = true) => {
      if (!hasConsent) return;
      gaTrackFormSubmission(formName, success);
    },
    [hasConsent]
  );

  const trackButtonClick = useCallback(
    (buttonName: string, location: string) => {
      if (!hasConsent) return;
      gaTrackButtonClick(buttonName, location);
    },
    [hasConsent]
  );

  const trackOutboundLink = useCallback(
    (url: string, linkText?: string) => {
      if (!hasConsent) return;
      gaTrackOutboundLink(url, linkText);
    },
    [hasConsent]
  );

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
    trackOutboundLink,
    isEnabled: hasConsent,
  };
};
