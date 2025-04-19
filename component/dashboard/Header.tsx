"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOut, Menu, X } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export function DashboardHeader() {
  const { logout } = useAuthStore();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter()

  const logoutHandler = () => {
    setShowUserMenu(false);
    logout();
    router.push('/login')
  }

  return (
    <header className="bg-white border-b border-gray-200 z-10 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={showMobileMenu}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              {showMobileMenu ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center md:justify-start">
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                 Home
              </h1>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center">
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  id="user-menu"
                  aria-expanded={showUserMenu}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={"/avatar/avatar.jpg"}
                    alt="User"
                    width={32}
                    height={32}
                  />
                </button>
              </div>

              {/* User dropdown menu */}
              {showUserMenu && (
                <div
                  className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:bg-gray-800 dark:ring-gray-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="py-1" role="none">
                    <button
                      type="button"
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={logoutHandler}
                    >
                      <LogOut
                        className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white z-20 border-b border-gray-200 shadow-md md:hidden overflow-hidden transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 ${
          showMobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 py-3 space-y-1">
          <Link
            href="/dashboard/analytics"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-700"
            onClick={() => setShowMobileMenu(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/users"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setShowMobileMenu(false)}
          >
            Users
          </Link>
          <Link
            href="/dashboard/settings"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setShowMobileMenu(false)}
          >
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
}
