'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';


export const useAuthCheck = (requiredRole?: 'admin' | 'user') => {
  const { isAuthenticated, user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    } else if (requiredRole && user?.role !== requiredRole) {
      router.replace('/profile');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, user, router, requiredRole]);

  return { loading, user };
};
