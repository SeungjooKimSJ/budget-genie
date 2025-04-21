'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getRandomSlogan } from '@/utils/slogans';
import Modal from '@/components/Modal';
import SignUpForm from '@/components/SignUpForm';
import { useTheme } from '@/contexts/ThemeContext';

export default function LoginPage() {
  const { colorTheme, mode, setColorTheme, toggleMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [slogan, setSlogan] = useState('');
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSloganVisible, setIsSloganVisible] = useState(true);
  const [transitionEffect, setTransitionEffect] = useState<'fade-up' | 'fade-scale' | 'fade-rotate' | 'fade-slide'>('fade-up');

  const colorButtonRef = useRef<HTMLButtonElement>(null);
  const modeButtonRef = useRef<HTMLButtonElement>(null);
  const currentSloganRef = useRef('');

  const getRandomEffect = () => {
    const effects: ('fade-up' | 'fade-scale' | 'fade-rotate' | 'fade-slide')[] = [
      'fade-up',
      'fade-scale',
      'fade-rotate',
      'fade-slide'
    ];
    return effects[Math.floor(Math.random() * effects.length)];
  };

  useEffect(() => {
    const getNewSlogan = () => {
      let newSlogan;
      do {
        newSlogan = getRandomSlogan();
      } while (newSlogan === currentSloganRef.current);
      currentSloganRef.current = newSlogan;
      return newSlogan;
    };

    const updateSlogan = () => {
      setIsSloganVisible(false);
      setTransitionEffect(getRandomEffect());
      setTimeout(() => {
        setSlogan(getNewSlogan());
        setIsSloganVisible(true);
      }, 400);
    };

    // 초기 슬로건 설정
    const initialSlogan = getRandomSlogan();
    currentSloganRef.current = initialSlogan;
    setSlogan(initialSlogan);

    // 5초마다 슬로건 변경
    const interval = setInterval(updateSlogan, 5000);

    return () => clearInterval(interval);
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

  const getThemeClasses = () => {
    const baseClasses = colorTheme === 'blue'
      ? 'from-indigo-100 via-indigo-300 to-indigo-600'
      : 'from-pastel-primary via-pastel-secondary to-pastel-accent';

    return `bg-gradient-to-br ${baseClasses} ${mode === 'dark' ? 'brightness-75' : ''}`;
  };

  const handleThemeChange = (newTheme: 'blue' | 'pink') => {
    if (colorButtonRef.current) {
      colorButtonRef.current.classList.add('fade');
      setTimeout(() => {
        setColorTheme(newTheme);
        if (colorButtonRef.current) {
          colorButtonRef.current.classList.remove('fade');
        }
      }, 150);
    }
  };

  const handleModeToggle = () => {
    if (modeButtonRef.current) {
      modeButtonRef.current.classList.add('fade');
      setTimeout(() => {
        toggleMode();
        if (modeButtonRef.current) {
          modeButtonRef.current.classList.remove('fade');
        }
      }, 150);
    }
  };

  const getTransitionClasses = () => {
    const baseClasses = 'text-center transition-all duration-400 ease-in-out transform';
    const effectClasses = {
      'fade-up': isSloganVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-6 opacity-0',
      'fade-scale': isSloganVisible 
        ? 'scale-100 opacity-100' 
        : 'scale-90 opacity-0',
      'fade-rotate': isSloganVisible 
        ? 'rotate-0 opacity-100 translate-y-0' 
        : '-rotate-6 opacity-0 translate-y-2',
      'fade-slide': isSloganVisible 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-8 opacity-0'
    };
    
    return `${baseClasses} ${effectClasses[transitionEffect]}`;
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 relative ${getThemeClasses()}`}>
      {/* 테마 컨트롤 컨테이너 */}
      <div className="absolute top-4 right-4 flex items-center gap-3">
        {/* 컬러 테마 선택기 */}
        {colorTheme === 'blue' ? (
          <button
            ref={colorButtonRef}
            onClick={() => handleThemeChange('pink')}
            className="theme-button p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            aria-label="Switch to pink theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              <path d="M12 5.4L10.14 9.18L6.1 9.78L9.05 12.65L8.35 16.67L12 14.77L15.65 16.67L14.95 12.65L17.9 9.78L13.86 9.18L12 5.4Z"/>
            </svg>
          </button>
        ) : (
          <button
            ref={colorButtonRef}
            onClick={() => handleThemeChange('blue')}
            className="theme-button p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            aria-label="Switch to blue theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>
              <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"/>
            </svg>
          </button>
        )}

        {/* 다크모드 토글 */}
        <button
          ref={modeButtonRef}
          onClick={handleModeToggle}
          className="theme-button p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {mode === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
          )}
        </button>
      </div>

      <div className="w-full max-w-md">
        <div className={`
          backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6
          ${mode === 'light'
            ? 'bg-white/90'
            : 'bg-gray-900/90'
          }
          ${colorTheme === 'blue'
            ? (mode === 'light' ? 'text-indigo-900' : 'text-indigo-100')
            : (mode === 'light' ? 'text-pastel-text' : 'text-pastel-primary')
          }
        `}>
          <h1 className="text-3xl font-bold text-center">Budget Genie</h1>
          <div className="flex items-center justify-center py-4 md:h-auto h-14 overflow-hidden md:overflow-visible">
            <p className={`
              ${getTransitionClasses()}
              ${mode === 'light' ? 'opacity-80' : 'opacity-70'}
              will-change-transform will-change-opacity
              text-sm md:text-base
            `}>
              {slogan}
            </p>
          </div>
          
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
                className={`
                  w-full px-4 py-3 rounded-lg transition-all
                  ${mode === 'light'
                    ? 'bg-white/90 border-gray-200'
                    : 'bg-gray-800/90 border-gray-700'
                  }
                  ${colorTheme === 'blue'
                    ? 'focus:ring-2 focus:ring-indigo-500'
                    : 'focus:ring-2 focus:ring-pastel-text'
                  }
                  border focus:border-transparent
                `}
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
                className={`
                  w-full px-4 py-3 rounded-lg transition-all
                  ${mode === 'light'
                    ? 'bg-white/90 border-gray-200'
                    : 'bg-gray-800/90 border-gray-700'
                  }
                  ${colorTheme === 'blue'
                    ? 'focus:ring-2 focus:ring-indigo-500'
                    : 'focus:ring-2 focus:ring-pastel-text'
                  }
                  border focus:border-transparent
                `}
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
              className={`
                w-full py-3 px-4 rounded-lg transition-all transform
                hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50
                ${colorTheme === 'blue'
                  ? (mode === 'light'
                    ? 'bg-yellow-400 hover:bg-yellow-300 text-indigo-900'
                    : 'bg-yellow-500 hover:bg-yellow-400 text-indigo-900')
                  : (mode === 'light'
                    ? 'bg-pastel-text text-white hover:bg-pastel-text/90'
                    : 'bg-pastel-text/90 text-white hover:bg-pastel-text/80')
                }
              `}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsSignUpModalOpen(true)}
              className={`
                text-sm transition-all duration-300
                hover:underline
                ${colorTheme === 'blue'
                  ? (mode === 'light' 
                    ? 'text-indigo-700 hover:text-indigo-900' 
                    : 'text-indigo-300 hover:text-indigo-100')
                  : (mode === 'light' 
                    ? 'text-pastel-text/80 hover:text-pastel-text' 
                    : 'text-pastel-primary/80 hover:text-pastel-primary')
                }
              `}
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