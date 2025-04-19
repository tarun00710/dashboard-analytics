// app/(auth)/login/page.tsx
'use client'

import { useEffect } from 'react'
import { useActionState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { LoginResponse } from '@/utils/types'
import { useAuthStore } from '@/store/authStore'
import { login } from '@/action/auth'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {setAuth} = useAuthStore()
  
  const [state, formAction, pending] = useActionState<LoginResponse | undefined, FormData>(
    login, 
    undefined
  )
  
  useEffect(() => {
    if (state?.success && state.user && state.token) {
      setAuth(state.user, state.token)
      const redirectTo = searchParams.get('redirect') || '/dashboard'
      router.push(redirectTo)
    }
  }, [state, router, searchParams, setAuth])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 shadow-sm p-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        
        {state?.errors?._form && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{state.errors._form}</h3>
              </div>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" action={formAction}>
          <div className="space-y-6 rounded-md ">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
              {state?.errors?.email && (
                <p className="mt-2 text-sm text-red-600">{state.errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              {state?.errors?.password && (
                <p className="mt-2 text-sm text-red-600">{state.errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link 
                href="/register" 
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don&apos;t have an account? Sign up
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={pending}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70"
            >
              {pending ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          
          <div className="mt-4 rounded-md bg-gray-50 p-4">
            <div className="text-sm text-gray-700">
              <p className="font-medium">Demo credentials:</p>
              <p>Admin: admin@example.com / password</p>
              <p>User: user@example.com / password</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}