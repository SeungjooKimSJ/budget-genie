import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface SignUpFormProps {
  onClose: () => void;
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

  // 에러 상태 관리
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();

  // 이름 필드 문자 수 제한
  const NAME_MAX_LENGTH = 20;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

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

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          minLength={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          minLength={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genie-blue focus:border-transparent transition-all"
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
        className="w-full bg-genie-blue text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default SignUpForm; 