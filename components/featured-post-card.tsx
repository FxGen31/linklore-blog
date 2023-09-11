import { Button } from '@/components/ui/button';
import BylineMetadata from '@/components/byline-metadata';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import KeywordsBadgeList from '@/components/keywords-badge-list';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { Separator } from '@/components/ui/separator';
import ShareButtonList from '@/components/share-button-list';
import { siteConfig } from '@/configs/site-config';

interface FeaturedPostCardProps extends HTMLAttributes<HTMLDivElement> {
    post: Post;
}

// Highlighted post
export default function FeaturedPostCard({
    className,
    post,
    ...props
}: FeaturedPostCardProps) {
    // Post publish date, format example: 01, Jan, 2000
    const postDate = format(parseISO(post.date), 'd, LLL, yyyy');

    return (
        <div className={cn(className, 'flex flex-col')} {...props}>
            {/* Post cover image */}
            <div className='block relative w-full pt-[75%] sm:pt-[65%]'>
                <Image
                    alt={`${post.title} cover image`}
                    src={post.coverImage}
                    fill
                    sizes='(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 1456px'
                    className='object-cover rounded-3xl'
                />
                {/* Post keywords */}
                <KeywordsBadgeList
                    className='absolute top-4 left-4'
                    keywords={post.keywords}
                />
            </div>
            {/* Post details */}
            <div className='flex flex-col mt-5 px-4 '>
                {/* Metadata - author, publish date */}
                <BylineMetadata
                    date={`${postDate.split(',').at(1)} ${postDate
                        .split(',')
                        .at(0)},${postDate.split(',').at(2)}`}
                />
                <Link href={post.url}>
                    <h2 className='font-semibold text-base sm:text-lg md:text-xl line-clamp-2 hover:text-indigo-500'>
                        {post.title}
                    </h2>
                </Link>
                <span className='text-muted-foreground text-sm/6 lg:text-base/8 line-clamp-1'>
                    {post.description}
                </span>
                <Separator className='mt-4 lg:mt-5' />
                {/* Actions */}
                <div className='flex items-center justify-between mt-3'>
                    {/* Share post on social medias */}
                    <ShareButtonList
                        iconSize={32}
                        shareUrl={`${siteConfig.baseURL}${post.url}`}
                        title={post.title}
                    />
                    <Link href={post.url}>
                        <Button variant='secondary' size='lg'>
                            Read Blog
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
