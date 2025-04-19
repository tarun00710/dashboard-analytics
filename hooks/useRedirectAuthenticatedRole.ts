'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export const useRedirectIfAuthenticatedWithRole = () => {
  const { isAuthenticated, hasHydrated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated) return;

    if (isAuthenticated && user?.role === 'admin') {
      router.replace('/dashboard');
    } else if (isAuthenticated && user?.role === 'user') {
      router.replace('/profile');
    }
  }, [isAuthenticated, hasHydrated, user?.role]);

  return { isLoading: !hasHydrated };
};
