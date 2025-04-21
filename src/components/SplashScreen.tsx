'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoadingIndicator from './LoadingIndicator';
import { useTheme } from '@/contexts/ThemeContext';

interface SplashScreenProps {
  onComplete?: () => void;
}

// 마법 같은 서브헤딩 메시지 목록
const MAGICAL_SUBHEADINGS = [
  "Smarter money starts with a wish",
  "Your personal genie for budgeting magic",
  "Budgeting help is just a wish away",
  "Your wish for better budgeting has been granted",
  "Let's make your finances magical"
];

// 로딩 메시지 목록
const LOADING_MESSAGES = [
  "Summoning your genie...",
  "Budget wishes loading...",
  "Magic coins incoming...",
  "Wave goodbye to messy budgets...",
  "A wish away from smarter spending..."
];

// 랜덤 인덱스 생성 함수
const getRandomIndex = (array: string[]) => Math.floor(Math.random() * array.length);

// 스플래시 스크린 컴포넌트: 앱 시작시 로딩 화면을 표시
export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const { colorTheme, mode, setColorTheme, toggleMode } = useTheme();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [message, setMessage] = useState(MAGICAL_SUBHEADINGS[0]);
  const [loadingMessage, setLoadingMessage] = useState(LOADING_MESSAGES[0]);
  const [isClient, setIsClient] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const colorButtonRef = useRef<HTMLButtonElement>(null);
  const modeButtonRef = useRef<HTMLButtonElement>(null);

  // 메시지 초기화 (클라이언트 사이드에서만 실행)
  useEffect(() => {
    setIsClient(true);
    const randomMessage = MAGICAL_SUBHEADINGS[getRandomIndex(MAGICAL_SUBHEADINGS)];
    const randomLoadingMessage = LOADING_MESSAGES[getRandomIndex(LOADING_MESSAGES)];
    setMessage(randomMessage);
    setLoadingMessage(randomLoadingMessage);
    
    // 로고 애니메이션 시작 (0.5초 후)
    setTimeout(() => {
      setShowLogo(true);
    }, 500);
  }, []);

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    } else {
      router.push('/login');
    }
  };

  // 전환 효과를 처리하는 함수
  const handleTransition = () => {
    if (!isFading) {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        handleComplete();
      }, 800); // fadeOut 애니메이션 시간
    }
  };

  // 클릭 시 즉시 전환
  const handleClick = () => {
    if (!isLoading) {
      handleTransition();
    }
  };

  // 스플래시 화면 표시 시간 설정 (4.5초)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleTransition();
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

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

  if (!isVisible) return null;

  if (!isClient) {
    return <div className="flex items-center justify-center min-h-screen">✨</div>;
  }

  return (
    <div 
      className={`
        fixed inset-0
        flex flex-col items-center justify-center min-h-screen 
        transition-all duration-800 ease-in-out
        ${getThemeClasses()}
        ${isFading ? 'bg-opacity-0 backdrop-brightness-0' : 'bg-opacity-100'}
      `}
    >
      {/* 테마 컨트롤 컨테이너 */}
      <div className={`
        absolute top-4 right-4 flex items-center gap-3
        ${isFading ? 'opacity-0' : 'opacity-100'}
        transition-opacity duration-800
      `}>
        {/* 컬러 테마 선택기 */}
        {colorTheme === 'blue' ? (
          <button
            ref={colorButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              handleThemeChange('pink');
            }}
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
            onClick={(e) => {
              e.stopPropagation();
              handleThemeChange('blue');
            }}
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
          onClick={(e) => {
            e.stopPropagation();
            handleModeToggle();
          }}
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

      <div 
        className={`
          relative w-full max-w-md p-4
          flex flex-col items-center justify-center gap-6
          transition-all duration-800 ease-in-out
          ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
          cursor-pointer
        `}
        onClick={handleClick}
      >
        {/* 로고 */}
        <h1 className={`
          text-4xl md:text-5xl font-bold text-center mb-0
          ${colorTheme === 'blue'
            ? (mode === 'light' ? 'text-white' : 'text-indigo-100')
            : (mode === 'light' ? 'text-pastel-text' : 'text-pastel-primary')
          }
          ${showLogo ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-4 blur-sm'}
          transform transition-all duration-1500 ease-out
        `}>
          Budget Genie
        </h1>

        {/* 지니 이미지 */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 -mt-1">
          <div className={`
            relative w-full h-full
            transition-all duration-800
            ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
            animate-float
            flex items-center justify-center
          `}>
            <div className="relative w-full h-full">
              <Image
                src="/images/budget-genie-mascot.png"
                alt="Budget Genie Mascot"
                fill
                className={`
                  ${colorTheme === 'blue'
                    ? 'drop-shadow-glow'
                    : 'drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]'
                  }
                  ${mode === 'dark' ? 'brightness-90' : ''}
                `}
                priority
                sizes="(max-width: 768px) 160px, 224px"
                style={{ 
                  objectFit: 'contain'
                }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingIndicator size="large" />
            </div>
          )}
        </div>

        {/* 매지컬 서브헤딩 */}
        <div className="space-y-4 mt-0">
          <h2 className={`
            text-xl md:text-2xl font-semibold text-center
            transition-opacity duration-800
            animate-twinkle
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${colorTheme === 'blue'
              ? (mode === 'light' 
                ? 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]' 
                : 'text-indigo-100 drop-shadow-[0_0_25px_rgba(165,180,252,0.6)]')
              : (mode === 'light' 
                ? 'text-pastel-text drop-shadow-[0_0_25px_rgba(157,78,221,0.4)]' 
                : 'text-pastel-primary drop-shadow-[0_0_25px_rgba(157,78,221,0.6)]')
            }
            tracking-wide
            px-4
          `}>
            {message}
          </h2>

          {/* 로딩 메시지 */}
          <p className={`
            text-lg md:text-xl text-center
            ${colorTheme === 'blue'
              ? (mode === 'light' 
                ? 'text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                : 'text-indigo-200 drop-shadow-[0_0_15px_rgba(165,180,252,0.4)]')
              : (mode === 'light' 
                ? 'text-pastel-text/90 drop-shadow-[0_0_15px_rgba(157,78,221,0.3)]' 
                : 'text-pastel-primary/90 drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]')
            }
          `}>
            {loadingMessage}
          </p>
        </div>
      </div>
    </div>
  );
} 