/**
 * Analytics type definitions for Google Analytics 4 tracking
 */

/**
 * Event categories for organizing analytics events
 */
export const AnalyticsEventCategory = {
  USER_INTERACTION: 'user_interaction',
  FORM: 'form',
  NAVIGATION: 'navigation',
  ERROR: 'error',
  ENGAGEMENT: 'engagement',
} as const;

/**
 * Generic event parameters for GA4 tracking
 */
export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Form submission event data
 */
export interface FormSubmissionEvent {
  form_name: 'contact_form' | 'newsletter';
  success: boolean;
  error_message?: string;
}

/**
 * Button click event data
 */
export interface ButtonClickEvent {
  button_name: string;
  button_location: string;
  page_path: string;
}

/**
 * Outbound link click event data
 */
export interface OutboundLinkEvent {
  url: string;
  link_text?: string;
  page_path: string;
}

/**
 * Cookie consent state stored in localStorage
 */
export interface CookieConsentState {
  analytics: boolean;
  timestamp: number;
  version: number;
}

/**
 * Cookie consent context value
 */
export interface CookieConsentContextValue {
  hasConsent: boolean;
  needsConsent: boolean;
  giveConsent: () => void;
  revokeConsent: () => void;
}
