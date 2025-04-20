'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getRandomSlogan } from '@/utils/slogans';
import Modal from '@/components/Modal';
import SignUpForm from '@/components/SignUpForm';
import { useTheme } from '@/contexts/ThemeContext';

export default function LoginPage() {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [slogan, setSlogan] = useState('');
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  useEffect(() => {
    setSlogan(getRandomSlogan());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // 로그인 시도
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // 로그인 에러 발생 시 처리
        console.error('로그인 에러:', error);
        throw error;
      }

      if (data?.session) {
        // 로그인 성공 시 처리
        console.log('로그인 성공, 세션 설정 중');
        await supabase.auth.setSession(data.session);
        router.push('/dashboard');
      }
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 relative
      ${theme === 'default' 
        ? 'bg-gradient-to-br from-indigo-100 via-indigo-300 to-indigo-600'
        : 'bg-gradient-to-br from-pastel-primary via-pastel-secondary to-pastel-accent'
      }`}
    >
      {/* 테마 전환 버튼 */}
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 transform hover:scale-110
          ${theme === 'default'
            ? 'bg-white/20 hover:bg-white/30 text-white'
            : 'bg-white/40 hover:bg-white/50 text-pastel-text'
          }`}
        aria-label="Toggle theme"
      >
        {theme === 'default' ? '🌸' : '🌙'}
      </button>

      <div className="w-full max-w-md">
        <div className={`backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6
          ${theme === 'default'
            ? 'bg-white/90 text-indigo-900'
            : 'bg-white/80 text-pastel-text'
          }`}
        >
          <h1 className={`text-3xl font-bold text-center
            ${theme === 'default' ? 'text-indigo-900' : 'text-pastel-text'}`}
          >
            Budget Genie
          </h1>
          <p className={`text-center
            ${theme === 'default' ? 'text-indigo-700' : 'text-pastel-text/80'}`}
          >
            {slogan}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg transition-all
                  ${theme === 'default'
                    ? 'border-indigo-200 focus:ring-2 focus:ring-indigo-500 bg-white/90'
                    : 'border-pastel-text/20 focus:ring-2 focus:ring-pastel-text bg-white/80'
                  } border focus:border-transparent`}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg transition-all
                  ${theme === 'default'
                    ? 'border-indigo-200 focus:ring-2 focus:ring-indigo-500 bg-white/90'
                    : 'border-pastel-text/20 focus:ring-2 focus:ring-pastel-text bg-white/80'
                  } border focus:border-transparent`}
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg transition-all transform
                hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50
                ${theme === 'default'
                  ? 'bg-yellow-400 hover:bg-yellow-300 text-indigo-900'
                  : 'bg-pastel-text text-white hover:bg-pastel-text/90'
                }`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsSignUpModalOpen(true)}
              className={`transition-colors
                ${theme === 'default'
                  ? 'text-indigo-700 hover:text-indigo-900'
                  : 'text-pastel-text/80 hover:text-pastel-text'
                }`}
            >
              Don't have an account? Sign Up
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        title="Create Account"
      >
        <SignUpForm onClose={() => setIsSignUpModalOpen(false)} />
      </Modal>
    </div>
  );
} 