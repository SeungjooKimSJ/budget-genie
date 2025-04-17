'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Session, User } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  signOut: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    // 세션 상태 변경 시 실행할 핸들러
    const handleAuthChange = async (session: Session | null) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session) {
        console.log('Session is valid, user is authenticated');
      } else {
        console.log('No valid session found');
      }
    };

    // 초기 세션 체크
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        await handleAuthChange(session);
      } catch (error) {
        console.error('Error checking initial session:', error);
        await handleAuthChange(null);
      } finally {
        setIsLoading(false);
      }
    };

    // Auth 상태 변경 구독
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event);
        await handleAuthChange(session);
      }
    );

    initializeAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  // 라우팅 로직을 별도의 useEffect로 분리
  useEffect(() => {
    if (!isLoading) {
      if (session) {
        if (window.location.pathname === '/login') {
          router.replace('/dashboard');
        }
      } else {
        if (window.location.pathname !== '/login' && window.location.pathname !== '/') {
          router.replace('/login');
        }
      }
    }
  }, [session, isLoading, router]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, session, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 