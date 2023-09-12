'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import ModeToggler from '@/components/mode-toggler';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navItems } from '@/configs/nav-config';
import { siteConfig } from '@/configs/site-config';

// Site navigation menu on laptop screen size
export default function DesktopNavigationMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      {/* Site nav links */}
      <div className={className} {...props}>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.label}>
                <Link href={navItem.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {navItem.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* External links */}
      <nav className={cn(className, 'items-center')}>
        <Link
          href={siteConfig.links.gitHub}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='ghost' size='icon'>
            <GitHubLogoIcon className='h-6 w-6' />
            <span className='sr-only'>GitHub logo icon</span>
          </Button>
        </Link>
        <Link
          href={siteConfig.links.linkedIn}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='ghost' size='icon'>
            <LinkedInLogoIcon className='h-6 w-6' />
            <span className='sr-only'>LinkedIn logo icon</span>
          </Button>
        </Link>
        <Link
          href={siteConfig.links.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='ghost' size='icon'>
            <TwitterLogoIcon className='h-6 w-6' />
            <span className='sr-only'>Twitter logo icon</span>
          </Button>
        </Link>
        {/* Theme toggler */}
        <ModeToggler />
      </nav>
    </>
  );
}
