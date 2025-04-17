import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2초 후에 자동으로 스플래시 스크린 종료
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // 로고 클릭 시 즉시 스플래시 스크린 종료
  const handleLogoClick = () => {
    setIsVisible(false);
    onFinish();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={handleLogoClick}
        className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
        role="button"
        tabIndex={0}
        aria-label="Go to login page"
      >
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          Penny Journal
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
          Track your expenses wisely
        </p>
      </div>
    </div>
  );
};

export default SplashScreen; 