// src/app/page.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';

export default function HomePage() {
  const router = useRouter();
  const { session, isLoading: authLoading } = useAuth();
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  // 로그인 페이지로의 전환을 처리하는 함수
  const handleTransition = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsVisible(false);
    
    setTimeout(() => {
      router.push('/login');
    }, 500);
  }, [isTransitioning, router]);

  // 인증 상태가 확인된 후에만 타이머 시작
  useEffect(() => {
    if (authLoading) return;

    if (session) {
      router.push('/dashboard');
      return;
    }

    if (!timerStarted) {
      setTimerStarted(true);
    }
  }, [authLoading, session, router, timerStarted]);

  // 타이머 로직
  useEffect(() => {
    if (!timerStarted || isTransitioning) return;

    const timer = setTimeout(() => {
      handleTransition();
    }, 3500);

    return () => clearTimeout(timer);
  }, [timerStarted, isTransitioning, handleTransition]);

  // 화면 클릭 시 로그인 페이지로 이동
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTransition();
  };

  // AuthProvider가 로딩 중이면 로딩 화면 표시
  if (authLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-genie-blue dark:text-genie-blue magic-hover">
            Budget Genie
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // 이미 로그인된 경우 아무것도 표시하지 않음 (대시보드로 리다이렉트됨)
  if (session) {
    return null;
  }

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="text-center select-none"
        role="button"
        tabIndex={0}
        aria-label="Go to login page"
      >
        <h1 className="text-4xl font-bold text-genie-blue dark:text-genie-blue magic-hover">
          Budget Genie
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Your magical financial companion
        </p>
        <p className="mt-4 text-sm text-gray-500">
          {timerStarted ? `Click anywhere to continue` : 'Initializing...'}
        </p>
      </div>
    </div>
  );
}
