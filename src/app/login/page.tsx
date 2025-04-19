'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getRandomSlogan } from '@/utils/slogans';
import Modal from '@/components/Modal';
import SignUpForm from '@/components/SignUpForm';

export default function LoginPage() {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-lavender to-soft-ivory p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-genie p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-genie-blue">Budget Genie</h1>
          <p className="text-center text-gray-600">{slogan}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all"
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
              className="w-full bg-genie-blue text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsSignUpModalOpen(true)}
              className="text-genie-blue hover:text-opacity-80 transition-colors"
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