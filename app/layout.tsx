import { cn } from '@/lib/utils';
import { Poppins, Bangers, Mansalva } from 'next/font/google';
import { siteConfig } from '@/configs/site-config';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import ThemeProvider from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';

// Primary font family
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Font family used for logo only
const bangers = Bangers({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bangers',
});

// Font family used for logo only
const mansalva = Mansalva({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-mansalva',
});

export const metadata: Metadata = {
  title: siteConfig.metaData.title,
  description: siteConfig.metaData.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Hide hydration warning
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          bangers.variable,
          mansalva.variable,
          poppins.className,
          'min-h-screen antialiased'
        )}
      >
        {/* Provide dark mode support */}
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1'>{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
