/**
 * Google Analytics 4 integration module
 * Handles initialization and tracking for GA4
 */

import ReactGA from 'react-ga4';
import type { EventParams } from '../types/analytics';

let isGAInitialized = false;

/**
 * Initialize Google Analytics 4
 * Should only be called after user has given consent
 */
export const initializeGA = (measurementId: string): void => {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('GA initialization skipped: Invalid or placeholder measurement ID');
    return;
  }

  if (isGAInitialized) {
    console.warn('GA already initialized');
    return;
  }

  try {
    ReactGA.initialize(measurementId, {
      gtagOptions: {
        anonymize_ip: true, // Anonymize IP addresses for privacy
        cookie_flags: 'SameSite=None;Secure', // Modern cookie security standards
        send_page_view: false, // We'll manually track page views
      },
    });

    isGAInitialized = true;
    console.log('Google Analytics initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Google Analytics:', error);
  }
};

/**
 * Check if Google Analytics has been initialized
 */
export const isInitialized = (): boolean => {
  return isGAInitialized;
};

/**
 * Track a page view
 * @param path - The page path to track (e.g., '/about')
 * @param title - Optional page title
 */
export const trackPageView = (path: string, title?: string): void => {
  if (!isGAInitialized) {
    console.debug('GA not initialized, skipping page view tracking');
    return;
  }

  try {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    });
    console.debug(`Page view tracked: ${path}`);
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
};

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submission')
 * @param params - Optional event parameters
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
  if (!isGAInitialized) {
    console.debug('GA not initialized, skipping event tracking');
    return;
  }

  try {
    ReactGA.event(eventName, params);
    console.debug(`Event tracked: ${eventName}`, params);
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

/**
 * Track a form submission event
 * @param formName - Name of the form (e.g., 'contact_form', 'newsletter')
 * @param success - Whether the submission was successful
 */
export const trackFormSubmission = (formName: string, success = true): void => {
  trackEvent('form_submission', {
    form_name: formName,
    success,
  });
};

/**
 * Track a button click event
 * @param buttonName - Name or label of the button
 * @param location - Where on the page the button is located
 */
export const trackButtonClick = (buttonName: string, location: string): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
    page_path: window.location.pathname,
  });
};

/**
 * Track an outbound link click
 * @param url - The external URL being clicked
 * @param linkText - Optional text of the link
 */
export const trackOutboundLink = (url: string, linkText?: string): void => {
  trackEvent('outbound_link', {
    url,
    link_text: linkText,
    page_path: window.location.pathname,
  });
};

/**
 * Track an error event
 * @param errorMessage - The error message or description
 * @param errorContext - Where the error occurred
 */
export const trackError = (errorMessage: string, errorContext?: string): void => {
  trackEvent('error', {
    error_message: errorMessage,
    error_context: errorContext,
    page_path: window.location.pathname,
  });
};
