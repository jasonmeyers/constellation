import { createRootRoute, Outlet, useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Layout } from '../components/layout';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { trackPageView } from '../lib/analytics';

const RootComponent = () => {
  const router = useRouter();
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    // Track initial page view
    if (hasConsent) {
      trackPageView(window.location.pathname);
    }

    // Subscribe to navigation events
    const unsubscribe = router.subscribe('onLoad', (event) => {
      if (hasConsent) {
        trackPageView(event.toLocation.pathname);
      }
    });

    return unsubscribe;
  }, [router, hasConsent]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});