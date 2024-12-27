import React from 'react';
import { Sprout } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://raw.githubusercontent.com/yourgithubuser/your-repo/main/nong-gia-logo.png" 
            alt="Nông Gia Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">Nông Gia</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors">Tính Năng</a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors">Cách Hoạt Động</a>
          <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors">Đánh Giá</a>
          <ThemeToggle />
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2">
            <Sprout className="h-4 w-4" />
            Bắt Đầu Ngay
          </button>
        </nav>
      </div>
    </header>
  );
}