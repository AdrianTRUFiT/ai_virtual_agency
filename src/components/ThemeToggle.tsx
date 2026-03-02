import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setIsDark(false)}
        className={`p-1.5 rounded-full transition-all ${!isDark ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setIsDark(true)}
        className={`p-1.5 rounded-full transition-all ${isDark ? 'bg-slate-900 text-brand-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
};
