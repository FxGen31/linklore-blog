import { Button } from '@/components/ui/button';
import BylineMetadata from '@/components/byline-metadata';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import KeywordsBadgeList from '@/components/keywords-badge-list';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import ShareButtonList from '@/components/share-button-list';
import { siteConfig } from '@/configs/site-config';

interface RegularPostCardProps extends HTMLAttributes<HTMLDivElement> {
  post: Post;
}

// Post card
export default function RegularPostCard({
  className,
  post,
  ...props
}: RegularPostCardProps) {
  // Post publish date, format example: 01, Jan, 2000
  const postDate = format(parseISO(post.date), 'd, LLL, yyyy');

  return (
    <div
      className={cn(
        className,
        'flex items-center rounded-3xl border bg-card p-3 shadow-sm transition hover:shadow-md lg:p-4'
      )}
      {...props}
    >
      <div className='relative me-3 hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl sm:me-5 sm:block sm:h-full sm:w-40'>
        <Image
          sizes='(max-width: 768px) 256px, 384px'
          className='aspect-square h-full w-full object-cover'
          fill
          src={post.coverImage}
          alt={`${post.title} cover image`}
        />
      </div>
      <div className='flex grow flex-col'>
        <div className='space-y-3'>
          {/* Post keywords */}
          <KeywordsBadgeList keywords={post.keywords} />
          <h2 className='line-clamp-2 text-sm font-semibold hover:text-indigo-500 md:text-base'>
            <Link href={post.url}>{post.title}</Link>
          </h2>
          <BylineMetadata
            date={`${postDate.split(',').at(1)} ${postDate
              .split(',')
              .at(0)},${postDate.split(',').at(2)}`}
          />
        </div>
        {/* Actions */}
        <div className='mt-2 flex items-center justify-between'>
          <ShareButtonList
            iconSize={32}
            shareUrl={`${siteConfig.baseURL}${post.url}`}
            title={post.title}
          />
          <Button variant='outline'>Read Blog</Button>
        </div>
      </div>
    </div>
  );
}
