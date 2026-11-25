'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsTracker({
  gaId,
  hasGoogleTag = false
}: {
  gaId: string | null;
  hasGoogleTag?: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    if (!gaId || !pathname || pathname.startsWith('/admin')) return;

    // Initial page load is sent automatically when GA script runs, or configured cleanly via existing Google tag
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      if (hasGoogleTag && typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', gaId, { anonymize_ip: true });
      }
      return;
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const qs = searchParams?.toString();
      const pagePath = qs ? `${pathname}?${qs}` : pathname;
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title
      });
    }
  }, [gaId, hasGoogleTag, pathname, searchParams]);

  if (!gaId || hasGoogleTag) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
