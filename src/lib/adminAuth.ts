'use client';

export interface AdminSession {
  token: string;
  user: string;
  loginTime: number;
  lastActive: number;
}

const SESSION_STORAGE_KEY = 'pubgframes_admin_session_v2';
const SESSION_MAX_AGE_MS = 2 * 60 * 60 * 1000; // 2 hours maximum session

/**
 * Initializes a new secure session for the authenticated admin.
 * Uses sessionStorage so the session is strictly tied to the current browser/tab
 * and automatically destroyed when the window or tab is closed.
 */
export function setAdminSession(email: string) {
  if (typeof window === 'undefined') return;

  const session: AdminSession = {
    token: 'pf_sec_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
    user: email.trim().toLowerCase(),
    loginTime: Date.now(),
    lastActive: Date.now()
  };

  // 1. Save strictly in sessionStorage (dies on browser/tab close)
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));

  // 2. Clear any persistent legacy localStorage auth so browser close always forces re-login
  localStorage.removeItem('pubgframes_admin_auth');
  localStorage.removeItem('pubgframes_admin_user');
}

/**
 * Validates the current admin session.
 * Returns null if not logged in, if the window was closed/reopened, or if session expired.
 */
export function getAdminSession(): AdminSession | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const session: AdminSession = JSON.parse(raw);
    const now = Date.now();

    // Enforce maximum session age (2 hours)
    if (now - session.loginTime > SESSION_MAX_AGE_MS) {
      clearAdminSession();
      return null;
    }

    // Refresh last active timestamp
    session.lastActive = now;
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    return session;
  } catch (err) {
    console.error('Session validation error:', err);
    clearAdminSession();
    return null;
  }
}

/**
 * Destroys all admin session tokens on logout or timeout
 */
export function clearAdminSession() {
  if (typeof window === 'undefined') return;

  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem('pubgframes_admin_auth');
  localStorage.removeItem('pubgframes_admin_user');
}
