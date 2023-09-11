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
                'flex items-center rounded-3xl bg-card border p-3 lg:p-4 transition shadow-sm hover:shadow-md'
            )}
            {...props}
        >
            <div className='hidden sm:block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full me-3 sm:me-5 rounded-2xl overflow-hidden'>
                <Image
                    sizes='(max-width: 600px) 180px, 400px'
                    className='aspect-square object-cover w-full h-full'
                    fill
                    src={post.coverImage}
                    alt={`${post.title} cover image`}
                />
            </div>
            <div className='flex flex-col grow'>
                <div className='space-y-3'>
                    {/* Post keywords */}
                    <KeywordsBadgeList keywords={post.keywords} />
                    <h2 className='font-semibold text-sm md:text-base line-clamp-2 hover:text-indigo-500'>
                        <Link href={post.url}>{post.title}</Link>
                    </h2>
                    <BylineMetadata
                        date={`${postDate.split(',').at(1)} ${postDate
                            .split(',')
                            .at(0)},${postDate.split(',').at(2)}`}
                    />
                </div>
                {/* Actions */}
                <div className='flex items-center justify-between mt-2'>
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
