import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name) => req.cookies.get(name)?.value,
        set: (name, value, options) => {
          res.cookies.set({
            name,
            value,
            ...options,
            sameSite: 'lax',
            path: '/',
          });
        },
        remove: (name, options) => {
          res.cookies.set({
            name,
            value: '',
            ...options,
            maxAge: 0,
            path: '/',
          });
        },
      },
    }
  );

  try {
    const { data: { session } } = await supabase.auth.getSession();
    const pathname = req.nextUrl.pathname;

    // Skip middleware for public routes and API routes
    if (pathname.startsWith('/_next') || 
        pathname.startsWith('/static') || 
        pathname.startsWith('/api/') ||
        pathname === '/favicon.ico' ||
        pathname === '/' ||  // Allow access to splash screen
        pathname === '/login') {  // Allow access to login page
      return res;
    }

    // Only handle initial SSR requests, let client handle the rest
    const isSSRRequest = !req.headers.get('sec-fetch-mode');
    if (!isSSRRequest) {
      return res;
    }

    // Handle authentication for protected routes
    if (!session && pathname !== '/login') {
      const redirectUrl = new URL('/login', req.url);
      return NextResponse.redirect(redirectUrl);
    }

    // Redirect authenticated users to dashboard
    if (session) {
      if (pathname === '/login' || pathname === '/') {
        const redirectUrl = new URL('/dashboard', req.url);
        return NextResponse.redirect(redirectUrl);
      }
    }

    return res;
  } catch (error) {
    console.error('Middleware - Error:', error);
    return res;
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)',],
}; 