'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getRandomSlogan } from '@/utils/slogans';
import Modal from '@/components/Modal';
import SignUpForm from '@/components/SignUpForm';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

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

    const initialSlogan = getRandomSlogan();
    currentSloganRef.current = initialSlogan;
    setSlogan(initialSlogan);

    const interval = setInterval(updateSlogan, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError('Invalid email or password');
        return;
      }

      if (data?.session) {
        router.push('/dashboard');
      }
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
    setColorTheme(newTheme);
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
      <div className="absolute top-4 right-4 flex items-center gap-3">
        {colorTheme === 'blue' ? (
          <button
            onClick={() => handleThemeChange('pink')}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            aria-label="Switch to pink theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              <path d="M12 5.4L10.14 9.18L6.1 9.78L9.05 12.65L8.35 16.67L12 14.77L15.65 16.67L14.95 12.65L17.9 9.78L13.86 9.18L12 5.4Z"/>
            </svg>
          </button>
        ) : (
          <button
            onClick={() => handleThemeChange('blue')}
            className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            aria-label="Switch to blue theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>
              <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"/>
            </svg>
          </button>
        )}

        <button
          onClick={toggleMode}
          className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {mode === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
          )}
        </button>
      </div>

      <div className="w-full max-w-md">
        <div className={`
          backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6
          transition-all duration-300
          hover:shadow-2xl hover:scale-[1.01]
          shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)]
          ${mode === 'light'
            ? 'bg-white/90 shadow-gray-400/20'
            : 'bg-gray-900/90 shadow-black/30'
          }
          ${colorTheme === 'blue'
            ? (mode === 'light' ? 'text-indigo-900' : 'text-indigo-100')
            : (mode === 'light' ? 'text-pastel-text' : 'text-pastel-primary')
          }
        `}>
          <h1 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
            Budget Genie
            <Image
              src="/images/budget-genie-mascot.png"
              alt="Budget Genie"
              width={40}
              height={40}
              priority
              className={`
                object-contain
                w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]
                transition-all duration-500
                translate-y-0 opacity-100
                ${colorTheme === 'blue'
                  ? (mode === 'light' 
                    ? 'drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]' 
                    : 'drop-shadow-[0_0_8px_rgba(165,180,252,0.5)]')
                  : (mode === 'light' 
                    ? 'drop-shadow-[0_0_8px_rgba(157,78,221,0.4)]' 
                    : 'drop-shadow-[0_0_8px_rgba(157,78,221,0.6)]')
                }
              `}
              quality={100}
              sizes="(max-width: 640px) 40px, 48px"
            />
          </h1>
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
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm sm:text-base font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`
                  w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg
                  text-sm sm:text-base
                  transition-all duration-200
                  focus:outline-none focus:ring-2
                  ${mode === 'light'
                    ? 'bg-white/50 border border-gray-200 focus:ring-indigo-500'
                    : 'bg-gray-800/50 border border-gray-700 focus:ring-indigo-400'
                  }
                  ${colorTheme === 'blue'
                    ? (mode === 'light' ? 'text-indigo-900' : 'text-indigo-100')
                    : (mode === 'light' ? 'text-pastel-text' : 'text-pastel-primary')
                  }
                `}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm sm:text-base font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`
                  w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg
                  text-sm sm:text-base
                  transition-all duration-200
                  focus:outline-none focus:ring-2
                  ${mode === 'light'
                    ? 'bg-white/50 border border-gray-200 focus:ring-indigo-500'
                    : 'bg-gray-800/50 border border-gray-700 focus:ring-indigo-400'
                  }
                  ${colorTheme === 'blue'
                    ? (mode === 'light' ? 'text-indigo-900' : 'text-indigo-100')
                    : (mode === 'light' ? 'text-pastel-text' : 'text-pastel-primary')
                  }
                `}
                placeholder="Enter your password"
              />
            </div>

            <div className="h-5 mt-1 transition-all duration-300 ease-in-out">
              {error ? (
                <div className={`
                  text-sm rounded px-3 py-2 
                  transition-all duration-300 ease-in-out opacity-100
                  ${colorTheme === 'blue'
                    ? (mode === 'light'
                      ? 'bg-red-50 border border-red-200 text-red-600'
                      : 'bg-red-900/30 border border-red-800/50 text-red-300')
                    : (mode === 'light'
                      ? 'bg-pink-50 border border-pink-200 text-pink-600'
                      : 'bg-pink-900/30 border border-pink-800/50 text-pink-300')
                  }
                `}>
                  {error}
                </div>
              ) : (
                <div className="opacity-0">&nbsp;</div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg mt-4
                text-sm sm:text-base font-medium
                transition-all duration-300
                transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50
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