'use client';

import { ReactNode, useEffect } from 'react';

import { API_ROUTES } from '@/features/auth/constants/apiRoutes';
import { useAuthStore } from '@/features/auth/model/authStore';

export function AuthProvider({ children }: { children: ReactNode }) {
  const { initialize } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(API_ROUTES.AUTHENTICATE, { credentials: 'include' });
        const { isAuthenticated } = await res.json();
        initialize(isAuthenticated);
      } catch (e) {
        console.error(e);
      }
    };
    checkAuth();
  }, [initialize]);

  return <>{children}</>;
}
