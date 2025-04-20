'use client';

import { useEffect, useState } from 'react';
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
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [message, setMessage] = useState(MAGICAL_SUBHEADINGS[0]);
  const [loadingMessage, setLoadingMessage] = useState(LOADING_MESSAGES[0]);
  const [isClient, setIsClient] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

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
        ${theme === 'default'
          ? 'bg-gradient-to-br from-indigo-100 via-indigo-300 to-indigo-600'
          : 'bg-gradient-to-br from-pastel-primary via-pastel-secondary to-pastel-accent'
        }
        ${isFading ? 'bg-opacity-0 backdrop-brightness-0' : 'bg-opacity-100'}
        cursor-pointer
      `}
      onClick={handleClick}
    >
      {/* 테마 전환 버튼 */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTheme();
        }}
        className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 transform hover:scale-110
          ${theme === 'default'
            ? 'bg-white/20 hover:bg-white/30 text-white'
            : 'bg-white/40 hover:bg-white/50 text-pastel-text'
          }
          ${isFading ? 'opacity-0' : 'opacity-100'}
        `}
        aria-label="Toggle theme"
      >
        {theme === 'default' ? '🌸' : '🌙'}
      </button>

      <div className={`
        relative w-full max-w-md p-4
        flex flex-col items-center justify-center gap-6
        transition-all duration-800 ease-in-out
        ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
      `}>
        {/* 로고 */}
        <h1 className={`
          text-4xl md:text-5xl font-bold text-center mb-0
          ${theme === 'default' ? 'text-white' : 'text-pastel-text'}
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
                  ${theme === 'default' ? 'drop-shadow-glow' : 'drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]'}
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
            ${theme === 'default' ? 'text-soft-ivory drop-shadow-glow' : 'text-pastel-text drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]'}
            px-4
          `}>
            {message}
          </h2>

          {/* 로딩 메시지 */}
          <p className={`
            text-lg md:text-xl text-center opacity-80
            ${theme === 'default' ? 'text-soft-ivory' : 'text-pastel-text'}
          `}>
            {loadingMessage}
          </p>
        </div>
      </div>
    </div>
  );
} 