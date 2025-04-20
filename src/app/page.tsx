// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SplashScreen from '@/components/SplashScreen';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSplashComplete = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  return showSplash ? <SplashScreen onComplete={handleSplashComplete} /> : null;
}
