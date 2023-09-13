import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/configs/site-config';

interface BylineMetadataProps extends HTMLAttributes<HTMLDivElement> {
  date: string;
}

// Metadata of posts or portfolio projects including avatar, author, and publish date
export default function BylineMetadata({
  className,
  date,
  ...props
}: BylineMetadataProps) {
  return (
    <div className={cn(className, 'space-y-3 text-sm')} {...props}>
      <div className='inline-flex flex-wrap items-center'>
        <a
          aria-label='link to author github profile'
          className='flex items-center space-x-2'
          href={siteConfig.links.gitHub}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Avatar className='h-8 w-8'>
            <AvatarImage
              src={siteConfig.avatar}
              alt={`@${siteConfig.metaData.author} avatar`}
            />
            <AvatarFallback>{siteConfig.metaData.author}</AvatarFallback>
          </Avatar>
          <span className='block font-medium text-subdued-foreground hover:text-indigo-500'>
            {siteConfig.metaData.author}
          </span>
        </a>
        <span className='ml-2 font-bold text-muted-foreground'>·</span>
        <time className='ml-2 uppercase text-muted-foreground'>{date}</time>
      </div>
    </div>
  );
}
