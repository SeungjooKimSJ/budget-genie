import { AuthProvider } from '@/components/AuthProvider';
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
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
