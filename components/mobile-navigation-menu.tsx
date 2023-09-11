import { Button } from '@/components/ui/button';
import {
    GitHubLogoIcon,
    HamburgerMenuIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import ModeToggler from '@/components/mode-toggler';
import { navItems } from '@/configs/nav-config';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/configs/site-config';

export default function MobileNavigationMenu({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className} {...props}>
            <Sheet>
                <SheetTrigger asChild>
                    {/* Hamburger menu */}
                    <Button
                        variant='ghost'
                        className='px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
                    >
                        <HamburgerMenuIcon className='h-7 w-7' />
                        <span className='sr-only'>
                            Mobile navigation toggle Menu
                        </span>
                    </Button>
                </SheetTrigger>
                <SheetContent className='w-4/5 bg-card p-0'>
                    <SheetHeader className='p-6 pb-4'>
                        <SheetTitle>
                            {/* Site logo */}
                            <Link href='/'>
                                <h3 className='font-medium text-3xl font-bangers tracking-wider leading-none'>
                                    {siteConfig.metaData.title}
                                </h3>
                                <p className='font-mansalva italic text-muted-foreground'>
                                    Lorem ipsum dolor
                                </p>
                            </Link>
                        </SheetTitle>
                        {/* Site description */}
                        <SheetDescription className='mt-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam praesentium corrupti fuga autem natus,
                            earum nisi veniam minus vero blanditiis ex ut
                            laborum fugit cumque rem? Amet, quae? Consectetur,
                            delectus?
                        </SheetDescription>
                        {/* Social media links */}
                        <div className='flex justify-between mt-4'>
                            <div>
                                <Link
                                    href={siteConfig.links.gitHub}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button variant='ghost' size='icon'>
                                        <GitHubLogoIcon className='h-6 w-6' />
                                        <span className='sr-only'>
                                            GitHub logo icon
                                        </span>
                                    </Button>
                                </Link>
                                <Link
                                    href={siteConfig.links.linkedIn}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button variant='ghost' size='icon'>
                                        <LinkedInLogoIcon className='h-6 w-6' />
                                        <span className='sr-only'>
                                            LinkedIn logo icon
                                        </span>
                                    </Button>
                                </Link>
                                <Link
                                    href={siteConfig.links.twitter}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button variant='ghost' size='icon'>
                                        <TwitterLogoIcon className='h-6 w-6' />
                                        <span className='sr-only'>
                                            Twitter logo icon
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                            <ModeToggler />
                        </div>
                    </SheetHeader>
                    <Separator />
                    {/* Nav links */}
                    <div className='grid gap-4 px-2 py-4'>
                        {navItems.map((navItem) => (
                            <Link
                                key={navItem.label}
                                href={navItem.href}
                                className='tracking-wide font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-full px-4 py-1.5'
                            >
                                <span>{navItem.label}</span>
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
