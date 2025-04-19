import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface SignUpFormProps {
  onClose: () => void;
}

interface PasswordValidation {
  minLength: boolean;
  hasLetter: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose }) => {
  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // 비밀번호 유효성 검사 상태
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    minLength: false,
    hasLetter: false,
    hasNumber: false,
    hasSpecial: false,
  });

  // 비밀번호 표시 상태
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 비밀번호 확인 상태
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState<boolean | null>(null);
  const [isCheckingPassword, setIsCheckingPassword] = useState(false);

  // 에러 상태 관리
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();

  // 이름 필드 문자 수 제한
  const NAME_MAX_LENGTH = 20;

  // 비밀번호 유효성 검사
  useEffect(() => {
    const validation = {
      minLength: formData.password.length >= 6,
      hasLetter: /[a-zA-Z]/.test(formData.password),
      hasNumber: /[0-9]/.test(formData.password),
      hasSpecial: /[^a-zA-Z0-9]/.test(formData.password),
    };
    setPasswordValidation(validation);
  }, [formData.password]);

  // 비밀번호 확인 검사
  useEffect(() => {
    if (formData.confirmPassword) {
      setIsCheckingPassword(true);
      const timer = setTimeout(() => {
        setIsConfirmPasswordValid(formData.password === formData.confirmPassword);
        setIsCheckingPassword(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formData.confirmPassword, formData.password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // 비밀번호 유효성 검사
    const isPasswordValid = Object.values(passwordValidation).every(Boolean);
    if (!isPasswordValid) {
      setError('Please ensure your password meets all requirements');
      setIsLoading(false);
      return;
    }

    // 비밀번호 확인 검증
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }

    try {
      // 이름 결합
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;

      // Supabase로 회원가입 요청
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email.toLowerCase(),
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: fullName,
          },
        },
      });

      if (signUpError) {
        console.error('회원가입 에러:', signUpError);
        throw signUpError;
      }

      if (data && data.user) {
        // 회원가입 성공 시 처리
        console.log('회원가입 성공');
        onClose();
      }
    } catch (error: any) {
      console.error('Error details:', error);
      setError(error.message || 'An error occurred during sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    // 이메일의 첫 글자를 자동으로 소문자로 변환
    if (name === 'email' && value.length > 0) {
      processedValue = value.charAt(0).toLowerCase() + value.slice(1);
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 이름 입력 필드 (First Name & Last Name) */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            maxLength={NAME_MAX_LENGTH}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all placeholder-gray-400 capitalize"
            required
          />
          {formData.firstName.length === NAME_MAX_LENGTH && (
            <p className="mt-1 text-xs text-amber-600">
              Maximum character limit reached
            </p>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            maxLength={NAME_MAX_LENGTH}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all placeholder-gray-400 capitalize"
            required
          />
          {formData.lastName.length === NAME_MAX_LENGTH && (
            <p className="mt-1 text-xs text-amber-600">
              Maximum character limit reached
            </p>
          )}
        </div>
      </div>

      {/* 이메일 입력 필드 */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all placeholder-gray-400"
          required
        />
      </div>

      {/* 비밀번호 입력 필드 */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            minLength={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all pr-10 placeholder-gray-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        </div>
        {/* 비밀번호 유효성 검사 표시 */}
        <div className="mt-2 space-y-1 text-sm">
          <div className={`flex items-center gap-2 ${passwordValidation.minLength ? 'text-green-600' : 'text-gray-500'}`}>
            {passwordValidation.minLength ? '✅' : '❌'} At least 6 characters
          </div>
          <div className={`flex items-center gap-2 ${passwordValidation.hasLetter ? 'text-green-600' : 'text-gray-500'}`}>
            {passwordValidation.hasLetter ? '✅' : '❌'} At least one letter
          </div>
          <div className={`flex items-center gap-2 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
            {passwordValidation.hasNumber ? '✅' : '❌'} At least one number
          </div>
          <div className={`flex items-center gap-2 ${passwordValidation.hasSpecial ? 'text-green-600' : 'text-gray-500'}`}>
            {passwordValidation.hasSpecial ? '✅' : '❌'} At least one special character
          </div>
        </div>
      </div>

      {/* 비밀번호 확인 필드 */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter your password again"
            minLength={6}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all pr-10 placeholder-gray-400
              ${isConfirmPasswordValid === true ? 'border-green-500' : 
                isConfirmPasswordValid === false ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            {isCheckingPassword && (
              <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {!isCheckingPassword && isConfirmPasswordValid === true && (
              <span className="text-green-500">✅</span>
            )}
            {!isCheckingPassword && isConfirmPasswordValid === false && (
              <span className="text-red-500">❌</span>
            )}
          </div>
        </div>
        {!isCheckingPassword && isConfirmPasswordValid === false && (
          <p className="mt-1 text-xs text-red-500">
            Passwords do not match
          </p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-genie-blue text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default SignUpForm; 