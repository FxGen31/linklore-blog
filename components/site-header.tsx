import DesktopNavigationMenu from '@/components/desktop-navigation-menu';
import Link from 'next/link';
import MobileNavigationMenu from '@/components/mobile-navigation-menu';
import { siteConfig } from '@/configs/site-config';

// Site header
export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-card backdrop-blur'>
      <div className='container flex h-20 items-center justify-between'>
        {/* Site logo */}
        <Link href='/'>
          <h3 className='font-bangers text-3xl font-medium leading-none tracking-wider'>
            {siteConfig.metaData.title}
          </h3>
          <p className='font-mansalva italic text-muted-foreground'>
            Lorem ipsum dolor
          </p>
        </Link>
        {/* Nav menu on laptop */}
        <DesktopNavigationMenu className='hidden md:flex' />
        {/* Nav menu on mobile */}
        <MobileNavigationMenu className='md:hidden' />
      </div>
    </header>
  );
}
