// store/useAuthStore.ts
import { User } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


type AuthState = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  hasHydrated: boolean
  setHasHydrated: (status: boolean) => void;
  setAuth: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      hasHydrated: false,
      setHasHydrated: (status) => set({ hasHydrated: status }),
      setAuth: (user: User, token: string) => {
        set({
          user,
          token,
          isAuthenticated: true
        })
      },
      
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false
        })
      }
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
      partialize: (state) => ({ 
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)