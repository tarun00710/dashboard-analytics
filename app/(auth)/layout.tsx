// app/auth/layout.tsx
'use client';


import Spinner from '@/component/common/Spinner';
import { useRedirectIfAuthenticatedWithRole } from '@/hooks/useRedirectAuthenticatedRole';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useRedirectIfAuthenticatedWithRole();

  if (isLoading) return <Spinner />;

  return <>{children}</>;
}
