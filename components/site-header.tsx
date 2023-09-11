import DesktopNavigationMenu from '@/components/desktop-navigation-menu';
import Link from 'next/link';
import MobileNavigationMenu from '@/components/mobile-navigation-menu';
import { siteConfig } from '@/configs/site-config';

// Site header
export default function SiteHeader() {
    return (
        <header className='backdrop-blur sticky top-0 z-50 w-full bg-card border-b'>
            <div className='container h-20 flex items-center justify-between'>
                {/* Site logo */}
                <Link href='/'>
                    <h3 className='font-medium text-3xl font-bangers tracking-wider leading-none'>
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
