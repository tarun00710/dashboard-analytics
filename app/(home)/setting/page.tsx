// app/(home)/settings/page.tsx
"use client";

import ThemeToggle from "@/component/theme/Themetoggle";

const Setting = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">Settings</h1>

      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            Appearance (Theme)
          </span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Setting;
