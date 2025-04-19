'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from './Spinner';
import { useAuthStore } from '@/store/authStore';

export const ProtectedLayout = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: 'admin' | 'user';
}) => {
  const { isAuthenticated, user, hasHydrated } = useAuthStore();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!hasHydrated) return; 

    if (!isAuthenticated) {
      router.replace('/login');
    } else if (role && user?.role !== role) {
      router.replace('/profile');
    } else {
      setChecking(false);
    }
  }, [isAuthenticated, user?.role, role, hasHydrated]);

  if (checking || !hasHydrated) {
    return <Spinner />;
  }

  return <>{children}</>;
};
