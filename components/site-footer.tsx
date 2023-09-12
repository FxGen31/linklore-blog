import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { siteConfig } from '@/configs/site-config';

// Site footer
export default function SiteFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={cn(className, 'border-t py-6 md:px-8 md:py-0')}
      {...props}
    >
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Images provided by Unsplash
        </p>
        <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
          The source code is available on{' '}
          <a
            href={siteConfig.links.gitHub}
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
