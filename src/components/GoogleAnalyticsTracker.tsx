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

export function GoogleAnalyticsTracker({ gaId }: { gaId: string | null }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    if (!gaId || !pathname || pathname.startsWith('/admin')) return;

    // Initial page load is sent automatically by gtag('config', gaId)
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
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
  }, [gaId, pathname, searchParams]);

  if (!gaId) {
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
