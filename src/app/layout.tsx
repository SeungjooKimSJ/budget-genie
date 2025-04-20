import { AuthProvider } from '@/components/AuthProvider';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Budget Genie',
  description: 'Your magical financial companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <ThemeProvider>
          <AuthProvider>
            <div id="app-root" className="relative min-h-screen">
              {children}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
