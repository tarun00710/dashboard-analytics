'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  BarChart2,
  Settings, 
  User,
  Home
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart2, current: pathname === '/dashboard', adminOnly: true },
    { name: 'Profile', href: '/profile', icon: User, current: pathname === '/profile' },
    { name: 'Settings', href: '/setting', icon: Settings, current: pathname === '/setting' },
  ];

  // Filter role check
  const filteredNavigation = navigation.filter(item => {
    if (item.adminOnly && user?.role !== 'admin') {
      return false;
    }
    return true;
  });

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow border-r border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
        <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/dashboard" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Analytics</span>
          </Link>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${
                    item.current
                      ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                `}
              >
                <item.icon
                  className={`
                    mr-3 flex-shrink-0 h-6 w-6
                    ${
                      item.current
                        ? 'text-blue-600 dark:text-blue-300'
                        : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 group-hover:dark:text-white'
                    }
                  `}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
