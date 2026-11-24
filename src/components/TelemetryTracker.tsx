'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export function TelemetryTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin') || lastTrackedPath.current === pathname) {
      return;
    }
    lastTrackedPath.current = pathname;
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
